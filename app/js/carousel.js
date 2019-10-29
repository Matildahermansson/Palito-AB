
// ------------------- Carousel START

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex-1].style.display = "flex"; 
  dots[slideIndex-1].className += " dot-active";
}
// // ------------------- Carousel START
// ERIKS LÖSNING- NEXT KNAPPAR FUNGERAR EJ 
// function Carousel(name){
//   this.el = document.getElementById(name);

//   this.slideIndex = 1;
//   this.nav = this.el.querySelector('[data-js="nav"]');
//   this.dots = this.el.querySelectorAll('.dot');
//   this.slides = this.el.querySelectorAll('.mySlides');
//   this.init();
// }

// Carousel.prototype.init = function() {
//   var self = this;
//   this.showSlides(this.slideIndex);

//   this.nav.addEventListener('click', function(e) {
//     if (e.target.classList.contains('dot')) {
//       var index = e.target.getAttribute('data-index');
//       if(index) {
//         self.currentSlide(index);
//       }
//     }
//   });
// }

// Carousel.prototype.showSlides = function(n) {
//   var i;
//   if (n > this.slides.length) {this.slideIndex = 1} 
//   if (n < 1) {this.slideIndex = slides.length}
//   for (i = 0; i < this.slides.length; i++) {
//       this.slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < this.dots.length; i++) {
//       this.dots[i].className = this.dots[i].className.replace(" active", "");
//   }
//   this.slides[this.slideIndex-1].style.display = "flex";
  
 
//   this.dots[this.slideIndex-1].className += " active";
// }

// Carousel.prototype.plusSlides = function(n) {
//   this.showSlides(this.slideIndex += n);
// }
// Carousel.prototype.currentSlide = function(n) {
//   this.showSlides(this.slideIndex = n);
// }