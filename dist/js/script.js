
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

let form = document.getElementById('mailform');
let email = document.getElementById('email');
let message = document.getElementById('message');
let submitButton = document.getElementById('submitbutton');
let feeback = document.getElementById('feedback');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    // $.ajax({
    //     url: 'mail.php',
    //     type: 'POST',
    //     data: {
    //         email: email.value,
    //         message: message.value
    //     },

    //     success: function(res) {
    //         let jsonResp = JSON.parse(res);
    //         if(jsonResp.success === true) {
    //             mailSuccess();
    //         } else {
    //             console.log(res);
    //         }
    //     },

    //     error(xhr, status, error) {
    //         console.log(xhr, status, error)
    //     }
    // });
    mailSuccess();
});

function mailSuccess() {
    email.value = '';
    message.value = '';
    submitButton.style.display = 'none';
    feedback.innerText = "Your message has been sent!"
}





function openService(evt, serviceName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(serviceName).style.display = "block";
  evt.currentTarget.className += " active";
}
/*! smooth-scroll v15.0.0 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if("function"==typeof window.CustomEvent)return!1;e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),r=window.setTimeout((function(){t(o+i)}),i);return e=o+i,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){return"querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype},o=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},i=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)},r=function(t){return parseInt(e.getComputedStyle(t).height,10)},a=function(e){var t;try{t=decodeURIComponent(e)}catch(n){t=e}return t},u=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,r="",a=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===a?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(i):"\\"+n.charAt(i)}var u;try{u=decodeURIComponent("#"+r)}catch(e){u="#"+r}return u},c=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},s=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},l=function(t,n,o,i){var r=0;if(t.offsetParent)do{r+=t.offsetTop,t=t.offsetParent}while(t);return r=Math.max(r-n-o,0),i&&(r=Math.min(r,s()-e.innerHeight)),r},m=function(e){return e?r(e)+e.offsetTop:0},d=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:n},f=function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)},h=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},p=function(t,n,o,i){if(n.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:i}});document.dispatchEvent(r)}};return function(r,g){var v,w,y,E,b,S,A,C={};C.cancelScroll=function(e){cancelAnimationFrame(A),A=null,e||p("scrollCancel",v)},C.animateScroll=function(n,i,r){var a=o(v||t,r||{}),u="[object Number]"===Object.prototype.toString.call(n),g=u||!n.tagName?null:n;if(u||g){var w=e.pageYOffset;a.header&&!E&&(E=document.querySelector(a.header)),b||(b=m(E));var y,S,O,I=u?n:l(g,b,parseInt("function"==typeof a.offset?a.offset(n,i):a.offset,10),a.clip),q=I-w,M=s(),F=0,L=d(q,a),x=function(t,o){var r=e.pageYOffset;if(t==o||r==o||(w<o&&e.innerHeight+r)>=M)return C.cancelScroll(!0),h(n,o,u),p("scrollStop",a,n,i),y=null,A=null,!0},H=function(t){y||(y=t),F+=t-y,S=F/parseInt(L,10),S=S>1?1:S,O=w+q*c(a,S),e.scrollTo(0,Math.floor(O)),x(O,I)||(A=e.requestAnimationFrame(H),y=t)};0===e.pageYOffset&&e.scrollTo(0,0),f(n,u,a),p("scrollStart",a,n,i),C.cancelScroll(!0),e.requestAnimationFrame(H)}};var O=function(t){if(!i()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(y=t.target.closest(r))&&"a"===y.tagName.toLowerCase()&&!t.target.closest(v.ignore)&&y.hostname===e.location.hostname&&y.pathname===e.location.pathname&&/#/.test(y.href)){var n=u(a(y.hash)),o=v.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);o=o||"#top"!==n?o:document.documentElement,o&&(t.preventDefault(),C.animateScroll(o,y))}},I=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(v)&&history.state.anchor){var t=document.querySelector(u(a(history.state.anchor)));t&&C.animateScroll(t,null,{updateURL:!1})}},q=function(e){S||(S=setTimeout((function(){S=null,b=m(E)}),66))};return C.destroy=function(){v&&(document.removeEventListener("click",O,!1),e.removeEventListener("resize",q,!1),e.removeEventListener("popstate",I,!1),C.cancelScroll(),v=null,w=null,y=null,E=null,b=null,S=null,A=null)},C.init=function(i){if(!n())throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";C.destroy(),v=o(t,i||{}),E=v.header?document.querySelector(v.header):null,b=m(E),document.addEventListener("click",O,!1),E&&e.addEventListener("resize",q,!1),v.updateURL&&v.popstate&&e.addEventListener("popstate",I,!1)},C.init(g),C}}));


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmpzIiwibmF2aWdhdGlvbi5qcyIsIm51bmp1Y2tzLmpzIiwicGhwbWFpbGVyLmpzIiwic2VydmljZXMuanMiLCJ1dGlscy9zbW9vdGgtc2Nyb2xsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLSBDYXJvdXNlbCBTVEFSVFxuXG52YXIgc2xpZGVJbmRleCA9IDE7XG5zaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xuXG4vLyBOZXh0L3ByZXZpb3VzIGNvbnRyb2xzXG5mdW5jdGlvbiBwbHVzU2xpZGVzKG4pIHtcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IG4pO1xufVxuXG4vLyBUaHVtYm5haWwgaW1hZ2UgY29udHJvbHNcbmZ1bmN0aW9uIGN1cnJlbnRTbGlkZShuKSB7XG4gIHNob3dTbGlkZXMoc2xpZGVJbmRleCA9IG4pO1xufVxuXG5mdW5jdGlvbiBzaG93U2xpZGVzKG4pIHtcbiAgdmFyIGk7XG4gIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XG4gIHZhciBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRvdFwiKTtcbiAgaWYgKG4gPiBzbGlkZXMubGVuZ3RoKSB7c2xpZGVJbmRleCA9IDF9IFxuICBpZiAobiA8IDEpIHtzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aH1cbiAgZm9yIChpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBkb3QtYWN0aXZlXCIsIFwiXCIpO1xuICB9XG4gIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4gIGRvdHNbc2xpZGVJbmRleC0xXS5jbGFzc05hbWUgKz0gXCIgZG90LWFjdGl2ZVwiO1xufVxuLy8gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLSBDYXJvdXNlbCBTVEFSVFxuLy8gRVJJS1MgTMOWU05JTkctIE5FWFQgS05BUFBBUiBGVU5HRVJBUiBFSiBcbi8vIGZ1bmN0aW9uIENhcm91c2VsKG5hbWUpe1xuLy8gICB0aGlzLmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XG5cbi8vICAgdGhpcy5zbGlkZUluZGV4ID0gMTtcbi8vICAgdGhpcy5uYXYgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzPVwibmF2XCJdJyk7XG4vLyAgIHRoaXMuZG90cyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpO1xuLy8gICB0aGlzLnNsaWRlcyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnLm15U2xpZGVzJyk7XG4vLyAgIHRoaXMuaW5pdCgpO1xuLy8gfVxuXG4vLyBDYXJvdXNlbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuLy8gICB2YXIgc2VsZiA9IHRoaXM7XG4vLyAgIHRoaXMuc2hvd1NsaWRlcyh0aGlzLnNsaWRlSW5kZXgpO1xuXG4vLyAgIHRoaXMubmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvdCcpKSB7XG4vLyAgICAgICB2YXIgaW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbi8vICAgICAgIGlmKGluZGV4KSB7XG4vLyAgICAgICAgIHNlbGYuY3VycmVudFNsaWRlKGluZGV4KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyBDYXJvdXNlbC5wcm90b3R5cGUuc2hvd1NsaWRlcyA9IGZ1bmN0aW9uKG4pIHtcbi8vICAgdmFyIGk7XG4vLyAgIGlmIChuID4gdGhpcy5zbGlkZXMubGVuZ3RoKSB7dGhpcy5zbGlkZUluZGV4ID0gMX0gXG4vLyAgIGlmIChuIDwgMSkge3RoaXMuc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGh9XG4vLyAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgdGhpcy5zbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbi8vICAgfVxuLy8gICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kb3RzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICB0aGlzLmRvdHNbaV0uY2xhc3NOYW1lID0gdGhpcy5kb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcbi8vICAgfVxuLy8gICB0aGlzLnNsaWRlc1t0aGlzLnNsaWRlSW5kZXgtMV0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBcbiBcbi8vICAgdGhpcy5kb3RzW3RoaXMuc2xpZGVJbmRleC0xXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XG4vLyB9XG5cbi8vIENhcm91c2VsLnByb3RvdHlwZS5wbHVzU2xpZGVzID0gZnVuY3Rpb24obikge1xuLy8gICB0aGlzLnNob3dTbGlkZXModGhpcy5zbGlkZUluZGV4ICs9IG4pO1xuLy8gfVxuLy8gQ2Fyb3VzZWwucHJvdG90eXBlLmN1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKG4pIHtcbi8vICAgdGhpcy5zaG93U2xpZGVzKHRoaXMuc2xpZGVJbmRleCA9IG4pO1xuLy8gfSIsIi8qIFNtb290aCBzY3JvbGwgKi9cblxuZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcbiAgdGhpcy5zY3JvbGwgPSB1bmRlZmluZWQ7XG4gIHRoaXMuaW5pdCgpO1xufVxuXG5OYXZpZ2F0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2Nyb2xsID0gbmV3IFNtb290aFNjcm9sbCgnLm5hdiBhW2hyZWYqPVwiI1wiXScsIHtcbiAgICBzcGVlZDo4MDBcbiAgfSk7XG59IiwiIiwibGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbGZvcm0nKTtcbmxldCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xubGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xubGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRidXR0b24nKTtcbmxldCBmZWViYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWRiYWNrJyk7XG5cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICQuYWpheCh7XG4gICAgLy8gICAgIHVybDogJ21haWwucGhwJyxcbiAgICAvLyAgICAgdHlwZTogJ1BPU1QnLFxuICAgIC8vICAgICBkYXRhOiB7XG4gICAgLy8gICAgICAgICBlbWFpbDogZW1haWwudmFsdWUsXG4gICAgLy8gICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLnZhbHVlXG4gICAgLy8gICAgIH0sXG5cbiAgICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgLy8gICAgICAgICBsZXQganNvblJlc3AgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgLy8gICAgICAgICBpZihqc29uUmVzcC5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgLy8gICAgICAgICAgICAgbWFpbFN1Y2Nlc3MoKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSxcblxuICAgIC8vICAgICBlcnJvcih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHhociwgc3RhdHVzLCBlcnJvcilcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pO1xuICAgIG1haWxTdWNjZXNzKCk7XG59KTtcblxuZnVuY3Rpb24gbWFpbFN1Y2Nlc3MoKSB7XG4gICAgZW1haWwudmFsdWUgPSAnJztcbiAgICBtZXNzYWdlLnZhbHVlID0gJyc7XG4gICAgc3VibWl0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZmVlZGJhY2suaW5uZXJUZXh0ID0gXCJZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gc2VudCFcIlxufVxuXG5cblxuXG4iLCJmdW5jdGlvbiBvcGVuU2VydmljZShldnQsIHNlcnZpY2VOYW1lKSB7XG4gIGxldCBpLCB0YWJjb250ZW50LCB0YWJsaW5rcztcbiAgdGFiY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJjb250ZW50XCIpO1xuICBmb3IgKGkgPSAwOyBpIDwgdGFiY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgIHRhYmNvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIHRhYmxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYmxpbmtzXCIpO1xuICBmb3IgKGkgPSAwOyBpIDwgdGFibGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICB0YWJsaW5rc1tpXS5jbGFzc05hbWUgPSB0YWJsaW5rc1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VydmljZU5hbWUpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGV2dC5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbn0iLCIvKiEgc21vb3RoLXNjcm9sbCB2MTUuMC4wIHwgKGMpIDIwMTggQ2hyaXMgRmVyZGluYW5kaSB8IE1JVCBMaWNlbnNlIHwgaHR0cDovL2dpdGh1Yi5jb20vY2ZlcmRpbmFuZGkvc21vb3RoLXNjcm9sbCAqL1xud2luZG93LkVsZW1lbnQmJiFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0JiYoRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdD1mdW5jdGlvbihlKXt2YXIgdCxuPSh0aGlzLmRvY3VtZW50fHx0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoZSksbz10aGlzO2Rve2Zvcih0PW4ubGVuZ3RoOy0tdD49MCYmbi5pdGVtKHQpIT09bzspO313aGlsZSh0PDAmJihvPW8ucGFyZW50RWxlbWVudCkpO3JldHVybiBvfSksKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3Q9dHx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBuLmluaXRDdXN0b21FdmVudChlLHQuYnViYmxlcyx0LmNhbmNlbGFibGUsdC5kZXRhaWwpLG59aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50KXJldHVybiExO2UucHJvdG90eXBlPXdpbmRvdy5FdmVudC5wcm90b3R5cGUsd2luZG93LkN1c3RvbUV2ZW50PWV9KSgpLChmdW5jdGlvbigpe2Zvcih2YXIgZT0wLHQ9W1wibXNcIixcIm1velwiLFwid2Via2l0XCIsXCJvXCJdLG49MDtuPHQubGVuZ3RoJiYhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsrK24pd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT13aW5kb3dbdFtuXStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9d2luZG93W3Rbbl0rXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXXx8d2luZG93W3Rbbl0rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24odCxuKXt2YXIgbz0obmV3IERhdGUpLmdldFRpbWUoKSxpPU1hdGgubWF4KDAsMTYtKG8tZSkpLHI9d2luZG93LnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dChvK2kpfSksaSk7cmV0dXJuIGU9bytpLHJ9KSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUpfSl9KSgpLChmdW5jdGlvbihlLHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sKGZ1bmN0aW9uKCl7cmV0dXJuIHQoZSl9KSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dChlKTplLlNtb290aFNjcm9sbD10KGUpfSkoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcywoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9e2lnbm9yZTpcIltkYXRhLXNjcm9sbC1pZ25vcmVdXCIsaGVhZGVyOm51bGwsdG9wT25FbXB0eUhhc2g6ITAsc3BlZWQ6NTAwLHNwZWVkQXNEdXJhdGlvbjohMSxkdXJhdGlvbk1heDpudWxsLGR1cmF0aW9uTWluOm51bGwsY2xpcDohMCxvZmZzZXQ6MCxlYXNpbmc6XCJlYXNlSW5PdXRDdWJpY1wiLGN1c3RvbUVhc2luZzpudWxsLHVwZGF0ZVVSTDohMCxwb3BzdGF0ZTohMCxlbWl0RXZlbnRzOiEwfSxuPWZ1bmN0aW9uKCl7cmV0dXJuXCJxdWVyeVNlbGVjdG9yXCJpbiBkb2N1bWVudCYmXCJhZGRFdmVudExpc3RlbmVyXCJpbiBlJiZcInJlcXVlc3RBbmltYXRpb25GcmFtZVwiaW4gZSYmXCJjbG9zZXN0XCJpbiBlLkVsZW1lbnQucHJvdG90eXBlfSxvPWZ1bmN0aW9uKCl7dmFyIGU9e307cmV0dXJuIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbih0KXtmb3IodmFyIG4gaW4gdCl7aWYoIXQuaGFzT3duUHJvcGVydHkobikpcmV0dXJuO2Vbbl09dFtuXX19KSksZX0saT1mdW5jdGlvbih0KXtyZXR1cm4hIShcIm1hdGNoTWVkaWFcImluIGUmJmUubWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uKVwiKS5tYXRjaGVzKX0scj1mdW5jdGlvbih0KXtyZXR1cm4gcGFyc2VJbnQoZS5nZXRDb21wdXRlZFN0eWxlKHQpLmhlaWdodCwxMCl9LGE9ZnVuY3Rpb24oZSl7dmFyIHQ7dHJ5e3Q9ZGVjb2RlVVJJQ29tcG9uZW50KGUpfWNhdGNoKG4pe3Q9ZX1yZXR1cm4gdH0sdT1mdW5jdGlvbihlKXtcIiNcIj09PWUuY2hhckF0KDApJiYoZT1lLnN1YnN0cigxKSk7Zm9yKHZhciB0LG49U3RyaW5nKGUpLG89bi5sZW5ndGgsaT0tMSxyPVwiXCIsYT1uLmNoYXJDb2RlQXQoMCk7KytpPG87KXtpZigwPT09KHQ9bi5jaGFyQ29kZUF0KGkpKSl0aHJvdyBuZXcgSW52YWxpZENoYXJhY3RlckVycm9yKFwiSW52YWxpZCBjaGFyYWN0ZXI6IHRoZSBpbnB1dCBjb250YWlucyBVKzAwMDAuXCIpO3Q+PTEmJnQ8PTMxfHwxMjc9PXR8fDA9PT1pJiZ0Pj00OCYmdDw9NTd8fDE9PT1pJiZ0Pj00OCYmdDw9NTcmJjQ1PT09YT9yKz1cIlxcXFxcIit0LnRvU3RyaW5nKDE2KStcIiBcIjpyKz10Pj0xMjh8fDQ1PT09dHx8OTU9PT10fHx0Pj00OCYmdDw9NTd8fHQ+PTY1JiZ0PD05MHx8dD49OTcmJnQ8PTEyMj9uLmNoYXJBdChpKTpcIlxcXFxcIituLmNoYXJBdChpKX12YXIgdTt0cnl7dT1kZWNvZGVVUklDb21wb25lbnQoXCIjXCIrcil9Y2F0Y2goZSl7dT1cIiNcIityfXJldHVybiB1fSxjPWZ1bmN0aW9uKGUsdCl7dmFyIG47cmV0dXJuXCJlYXNlSW5RdWFkXCI9PT1lLmVhc2luZyYmKG49dCp0KSxcImVhc2VPdXRRdWFkXCI9PT1lLmVhc2luZyYmKG49dCooMi10KSksXCJlYXNlSW5PdXRRdWFkXCI9PT1lLmVhc2luZyYmKG49dDwuNT8yKnQqdDooNC0yKnQpKnQtMSksXCJlYXNlSW5DdWJpY1wiPT09ZS5lYXNpbmcmJihuPXQqdCp0KSxcImVhc2VPdXRDdWJpY1wiPT09ZS5lYXNpbmcmJihuPS0tdCp0KnQrMSksXCJlYXNlSW5PdXRDdWJpY1wiPT09ZS5lYXNpbmcmJihuPXQ8LjU/NCp0KnQqdDoodC0xKSooMip0LTIpKigyKnQtMikrMSksXCJlYXNlSW5RdWFydFwiPT09ZS5lYXNpbmcmJihuPXQqdCp0KnQpLFwiZWFzZU91dFF1YXJ0XCI9PT1lLmVhc2luZyYmKG49MS0gLS10KnQqdCp0KSxcImVhc2VJbk91dFF1YXJ0XCI9PT1lLmVhc2luZyYmKG49dDwuNT84KnQqdCp0KnQ6MS04Ki0tdCp0KnQqdCksXCJlYXNlSW5RdWludFwiPT09ZS5lYXNpbmcmJihuPXQqdCp0KnQqdCksXCJlYXNlT3V0UXVpbnRcIj09PWUuZWFzaW5nJiYobj0xKy0tdCp0KnQqdCp0KSxcImVhc2VJbk91dFF1aW50XCI9PT1lLmVhc2luZyYmKG49dDwuNT8xNip0KnQqdCp0KnQ6MSsxNiotLXQqdCp0KnQqdCksZS5jdXN0b21FYXNpbmcmJihuPWUuY3VzdG9tRWFzaW5nKHQpKSxufHx0fSxzPWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCxkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KX0sbD1mdW5jdGlvbih0LG4sbyxpKXt2YXIgcj0wO2lmKHQub2Zmc2V0UGFyZW50KWRve3IrPXQub2Zmc2V0VG9wLHQ9dC5vZmZzZXRQYXJlbnR9d2hpbGUodCk7cmV0dXJuIHI9TWF0aC5tYXgoci1uLW8sMCksaSYmKHI9TWF0aC5taW4ocixzKCktZS5pbm5lckhlaWdodCkpLHJ9LG09ZnVuY3Rpb24oZSl7cmV0dXJuIGU/cihlKStlLm9mZnNldFRvcDowfSxkPWZ1bmN0aW9uKGUsdCl7dmFyIG49dC5zcGVlZEFzRHVyYXRpb24/dC5zcGVlZDpNYXRoLmFicyhlLzFlMyp0LnNwZWVkKTtyZXR1cm4gdC5kdXJhdGlvbk1heCYmbj50LmR1cmF0aW9uTWF4P3QuZHVyYXRpb25NYXg6dC5kdXJhdGlvbk1pbiYmbjx0LmR1cmF0aW9uTWluP3QuZHVyYXRpb25NaW46bn0sZj1mdW5jdGlvbihlLHQsbil7dHx8aGlzdG9yeS5wdXNoU3RhdGUmJm4udXBkYXRlVVJMJiZoaXN0b3J5LnB1c2hTdGF0ZSh7c21vb3RoU2Nyb2xsOkpTT04uc3RyaW5naWZ5KG4pLGFuY2hvcjplLmlkfSxkb2N1bWVudC50aXRsZSxlPT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50P1wiI3RvcFwiOlwiI1wiK2UuaWQpfSxoPWZ1bmN0aW9uKHQsbixvKXswPT09dCYmZG9jdW1lbnQuYm9keS5mb2N1cygpLG98fCh0LmZvY3VzKCksZG9jdW1lbnQuYWN0aXZlRWxlbWVudCE9PXQmJih0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSx0LmZvY3VzKCksdC5zdHlsZS5vdXRsaW5lPVwibm9uZVwiKSxlLnNjcm9sbFRvKDAsbikpfSxwPWZ1bmN0aW9uKHQsbixvLGkpe2lmKG4uZW1pdEV2ZW50cyYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5DdXN0b21FdmVudCl7dmFyIHI9bmV3IEN1c3RvbUV2ZW50KHQse2J1YmJsZXM6ITAsZGV0YWlsOnthbmNob3I6byx0b2dnbGU6aX19KTtkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHIpfX07cmV0dXJuIGZ1bmN0aW9uKHIsZyl7dmFyIHYsdyx5LEUsYixTLEEsQz17fTtDLmNhbmNlbFNjcm9sbD1mdW5jdGlvbihlKXtjYW5jZWxBbmltYXRpb25GcmFtZShBKSxBPW51bGwsZXx8cChcInNjcm9sbENhbmNlbFwiLHYpfSxDLmFuaW1hdGVTY3JvbGw9ZnVuY3Rpb24obixpLHIpe3ZhciBhPW8odnx8dCxyfHx7fSksdT1cIltvYmplY3QgTnVtYmVyXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG4pLGc9dXx8IW4udGFnTmFtZT9udWxsOm47aWYodXx8Zyl7dmFyIHc9ZS5wYWdlWU9mZnNldDthLmhlYWRlciYmIUUmJihFPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYS5oZWFkZXIpKSxifHwoYj1tKEUpKTt2YXIgeSxTLE8sST11P246bChnLGIscGFyc2VJbnQoXCJmdW5jdGlvblwiPT10eXBlb2YgYS5vZmZzZXQ/YS5vZmZzZXQobixpKTphLm9mZnNldCwxMCksYS5jbGlwKSxxPUktdyxNPXMoKSxGPTAsTD1kKHEsYSkseD1mdW5jdGlvbih0LG8pe3ZhciByPWUucGFnZVlPZmZzZXQ7aWYodD09b3x8cj09b3x8KHc8byYmZS5pbm5lckhlaWdodCtyKT49TSlyZXR1cm4gQy5jYW5jZWxTY3JvbGwoITApLGgobixvLHUpLHAoXCJzY3JvbGxTdG9wXCIsYSxuLGkpLHk9bnVsbCxBPW51bGwsITB9LEg9ZnVuY3Rpb24odCl7eXx8KHk9dCksRis9dC15LFM9Ri9wYXJzZUludChMLDEwKSxTPVM+MT8xOlMsTz13K3EqYyhhLFMpLGUuc2Nyb2xsVG8oMCxNYXRoLmZsb29yKE8pKSx4KE8sSSl8fChBPWUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKEgpLHk9dCl9OzA9PT1lLnBhZ2VZT2Zmc2V0JiZlLnNjcm9sbFRvKDAsMCksZihuLHUsYSkscChcInNjcm9sbFN0YXJ0XCIsYSxuLGkpLEMuY2FuY2VsU2Nyb2xsKCEwKSxlLnJlcXVlc3RBbmltYXRpb25GcmFtZShIKX19O3ZhciBPPWZ1bmN0aW9uKHQpe2lmKCFpKCkmJjA9PT10LmJ1dHRvbiYmIXQubWV0YUtleSYmIXQuY3RybEtleSYmXCJjbG9zZXN0XCJpbiB0LnRhcmdldCYmKHk9dC50YXJnZXQuY2xvc2VzdChyKSkmJlwiYVwiPT09eS50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJiF0LnRhcmdldC5jbG9zZXN0KHYuaWdub3JlKSYmeS5ob3N0bmFtZT09PWUubG9jYXRpb24uaG9zdG5hbWUmJnkucGF0aG5hbWU9PT1lLmxvY2F0aW9uLnBhdGhuYW1lJiYvIy8udGVzdCh5LmhyZWYpKXt2YXIgbj11KGEoeS5oYXNoKSksbz12LnRvcE9uRW1wdHlIYXNoJiZcIiNcIj09PW4/ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobik7bz1vfHxcIiN0b3BcIiE9PW4/bzpkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsbyYmKHQucHJldmVudERlZmF1bHQoKSxDLmFuaW1hdGVTY3JvbGwobyx5KSl9fSxJPWZ1bmN0aW9uKGUpe2lmKG51bGwhPT1oaXN0b3J5LnN0YXRlJiZoaXN0b3J5LnN0YXRlLnNtb290aFNjcm9sbCYmaGlzdG9yeS5zdGF0ZS5zbW9vdGhTY3JvbGw9PT1KU09OLnN0cmluZ2lmeSh2KSYmaGlzdG9yeS5zdGF0ZS5hbmNob3Ipe3ZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodShhKGhpc3Rvcnkuc3RhdGUuYW5jaG9yKSkpO3QmJkMuYW5pbWF0ZVNjcm9sbCh0LG51bGwse3VwZGF0ZVVSTDohMX0pfX0scT1mdW5jdGlvbihlKXtTfHwoUz1zZXRUaW1lb3V0KChmdW5jdGlvbigpe1M9bnVsbCxiPW0oRSl9KSw2NikpfTtyZXR1cm4gQy5kZXN0cm95PWZ1bmN0aW9uKCl7diYmKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLE8sITEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHEsITEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsSSwhMSksQy5jYW5jZWxTY3JvbGwoKSx2PW51bGwsdz1udWxsLHk9bnVsbCxFPW51bGwsYj1udWxsLFM9bnVsbCxBPW51bGwpfSxDLmluaXQ9ZnVuY3Rpb24oaSl7aWYoIW4oKSl0aHJvd1wiU21vb3RoIFNjcm9sbDogVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHJlcXVpcmVkIEphdmFTY3JpcHQgbWV0aG9kcyBhbmQgYnJvd3NlciBBUElzLlwiO0MuZGVzdHJveSgpLHY9byh0LGl8fHt9KSxFPXYuaGVhZGVyP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iodi5oZWFkZXIpOm51bGwsYj1tKEUpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLE8sITEpLEUmJmUuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHEsITEpLHYudXBkYXRlVVJMJiZ2LnBvcHN0YXRlJiZlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLEksITEpfSxDLmluaXQoZyksQ319KSk7XG5cbiJdfQ==
