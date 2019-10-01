/* Smooth scroll */

function Navigation() {
  this.scroll = undefined;
  this.init();
}

Navigation.prototype.init = function() {
  this.scroll = new SmoothScroll('.nav a[href*="#"]', {
    speed:800
  });
}