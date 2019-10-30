
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmpzIiwibmF2aWdhdGlvbi5qcyIsIm51bmp1Y2tzLmpzIiwicGhwbWFpbGVyLmpzIiwic2VydmljZXMuanMiLCJ1dGlscy9zbW9vdGgtc2Nyb2xsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tIENhcm91c2VsIFNUQVJUXHJcblxyXG52YXIgc2xpZGVJbmRleCA9IDE7XHJcbnNob3dTbGlkZXMoc2xpZGVJbmRleCk7XHJcblxyXG4vLyBOZXh0L3ByZXZpb3VzIGNvbnRyb2xzXHJcbmZ1bmN0aW9uIHBsdXNTbGlkZXMobikge1xyXG4gIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSBuKTtcclxufVxyXG5cclxuLy8gVGh1bWJuYWlsIGltYWdlIGNvbnRyb2xzXHJcbmZ1bmN0aW9uIGN1cnJlbnRTbGlkZShuKSB7XHJcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ID0gbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTbGlkZXMobikge1xyXG4gIHZhciBpO1xyXG4gIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XHJcbiAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG90XCIpO1xyXG4gIGlmIChuID4gc2xpZGVzLmxlbmd0aCkge3NsaWRlSW5kZXggPSAxfSBcclxuICBpZiAobiA8IDEpIHtzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aH1cclxuICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxyXG4gIH1cclxuICBmb3IgKGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkb3RzW2ldLmNsYXNzTmFtZSA9IGRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgZG90LWFjdGl2ZVwiLCBcIlwiKTtcclxuICB9XHJcbiAgc2xpZGVzW3NsaWRlSW5kZXgtMV0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcclxuICBkb3RzW3NsaWRlSW5kZXgtMV0uY2xhc3NOYW1lICs9IFwiIGRvdC1hY3RpdmVcIjtcclxufVxyXG4vLyAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tIENhcm91c2VsIFNUQVJUXHJcbi8vIEVSSUtTIEzDllNOSU5HLSBORVhUIEtOQVBQQVIgRlVOR0VSQVIgRUogXHJcbi8vIGZ1bmN0aW9uIENhcm91c2VsKG5hbWUpe1xyXG4vLyAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuXHJcbi8vICAgdGhpcy5zbGlkZUluZGV4ID0gMTtcclxuLy8gICB0aGlzLm5hdiA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW2RhdGEtanM9XCJuYXZcIl0nKTtcclxuLy8gICB0aGlzLmRvdHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3QnKTtcclxuLy8gICB0aGlzLnNsaWRlcyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnLm15U2xpZGVzJyk7XHJcbi8vICAgdGhpcy5pbml0KCk7XHJcbi8vIH1cclxuXHJcbi8vIENhcm91c2VsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4vLyAgIHRoaXMuc2hvd1NsaWRlcyh0aGlzLnNsaWRlSW5kZXgpO1xyXG5cclxuLy8gICB0aGlzLm5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuLy8gICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvdCcpKSB7XHJcbi8vICAgICAgIHZhciBpbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4vLyAgICAgICBpZihpbmRleCkge1xyXG4vLyAgICAgICAgIHNlbGYuY3VycmVudFNsaWRlKGluZGV4KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyBDYXJvdXNlbC5wcm90b3R5cGUuc2hvd1NsaWRlcyA9IGZ1bmN0aW9uKG4pIHtcclxuLy8gICB2YXIgaTtcclxuLy8gICBpZiAobiA+IHRoaXMuc2xpZGVzLmxlbmd0aCkge3RoaXMuc2xpZGVJbmRleCA9IDF9IFxyXG4vLyAgIGlmIChuIDwgMSkge3RoaXMuc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGh9XHJcbi8vICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgIHRoaXMuc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXHJcbi8vICAgfVxyXG4vLyAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRvdHMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgdGhpcy5kb3RzW2ldLmNsYXNzTmFtZSA9IHRoaXMuZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbi8vICAgfVxyXG4vLyAgIHRoaXMuc2xpZGVzW3RoaXMuc2xpZGVJbmRleC0xXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgXHJcbiBcclxuLy8gICB0aGlzLmRvdHNbdGhpcy5zbGlkZUluZGV4LTFdLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxuLy8gfVxyXG5cclxuLy8gQ2Fyb3VzZWwucHJvdG90eXBlLnBsdXNTbGlkZXMgPSBmdW5jdGlvbihuKSB7XHJcbi8vICAgdGhpcy5zaG93U2xpZGVzKHRoaXMuc2xpZGVJbmRleCArPSBuKTtcclxuLy8gfVxyXG4vLyBDYXJvdXNlbC5wcm90b3R5cGUuY3VycmVudFNsaWRlID0gZnVuY3Rpb24obikge1xyXG4vLyAgIHRoaXMuc2hvd1NsaWRlcyh0aGlzLnNsaWRlSW5kZXggPSBuKTtcclxuLy8gfSIsIi8qIFNtb290aCBzY3JvbGwgKi9cclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XHJcbiAgdGhpcy5zY3JvbGwgPSB1bmRlZmluZWQ7XHJcbiAgdGhpcy5pbml0KCk7XHJcbn1cclxuXHJcbk5hdmlnYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLnNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoJy5uYXYgYVtocmVmKj1cIiNcIl0nLCB7XHJcbiAgICBzcGVlZDo4MDBcclxuICB9KTtcclxufSIsIiIsImxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haWxmb3JtJyk7XHJcbmxldCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xyXG5sZXQgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XHJcbmxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0YnV0dG9uJyk7XHJcbmxldCBmZWViYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWRiYWNrJyk7XHJcblxyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAkLmFqYXgoe1xyXG4gICAgLy8gICAgIHVybDogJ21haWwucGhwJyxcclxuICAgIC8vICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAvLyAgICAgZGF0YToge1xyXG4gICAgLy8gICAgICAgICBlbWFpbDogZW1haWwudmFsdWUsXHJcbiAgICAvLyAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UudmFsdWVcclxuICAgIC8vICAgICB9LFxyXG5cclxuICAgIC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgIC8vICAgICAgICAgbGV0IGpzb25SZXNwID0gSlNPTi5wYXJzZShyZXMpO1xyXG4gICAgLy8gICAgICAgICBpZihqc29uUmVzcC5zdWNjZXNzID09PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBtYWlsU3VjY2VzcygpO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0sXHJcblxyXG4gICAgLy8gICAgIGVycm9yKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh4aHIsIHN0YXR1cywgZXJyb3IpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICBtYWlsU3VjY2VzcygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG1haWxTdWNjZXNzKCkge1xyXG4gICAgZW1haWwudmFsdWUgPSAnJztcclxuICAgIG1lc3NhZ2UudmFsdWUgPSAnJztcclxuICAgIHN1Ym1pdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZmVlZGJhY2suaW5uZXJUZXh0ID0gXCJZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gc2VudCFcIlxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJmdW5jdGlvbiBvcGVuU2VydmljZShldnQsIHNlcnZpY2VOYW1lKSB7XHJcbiAgbGV0IGksIHRhYmNvbnRlbnQsIHRhYmxpbmtzO1xyXG4gIHRhYmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiY29udGVudFwiKTtcclxuICBmb3IgKGkgPSAwOyBpIDwgdGFiY29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgdGFiY29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG4gIHRhYmxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYmxpbmtzXCIpO1xyXG4gIGZvciAoaSA9IDA7IGkgPCB0YWJsaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdGFibGlua3NbaV0uY2xhc3NOYW1lID0gdGFibGlua3NbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gIH1cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZXJ2aWNlTmFtZSkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBldnQuY3VycmVudFRhcmdldC5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbn0iLCIvKiEgc21vb3RoLXNjcm9sbCB2MTUuMC4wIHwgKGMpIDIwMTggQ2hyaXMgRmVyZGluYW5kaSB8IE1JVCBMaWNlbnNlIHwgaHR0cDovL2dpdGh1Yi5jb20vY2ZlcmRpbmFuZGkvc21vb3RoLXNjcm9sbCAqL1xyXG53aW5kb3cuRWxlbWVudCYmIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QmJihFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0PWZ1bmN0aW9uKGUpe3ZhciB0LG49KHRoaXMuZG9jdW1lbnR8fHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChlKSxvPXRoaXM7ZG97Zm9yKHQ9bi5sZW5ndGg7LS10Pj0wJiZuLml0ZW0odCkhPT1vOyk7fXdoaWxlKHQ8MCYmKG89by5wYXJlbnRFbGVtZW50KSk7cmV0dXJuIG99KSwoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dD10fHx7YnViYmxlczohMSxjYW5jZWxhYmxlOiExLGRldGFpbDp2b2lkIDB9O3ZhciBuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7cmV0dXJuIG4uaW5pdEN1c3RvbUV2ZW50KGUsdC5idWJibGVzLHQuY2FuY2VsYWJsZSx0LmRldGFpbCksbn1pZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQpcmV0dXJuITE7ZS5wcm90b3R5cGU9d2luZG93LkV2ZW50LnByb3RvdHlwZSx3aW5kb3cuQ3VzdG9tRXZlbnQ9ZX0pKCksKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTAsdD1bXCJtc1wiLFwibW96XCIsXCJ3ZWJraXRcIixcIm9cIl0sbj0wO248dC5sZW5ndGgmJiF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOysrbil3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPXdpbmRvd1t0W25dK1wiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT13aW5kb3dbdFtuXStcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdfHx3aW5kb3dbdFtuXStcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTt3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbih0LG4pe3ZhciBvPShuZXcgRGF0ZSkuZ2V0VGltZSgpLGk9TWF0aC5tYXgoMCwxNi0oby1lKSkscj13aW5kb3cuc2V0VGltZW91dCgoZnVuY3Rpb24oKXt0KG8raSl9KSxpKTtyZXR1cm4gZT1vK2kscn0pLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZSl9KX0pKCksKGZ1bmN0aW9uKGUsdCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSwoZnVuY3Rpb24oKXtyZXR1cm4gdChlKX0pKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10KGUpOmUuU21vb3RoU2Nyb2xsPXQoZSl9KShcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLChmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjt2YXIgdD17aWdub3JlOlwiW2RhdGEtc2Nyb2xsLWlnbm9yZV1cIixoZWFkZXI6bnVsbCx0b3BPbkVtcHR5SGFzaDohMCxzcGVlZDo1MDAsc3BlZWRBc0R1cmF0aW9uOiExLGR1cmF0aW9uTWF4Om51bGwsZHVyYXRpb25NaW46bnVsbCxjbGlwOiEwLG9mZnNldDowLGVhc2luZzpcImVhc2VJbk91dEN1YmljXCIsY3VzdG9tRWFzaW5nOm51bGwsdXBkYXRlVVJMOiEwLHBvcHN0YXRlOiEwLGVtaXRFdmVudHM6ITB9LG49ZnVuY3Rpb24oKXtyZXR1cm5cInF1ZXJ5U2VsZWN0b3JcImluIGRvY3VtZW50JiZcImFkZEV2ZW50TGlzdGVuZXJcImluIGUmJlwicmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJpbiBlJiZcImNsb3Nlc3RcImluIGUuRWxlbWVudC5wcm90b3R5cGV9LG89ZnVuY3Rpb24oKXt2YXIgZT17fTtyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKHQpe2Zvcih2YXIgbiBpbiB0KXtpZighdC5oYXNPd25Qcm9wZXJ0eShuKSlyZXR1cm47ZVtuXT10W25dfX0pKSxlfSxpPWZ1bmN0aW9uKHQpe3JldHVybiEhKFwibWF0Y2hNZWRpYVwiaW4gZSYmZS5tYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pXCIpLm1hdGNoZXMpfSxyPWZ1bmN0aW9uKHQpe3JldHVybiBwYXJzZUludChlLmdldENvbXB1dGVkU3R5bGUodCkuaGVpZ2h0LDEwKX0sYT1mdW5jdGlvbihlKXt2YXIgdDt0cnl7dD1kZWNvZGVVUklDb21wb25lbnQoZSl9Y2F0Y2gobil7dD1lfXJldHVybiB0fSx1PWZ1bmN0aW9uKGUpe1wiI1wiPT09ZS5jaGFyQXQoMCkmJihlPWUuc3Vic3RyKDEpKTtmb3IodmFyIHQsbj1TdHJpbmcoZSksbz1uLmxlbmd0aCxpPS0xLHI9XCJcIixhPW4uY2hhckNvZGVBdCgwKTsrK2k8bzspe2lmKDA9PT0odD1uLmNoYXJDb2RlQXQoaSkpKXRocm93IG5ldyBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IoXCJJbnZhbGlkIGNoYXJhY3RlcjogdGhlIGlucHV0IGNvbnRhaW5zIFUrMDAwMC5cIik7dD49MSYmdDw9MzF8fDEyNz09dHx8MD09PWkmJnQ+PTQ4JiZ0PD01N3x8MT09PWkmJnQ+PTQ4JiZ0PD01NyYmNDU9PT1hP3IrPVwiXFxcXFwiK3QudG9TdHJpbmcoMTYpK1wiIFwiOnIrPXQ+PTEyOHx8NDU9PT10fHw5NT09PXR8fHQ+PTQ4JiZ0PD01N3x8dD49NjUmJnQ8PTkwfHx0Pj05NyYmdDw9MTIyP24uY2hhckF0KGkpOlwiXFxcXFwiK24uY2hhckF0KGkpfXZhciB1O3RyeXt1PWRlY29kZVVSSUNvbXBvbmVudChcIiNcIityKX1jYXRjaChlKXt1PVwiI1wiK3J9cmV0dXJuIHV9LGM9ZnVuY3Rpb24oZSx0KXt2YXIgbjtyZXR1cm5cImVhc2VJblF1YWRcIj09PWUuZWFzaW5nJiYobj10KnQpLFwiZWFzZU91dFF1YWRcIj09PWUuZWFzaW5nJiYobj10KigyLXQpKSxcImVhc2VJbk91dFF1YWRcIj09PWUuZWFzaW5nJiYobj10PC41PzIqdCp0Oig0LTIqdCkqdC0xKSxcImVhc2VJbkN1YmljXCI9PT1lLmVhc2luZyYmKG49dCp0KnQpLFwiZWFzZU91dEN1YmljXCI9PT1lLmVhc2luZyYmKG49LS10KnQqdCsxKSxcImVhc2VJbk91dEN1YmljXCI9PT1lLmVhc2luZyYmKG49dDwuNT80KnQqdCp0Oih0LTEpKigyKnQtMikqKDIqdC0yKSsxKSxcImVhc2VJblF1YXJ0XCI9PT1lLmVhc2luZyYmKG49dCp0KnQqdCksXCJlYXNlT3V0UXVhcnRcIj09PWUuZWFzaW5nJiYobj0xLSAtLXQqdCp0KnQpLFwiZWFzZUluT3V0UXVhcnRcIj09PWUuZWFzaW5nJiYobj10PC41PzgqdCp0KnQqdDoxLTgqLS10KnQqdCp0KSxcImVhc2VJblF1aW50XCI9PT1lLmVhc2luZyYmKG49dCp0KnQqdCp0KSxcImVhc2VPdXRRdWludFwiPT09ZS5lYXNpbmcmJihuPTErLS10KnQqdCp0KnQpLFwiZWFzZUluT3V0UXVpbnRcIj09PWUuZWFzaW5nJiYobj10PC41PzE2KnQqdCp0KnQqdDoxKzE2Ki0tdCp0KnQqdCp0KSxlLmN1c3RvbUVhc2luZyYmKG49ZS5jdXN0b21FYXNpbmcodCkpLG58fHR9LHM9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpfSxsPWZ1bmN0aW9uKHQsbixvLGkpe3ZhciByPTA7aWYodC5vZmZzZXRQYXJlbnQpZG97cis9dC5vZmZzZXRUb3AsdD10Lm9mZnNldFBhcmVudH13aGlsZSh0KTtyZXR1cm4gcj1NYXRoLm1heChyLW4tbywwKSxpJiYocj1NYXRoLm1pbihyLHMoKS1lLmlubmVySGVpZ2h0KSkscn0sbT1mdW5jdGlvbihlKXtyZXR1cm4gZT9yKGUpK2Uub2Zmc2V0VG9wOjB9LGQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj10LnNwZWVkQXNEdXJhdGlvbj90LnNwZWVkOk1hdGguYWJzKGUvMWUzKnQuc3BlZWQpO3JldHVybiB0LmR1cmF0aW9uTWF4JiZuPnQuZHVyYXRpb25NYXg/dC5kdXJhdGlvbk1heDp0LmR1cmF0aW9uTWluJiZuPHQuZHVyYXRpb25NaW4/dC5kdXJhdGlvbk1pbjpufSxmPWZ1bmN0aW9uKGUsdCxuKXt0fHxoaXN0b3J5LnB1c2hTdGF0ZSYmbi51cGRhdGVVUkwmJmhpc3RvcnkucHVzaFN0YXRlKHtzbW9vdGhTY3JvbGw6SlNPTi5zdHJpbmdpZnkobiksYW5jaG9yOmUuaWR9LGRvY3VtZW50LnRpdGxlLGU9PT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/XCIjdG9wXCI6XCIjXCIrZS5pZCl9LGg9ZnVuY3Rpb24odCxuLG8pezA9PT10JiZkb2N1bWVudC5ib2R5LmZvY3VzKCksb3x8KHQuZm9jdXMoKSxkb2N1bWVudC5hY3RpdmVFbGVtZW50IT09dCYmKHQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIi0xXCIpLHQuZm9jdXMoKSx0LnN0eWxlLm91dGxpbmU9XCJub25lXCIpLGUuc2Nyb2xsVG8oMCxuKSl9LHA9ZnVuY3Rpb24odCxuLG8saSl7aWYobi5lbWl0RXZlbnRzJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLkN1c3RvbUV2ZW50KXt2YXIgcj1uZXcgQ3VzdG9tRXZlbnQodCx7YnViYmxlczohMCxkZXRhaWw6e2FuY2hvcjpvLHRvZ2dsZTppfX0pO2RvY3VtZW50LmRpc3BhdGNoRXZlbnQocil9fTtyZXR1cm4gZnVuY3Rpb24ocixnKXt2YXIgdix3LHksRSxiLFMsQSxDPXt9O0MuY2FuY2VsU2Nyb2xsPWZ1bmN0aW9uKGUpe2NhbmNlbEFuaW1hdGlvbkZyYW1lKEEpLEE9bnVsbCxlfHxwKFwic2Nyb2xsQ2FuY2VsXCIsdil9LEMuYW5pbWF0ZVNjcm9sbD1mdW5jdGlvbihuLGkscil7dmFyIGE9byh2fHx0LHJ8fHt9KSx1PVwiW29iamVjdCBOdW1iZXJdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobiksZz11fHwhbi50YWdOYW1lP251bGw6bjtpZih1fHxnKXt2YXIgdz1lLnBhZ2VZT2Zmc2V0O2EuaGVhZGVyJiYhRSYmKEU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhLmhlYWRlcikpLGJ8fChiPW0oRSkpO3ZhciB5LFMsTyxJPXU/bjpsKGcsYixwYXJzZUludChcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLm9mZnNldD9hLm9mZnNldChuLGkpOmEub2Zmc2V0LDEwKSxhLmNsaXApLHE9SS13LE09cygpLEY9MCxMPWQocSxhKSx4PWZ1bmN0aW9uKHQsbyl7dmFyIHI9ZS5wYWdlWU9mZnNldDtpZih0PT1vfHxyPT1vfHwodzxvJiZlLmlubmVySGVpZ2h0K3IpPj1NKXJldHVybiBDLmNhbmNlbFNjcm9sbCghMCksaChuLG8sdSkscChcInNjcm9sbFN0b3BcIixhLG4saSkseT1udWxsLEE9bnVsbCwhMH0sSD1mdW5jdGlvbih0KXt5fHwoeT10KSxGKz10LXksUz1GL3BhcnNlSW50KEwsMTApLFM9Uz4xPzE6UyxPPXcrcSpjKGEsUyksZS5zY3JvbGxUbygwLE1hdGguZmxvb3IoTykpLHgoTyxJKXx8KEE9ZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoSCkseT10KX07MD09PWUucGFnZVlPZmZzZXQmJmUuc2Nyb2xsVG8oMCwwKSxmKG4sdSxhKSxwKFwic2Nyb2xsU3RhcnRcIixhLG4saSksQy5jYW5jZWxTY3JvbGwoITApLGUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKEgpfX07dmFyIE89ZnVuY3Rpb24odCl7aWYoIWkoKSYmMD09PXQuYnV0dG9uJiYhdC5tZXRhS2V5JiYhdC5jdHJsS2V5JiZcImNsb3Nlc3RcImluIHQudGFyZ2V0JiYoeT10LnRhcmdldC5jbG9zZXN0KHIpKSYmXCJhXCI9PT15LnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmIXQudGFyZ2V0LmNsb3Nlc3Qodi5pZ25vcmUpJiZ5Lmhvc3RuYW1lPT09ZS5sb2NhdGlvbi5ob3N0bmFtZSYmeS5wYXRobmFtZT09PWUubG9jYXRpb24ucGF0aG5hbWUmJi8jLy50ZXN0KHkuaHJlZikpe3ZhciBuPXUoYSh5Lmhhc2gpKSxvPXYudG9wT25FbXB0eUhhc2gmJlwiI1wiPT09bj9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ6ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuKTtvPW98fFwiI3RvcFwiIT09bj9vOmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxvJiYodC5wcmV2ZW50RGVmYXVsdCgpLEMuYW5pbWF0ZVNjcm9sbChvLHkpKX19LEk9ZnVuY3Rpb24oZSl7aWYobnVsbCE9PWhpc3Rvcnkuc3RhdGUmJmhpc3Rvcnkuc3RhdGUuc21vb3RoU2Nyb2xsJiZoaXN0b3J5LnN0YXRlLnNtb290aFNjcm9sbD09PUpTT04uc3RyaW5naWZ5KHYpJiZoaXN0b3J5LnN0YXRlLmFuY2hvcil7dmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1KGEoaGlzdG9yeS5zdGF0ZS5hbmNob3IpKSk7dCYmQy5hbmltYXRlU2Nyb2xsKHQsbnVsbCx7dXBkYXRlVVJMOiExfSl9fSxxPWZ1bmN0aW9uKGUpe1N8fChTPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7Uz1udWxsLGI9bShFKX0pLDY2KSl9O3JldHVybiBDLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2JiYoZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsTywhMSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIscSwhMSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIixJLCExKSxDLmNhbmNlbFNjcm9sbCgpLHY9bnVsbCx3PW51bGwseT1udWxsLEU9bnVsbCxiPW51bGwsUz1udWxsLEE9bnVsbCl9LEMuaW5pdD1mdW5jdGlvbihpKXtpZighbigpKXRocm93XCJTbW9vdGggU2Nyb2xsOiBUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgcmVxdWlyZWQgSmF2YVNjcmlwdCBtZXRob2RzIGFuZCBicm93c2VyIEFQSXMuXCI7Qy5kZXN0cm95KCksdj1vKHQsaXx8e30pLEU9di5oZWFkZXI/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2LmhlYWRlcik6bnVsbCxiPW0oRSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsTywhMSksRSYmZS5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIscSwhMSksdi51cGRhdGVVUkwmJnYucG9wc3RhdGUmJmUuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsSSwhMSl9LEMuaW5pdChnKSxDfX0pKTtcclxuXHJcbiJdfQ==
