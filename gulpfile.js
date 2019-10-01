// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require ('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const nunjucksRender = require ('gulp-nunjucks-render');
const data = require ('gulp-data')
const log = require('fancy-log');
const chalk =require ('chalk');
const plumber = require('gulp-plumber');
const mode = require ('gulp-mode') ({
    modes: ['prod', 'dev'],
    default: 'dev',
    verbose: false   
});
const fs = require('fs-extra');
var replace = require('gulp-replace');


// File paths
const files = { 
    scssPath: 'app/scss/styles.scss',
    jsPath: 'app/js/**/*.js',
    assets: 'app/assets/**/*'
}

function onError(err) {
    log(chalk.red(err.message))
    this.emit('end')

}


// Converting njk files to html
function nunjucks(){
	return src('app/nunjucks/pages/**/*.+(html|njk)')
	// .pipe(plumber({errorHandler: onError}))
	.pipe(data(function() {
		return JSON.parse(fs.readFileSync('app/nunjucks/data.json'));
	}))
	.pipe(nunjucksRender({
		path: ['app/nunjucks/templates']
	}))
	.pipe(dest('dist'));
};


// Sass task: compiles the style.scss file into style.css
function scssTask(){    
    return src('app/scss/styles.scss')
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(plumber({errorHandler: onError}))
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(mode.prod(cssnano({
            safe: true
        })))
        .pipe(dest('dist/css'))
        .pipe(browsersync.stream()
    ); // put final CSS in dist folder
}

// // JS task: concatenates and uglifies JS files to script.js
// function jsTask(){
//     return src([
//         files.jsPath
//         //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
//         ])
//         .pipe(concat('all.js'))
//         .pipe(uglify())
//         .pipe(dest('dist/js')
//         .pipe(browsersync.stream())
//     );
// }

// Compile script files
function scripts() {
	return src('app/js/**/*.js')
	.pipe(mode.dev(sourcemaps.init()))
	.pipe(plumber({errorHandler: onError}))
	.pipe(concat('script.js'))
	.pipe(mode.prod(uglify()))
	.pipe(mode.dev(sourcemaps.write()))
	.pipe(dest('dist/js/'))
	.pipe(browsersync.stream());
};

// Cachebust
var cbString = new Date().getTime();
function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    
    watch('app/scss/**/*.scss', scssTask);
    watch('app/js/**/*.js', scripts);
    watch('app/nunjucks/**/*.+(html|njk|json)', series(nunjucks, browserSyncReload));
    // watch([files.scssPath, files.jsPath], 
        // parallel(scssTask, jsTask);    
}



function moveAssets() {
    return src(files.assets)
    .pipe(dest('dist/assets'))
}
// Browsersync
function browserSync(done) {
    browsersync.init({
 server: {
 baseDir: './dist'
        }
    });
    done();
}
// Browsersync reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}
// exports.nunjucks = nunjucks;
// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task

exports.default = series(
    moveAssets,
    scssTask, 
    scripts, 
    nunjucks,
    parallel(browserSync, watchTask)
);

// exports.styles = scssTask;

// exports.watch = parallel(browserSync, watchTask)

