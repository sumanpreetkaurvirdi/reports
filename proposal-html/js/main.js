// Menu Popup
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
   modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
   if (event.target === modal) {
      toggleModal();
   }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

$(document).ready(function(){
   $(".swiper-thumbs .swiper-slide").click(function(){
      $(".modal").removeClass("show-modal");
   });
});

// Map Pins
$(document).ready(function(){

   // New Jersey
   $(".nj-pin").hover(function(){
      $("#nj").toggleClass("show");
   });

   // New York
   $(".ny-pin").hover(function(){
      $("#ny").toggleClass("show");
   });

   // Connecticut
   $(".ct-pin").hover(function(){
      $("#ct").toggleClass("show");
   });

});

// Popup Thumb Slider
var swiper = new Swiper(".mySwiper", {
   spaceBetween: 10,
   // freeMode: true,
   slidesPerView: 1,
   slidesPerView: "auto",
   watchSlidesProgress: true,
   parallax: true,
   hashNavigation: {
     watchState: true,
   },
   breakpoints: {
      320: {
         slidesPerView: 2,
      },
      640: {
         slidesPerView: 4,
      },
      1200: {
         slidesPerView: 8,
      },
      1800: {
         slidesPerView: 11,
      },
   }
});

// Google Review Nested Slider
var swiper2 = new Swiper(".mySwiper3", {
   slidesPerView: 1,
   nested: true,
   centeredSlides: true,
   pagination: {
     el: ".swiper-pagination",
   },
});

// Proposed Monthly Payment
var swiper2 = new Swiper(".mySwiper4", {
   slidesPerView: 1,
   nested: true,
   centeredSlides: true,
   pagination: {
     el: ".swiper-pagination",
   },
});

// Proposed Monthly Payment
var swiper = new Swiper(".mySwiper5", {
   slidesPerView: 1,
   spaceBetween: 0,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
});

// Create a GSAP timeline
var toptobottom = gsap.timeline();
var toptobottomdelay1 = gsap.timeline();
var toptobottomdelay2 = gsap.timeline();
var toptobottomdelay3 = gsap.timeline();
var toptobottomdelay4 = gsap.timeline();
// var toptobottomdelay5 = gsap.timeline();
// var toptobottomdelay6 = gsap.timeline();
// var toptobottomdelay7 = gsap.timeline();
// var toptobottomdelay8 = gsap.timeline();
// var toptobottomdelay9 = gsap.timeline();
// var toptobottomdelay10 = gsap.timeline();
// var toptobottomdelay11 = gsap.timeline();
// var toptobottomdelay12 = gsap.timeline();
var bottomtotop = gsap.timeline();
var bottomtotopdelay1 = gsap.timeline();
var bottomtotopdelay2 = gsap.timeline();
var bottomtotopdelay3 = gsap.timeline();
var bottomtotopdelay4 = gsap.timeline();
var bottomtotopdelay5 = gsap.timeline();
var bottomtotopdelay6 = gsap.timeline();
var bottomtotopdelay7 = gsap.timeline();
var bottomtotopdelay8 = gsap.timeline();
var bottomtotopdelay9 = gsap.timeline();
// var bottomtotopdelay10 = gsap.timeline();
// var bottomtotopdelay11 = gsap.timeline();
// var bottomtotopdelay12 = gsap.timeline();
var lefttoright = gsap.timeline();
var lefttorightdelay1 = gsap.timeline();
var lefttorightdelay2 = gsap.timeline();
var lefttorightdelay3 = gsap.timeline();
var lefttorightdelay4 = gsap.timeline();
var lefttorightdelay5 = gsap.timeline();
var lefttorightdelay6 = gsap.timeline();
var lefttorightdelay7 = gsap.timeline();
var lefttorightdelay8 = gsap.timeline();
var lefttorightdelay9 = gsap.timeline();
// var lefttorightdelay10 = gsap.timeline();
// var lefttorightdelay11 = gsap.timeline();
// var lefttorightdelay12 = gsap.timeline();
var righttoleft = gsap.timeline();
var righttoleftdelay1 = gsap.timeline();
var righttoleftdelay2 = gsap.timeline();
// var righttoleftdelay3 = gsap.timeline();
var righttoleftdelay4 = gsap.timeline();
// var righttoleftdelay5 = gsap.timeline();
var righttoleftdelay6 = gsap.timeline();
// var righttoleftdelay7 = gsap.timeline();
var righttoleftdelay8 = gsap.timeline();
// var righttoleftdelay9 = gsap.timeline();
// var righttoleftdelay10 = gsap.timeline();
var zoomin = gsap.timeline();
// var zoomindelay1 = gsap.timeline();
var zoomindelay2 = gsap.timeline();
var zoomindelay3 = gsap.timeline();
var zoomindelay4 = gsap.timeline();
var zoomindelay5 = gsap.timeline();
var zoomindelay6 = gsap.timeline();
var zoomindelay7 = gsap.timeline();
var zoomindelay8 = gsap.timeline();
var zoomindelay9 = gsap.timeline();
// var zoomindelay10 = gsap.timeline();
// var zoomindelay11 = gsap.timeline();
var zoomindelay12 = gsap.timeline();
// var zoomindelay13 = gsap.timeline();
// var zoomindelay14 = gsap.timeline();
// var zoomindelay15 = gsap.timeline();
var delay05s = gsap.timeline();
var delay1s = gsap.timeline();
var delay15s = gsap.timeline();

var njpin = gsap.timeline();
var nypin = gsap.timeline();
var ctpin = gsap.timeline();

var separators1 = gsap.timeline();

// Swiper Main Slider
var swiper2 = new Swiper(".mySwiper2", {
   spaceBetween: 10,
   hashNavigation: {
     watchState: true,
   },
   keyboard: {
     enabled: true,
   },
   pagination: {
     el: ".swiper-pagination",
     type: "progressbar",
   },
   navigation: {
     nextEl: ".navigation-right",
     prevEl: ".navigation-left",
   },
   thumbs: {
     swiper: swiper,
   },
   on: {
      slideChange: (swiper) => {
         toptobottom.restart();
         toptobottomdelay1.restart();
         toptobottomdelay2.restart();
         toptobottomdelay3.restart();
         toptobottomdelay4.restart();
         // toptobottomdelay5.restart();
         // toptobottomdelay6.restart();
         // toptobottomdelay7.restart();
         // toptobottomdelay8.restart();
         // toptobottomdelay9.restart();
         // toptobottomdelay10.restart();
         // toptobottomdelay11.restart();
         // toptobottomdelay12.restart();
         bottomtotop.restart();
         bottomtotopdelay1.restart();
         bottomtotopdelay2.restart();
         bottomtotopdelay3.restart();
         bottomtotopdelay4.restart();
         bottomtotopdelay5.restart();
         bottomtotopdelay6.restart();
         bottomtotopdelay7.restart();
         bottomtotopdelay8.restart();
         bottomtotopdelay9.restart();
         // bottomtotopdelay10.restart();
         // bottomtotopdelay11.restart();
         // bottomtotopdelay12.restart();
         lefttoright.restart();
         lefttorightdelay1.restart();
         lefttorightdelay2.restart();
         lefttorightdelay3.restart();
         lefttorightdelay4.restart();
         lefttorightdelay5.restart();
         lefttorightdelay6.restart();
         lefttorightdelay7.restart();
         lefttorightdelay8.restart();
         lefttorightdelay9.restart();
         // lefttorightdelay10.restart();
         // lefttorightdelay11.restart();
         // lefttorightdelay12.restart();
         righttoleft.restart();
         righttoleftdelay1.restart();
         righttoleftdelay2.restart();
         // righttoleftdelay3.restart();
         righttoleftdelay4.restart();
         // righttoleftdelay5.restart();
         righttoleftdelay6.restart();
         // righttoleftdelay7.restart();
         righttoleftdelay8.restart();
         // righttoleftdelay9.restart();
         // righttoleftdelay10.restart();
         zoomin.restart();
         // zoomindelay1.restart();
         zoomindelay2.restart();
         zoomindelay3.restart();
         zoomindelay4.restart();
         zoomindelay5.restart();
         zoomindelay6.restart();
         zoomindelay7.restart();
         zoomindelay8.restart();
         zoomindelay9.restart();
         // zoomindelay10.restart();
         // zoomindelay11.restart();
         zoomindelay12.restart();
         // zoomindelay13.restart();
         // zoomindelay14.restart();
         // zoomindelay15.restart();
         delay05s.restart();
         delay1s.restart();
         delay15s.restart();

         njpin.restart();
         nypin.restart();
         ctpin.restart();

         separators1.restart();
      }
   }
});

// Top To Bottom
toptobottom.from('.TopToBottom', {
   duration: 1,
   opacity: 0,
   y: -400,
   ease: 'power1.out',
});

// Top To Bottom with delay 1
toptobottomdelay1.from('.TopToBottomDelay1', {
   duration: 1,
   opacity: 0,
   y: -400,
   ease: 'power1.out',
   delay: .1,
});

// Top To Bottom with delay 2
toptobottomdelay2.from('.TopToBottomDelay2', {
   duration: 1,
   opacity: 0,
   y: -400,
   ease: 'power1.out',
   delay: .2,
});

// Top To Bottom with delay 3
toptobottomdelay3.from('.TopToBottomDelay3', {
   duration: 1,
   opacity: 0,
   y: -400,
   ease: 'power1.out',
   delay: .3,
});

// Top To Bottom with delay 4
toptobottomdelay4.from('.TopToBottomDelay4', {
   duration: 1,
   opacity: 0,
   y: -400,
   ease: 'power1.out',
   delay: .4,
});

// Top To Bottom with delay 5
// toptobottomdelay5.from('.TopToBottomDelay5', {
//    duration: 1,
//    opacity: 0,
//    y: -400,
//    ease: 'power1.out',
//    delay: .5,
// });

// Top To Bottom with delay 6
// toptobottomdelay6.from('.TopToBottomDelay6', {
//    duration: 1,
//    opacity: 0,
//    y: -400,
//    ease: 'power1.out',
//    delay: .6,
// });

// Top To Bottom with delay 7
// toptobottomdelay7.from('.TopToBottomDelay7', {
//    duration: 1,
//    opacity: 0,
//    y: -400,
//    ease: 'power1.out',
//    delay: .7,
// });

// Top To Bottom with delay 8
// toptobottomdelay8.from('.TopToBottomDelay8', {
//    duration: 1,
//    opacity: 0,
//    y: -400,
//    ease: 'power1.out',
//    delay: .8,
// });

// Top To Bottom with delay 9
// toptobottomdelay9.from('.TopToBottomDelay9', {
//    duration: 1,
//    opacity: 0,
//    y: -400,
//    ease: 'power1.out',
//    delay: .9,
// });

// Top To Bottom with delay 10
// toptobottomdelay10.from('.TopToBottomDelay10', {
//    duration: 1,
//    opacity: 0,
//    y: -400,
//    ease: 'power1.out',
//    delay: 1,
// });

// Top To Bottom with delay 11
// toptobottomdelay11.from('.TopToBottomDelay11', {
//    duration: 1,
//    opacity: 0,
//    y: -400,
//    ease: 'power1.out',
//    delay: 1.1,
// });

// Top To Bottom with delay 12
// toptobottomdelay12.from('.TopToBottomDelay12', {
//    duration: 1,
//    opacity: 0,
//    y: -400,
//    ease: 'power1.out',
//    delay: 1.2,
// });

// Bottom To Top
bottomtotop.from('.BottomToTop', {
   duration: 1,
   opacity: 0,
   y: 400,
   ease: 'power1.out',
});

// Bottom To Top with delay 1
bottomtotopdelay1.from('.BottomToTopDelay1', {
   duration: 1,
   opacity: 0,
   y: 400,
   ease: 'power1.out',
   delay: .1,
});

// Bottom To Top with delay 2
bottomtotopdelay2.from('.BottomToTopDelay2', {
   duration: 1,
   opacity: 0,
   y: 400,
   ease: 'power1.out',
   delay: .2,
});

// Bottom To Top with delay 3
bottomtotopdelay3.from('.BottomToTopDelay3', {
   duration: 1,
   opacity: 0,
   y: 400,
   ease: 'power1.out',
   delay: .3,
});

// Bottom To Top with delay 4
bottomtotopdelay4.from('.BottomToTopDelay4', {
   duration: 1,
   opacity: 0,
   y: 400,
   ease: 'power1.out',
   delay: .4,
});

// Bottom To Top with delay 5
bottomtotopdelay5.from('.BottomToTopDelay5', {
   duration: 1,
   opacity: 0,
   y: 400,
   ease: 'power1.out',
   delay: .5,
});

// Bottom To Top with delay 6
bottomtotopdelay6.from('.BottomToTopDelay6', {
   duration: 1,
   opacity: 0,
   y: 400,
   ease: 'power1.out',
   delay: .6,
});

// Bottom To Top with delay 7
bottomtotopdelay7.from('.BottomToTopDelay7', {
   duration: 1,
   opacity: 0,
   y: 400,
   ease: 'power1.out',
   delay: .7,
});

// Bottom To Top with delay 8
bottomtotopdelay8.from('.BottomToTopDelay8', {
   duration: 1,
   opacity: 0,
   y: 400,
   ease: 'power1.out',
   delay: .8,
});

// Bottom To Top with delay 9
bottomtotopdelay9.from('.BottomToTopDelay9', {
   duration: 1,
   opacity: 0,
   y: 400,
   ease: 'power1.out',
   delay: .9,
});

// Bottom To Top with delay 10
// bottomtotopdelay10.from('.BottomToTopDelay10', {
//    duration: 1,
//    opacity: 0,
//    y: 400,
//    ease: 'power1.out',
//    delay: 1,
// });

// Bottom To Top with delay 11
// bottomtotopdelay11.from('.BottomToTopDelay11', {
//    duration: 1,
//    opacity: 0,
//    y: 400,
//    ease: 'power1.out',
//    delay: 1.1,
// });

// Bottom To Top with delay 12
// bottomtotopdelay12.from('.BottomToTopDelay12', {
//    duration: 1,
//    opacity: 0,
//    y: 400,
//    ease: 'power1.out',
//    delay: 1.2,
// });

// Left to Right
lefttoright.from('.LeftToRight', {
   duration: 1,
   opacity: 0,
   x: -400,
   ease: 'power1.out',
});

// Left to Right with delay 1
lefttorightdelay1.from('.LeftToRightDelay1', {
   duration: 1,
   opacity: 0,
   x: -400,
   ease: 'power1.out',
   delay: .1,
});

// Left to Right with delay 2
lefttorightdelay2.from('.LeftToRightDelay2', {
   duration: 1,
   opacity: 0,
   x: -400,
   ease: 'power1.out',
   delay: .2,
});

// Left to Right with delay 3
lefttorightdelay3.from('.LeftToRightDelay3', {
   duration: 1,
   opacity: 0,
   x: -400,
   ease: 'power1.out',
   delay: .3,
});

// Left to Right with delay 4
lefttorightdelay4.from('.LeftToRightDelay4', {
   duration: 1,
   opacity: 0,
   x: -400,
   ease: 'power1.out',
   delay: .4,
});

// Left to Right with delay 5
lefttorightdelay5.from('.LeftToRightDelay5', {
   duration: 1,
   opacity: 0,
   x: -400,
   ease: 'power1.out',
   delay: .5,
});

// Left to Right with delay 6
lefttorightdelay6.from('.LeftToRightDelay6', {
   duration: 1,
   opacity: 0,
   x: -400,
   ease: 'power1.out',
   delay: .6,
});

// Left to Right with delay 7
lefttorightdelay7.from('.LeftToRightDelay7', {
   duration: 1,
   opacity: 0,
   x: -400,
   ease: 'power1.out',
   delay: .7,
});

// Left to Right with delay 8
lefttorightdelay8.from('.LeftToRightDelay8', {
   duration: 1,
   opacity: 0,
   x: -400,
   ease: 'power1.out',
   delay: .8,
});

// Left to Right with delay 9
lefttorightdelay9.from('.LeftToRightDelay9', {
   duration: 1,
   opacity: 0,
   x: -400,
   ease: 'power1.out',
   delay: .9,
});

// Left to Right with delay 10
// lefttorightdelay10.from('.LeftToRightDelay10', {
//    duration: 1,
//    opacity: 0,
//    x: -400,
//    ease: 'power1.out',
//    delay: 1,
// });

// Left to Right with delay 11
// lefttorightdelay11.from('.LeftToRightDelay11', {
//    duration: 1,
//    opacity: 0,
//    x: -400,
//    ease: 'power1.out',
//    delay: 1.1,
// });

// Left to Right with delay 12
// lefttorightdelay12.from('.LeftToRightDelay12', {
//    duration: 1,
//    opacity: 0,
//    x: -400,
//    ease: 'power1.out',
//    delay: 1.2,
// });

// Right to Left
righttoleft.from('.RightToLeft', {
   duration: 1,
   opacity: 0,
   x: 400,
   ease: 'power1.out',
});

// Right to Left with delay 2
righttoleftdelay2.from('.RightToLeftDelay2', {
   duration: 1,
   opacity: 0,
   x: 400,
   ease: 'power1.out',
   delay: .2,
});

// Right to Left with delay 3
// righttoleftdelay3.from('.RightToLeftDelay3', {
//    duration: 1,
//    opacity: 0,
//    x: 400,
//    ease: 'power1.out',
//    delay: .3,
// });

// Right to Left with delay 4
righttoleftdelay4.from('.RightToLeftDelay4', {
   duration: 1,
   opacity: 0,
   x: 400,
   ease: 'power1.out',
   delay: .4,
});

// Right to Left with delay 5
// righttoleftdelay5.from('.RightToLeftDelay5', {
//    duration: 1,
//    opacity: 0,
//    x: 400,
//    ease: 'power1.out',
//    delay: .5,
// });

// Right to Left with delay 6
righttoleftdelay6.from('.RightToLeftDelay6', {
   duration: 1,
   opacity: 0,
   x: 400,
   ease: 'power1.out',
   delay: .6,
});

// Right to Left with delay 7
// righttoleftdelay7.from('.RightToLeftDelay7', {
//    duration: 1,
//    opacity: 0,
//    x: 400,
//    ease: 'power1.out',
//    delay: .7,
// });

// Right to Left with delay 8
righttoleftdelay8.from('.RightToLeftDelay8', {
   duration: 1,
   opacity: 0,
   x: 400,
   ease: 'power1.out',
   delay: .8,
});

// Right to Left with delay 9
// righttoleftdelay9.from('.RightToLeftDelay9', {
//    duration: 1,
//    opacity: 0,
//    x: 400,
//    ease: 'power1.out',
//    delay: .9,
// });

// Right to Left with delay 10
// righttoleftdelay10.from('.RightToLeftDelay10', {
//    duration: 1,
//    opacity: 0,
//    x: 400,
//    ease: 'power1.out',
//    delay: 1,
// });

// Zoom in
zoomin.from('.ZoomIn', {
   duration: 1,
   opacity: 0,
   ease: 'power1.out',
   scale: 0,
});

// Zoom in with delay 1
// zoomindelay1.from('.ZoomInDelay1', {
//    duration: 1,
//    opacity: 0,
//    ease: 'power1.out',
//    scale: 0,
//    delay: .1,
// });

// Zoom in with delay 2
zoomindelay2.from('.ZoomInDelay2', {
   duration: 1,
   opacity: 0,
   ease: 'power1.out',
   scale: 0,
   delay: .2,
});

// Zoom in with delay 3
zoomindelay3.from('.ZoomInDelay3', {
   duration: 1,
   opacity: 0,
   ease: 'power1.out',
   scale: 0,
   delay: .3,
});

// Zoom in with delay 4
zoomindelay4.from('.ZoomInDelay4', {
   duration: 1,
   opacity: 0,
   ease: 'power1.out',
   scale: 0,
   delay: .4,
});

// Zoom in with delay 5
zoomindelay5.from('.ZoomInDelay5', {
   duration: 1,
   opacity: 0,
   ease: 'power1.out',
   scale: 0,
   delay: .5,
});

// Zoom in with delay 6
zoomindelay6.from('.ZoomInDelay6', {
   duration: 1,
   opacity: 0,
   ease: 'power1.out',
   scale: 0,
   delay: .6,
});

// Zoom in with delay 7
zoomindelay7.from('.ZoomInDelay7', {
   duration: 1,
   opacity: 0,
   ease: 'power1.out',
   scale: 0,
   delay: .7,
});

// Zoom in with delay 8
zoomindelay8.from('.ZoomInDelay8', {
   duration: 1,
   opacity: 0,
   ease: 'power1.out',
   scale: 0,
   delay: .8,
});

// Zoom in with delay 9
zoomindelay9.from('.ZoomInDelay9', {
   duration: 1,
   opacity: 0,
   ease: 'power1.out',
   scale: 0,
   delay: .9,
});

// Zoom in with delay 10
// zoomindelay10.from('.ZoomInDelay10', {
//    duration: 1,
//    opacity: 0,
//    ease: 'power1.out',
//    scale: 0,
//    delay: 1,
// });

// Zoom in with delay 11
// zoomindelay11.from('.ZoomInDelay11', {
//    duration: 1,
//    opacity: 0,
//    ease: 'power1.out',
//    scale: 0,
//    delay: 1.1,
// });

// Zoom in with delay 12
zoomindelay12.from('.ZoomInDelay12', {
   duration: 1,
   opacity: 0,
   ease: 'power1.out',
   scale: 0,
   delay: 1.2,
});

// Zoom in with delay 13
// zoomindelay13.from('.ZoomInDelay13', {
//    duration: 1,
//    opacity: 0,
//    ease: 'power1.out',
//    scale: 0,
//    delay: 1.3,
// });

// Zoom in with delay 14
// zoomindelay14.from('.ZoomInDelay14', {
//    duration: 1,
//    opacity: 0,
//    ease: 'power1.out',
//    scale: 0,
//    delay: 1.4,
// });

// Zoom in with delay 15
// zoomindelay15.from('.ZoomInDelay15', {
//    duration: 1,
//    opacity: 0,
//    ease: 'power1.out',
//    scale: 0,
//    delay: 1.5,
// });

// Ny Map Pin
nypin.from('.ny-pin', {
   duration: 1,
   y: -400,
   ease: 'bounce',
});

// CT Map Pin
ctpin.from('.ct-pin', {
   duration: 1,
   y: -400,
   ease: 'bounce',
   delay: .2,
});

// NJ Map Pin
njpin.from('.nj-pin', {
   duration: 1,
   y: -400,
   ease: 'bounce',
   delay: .4,
});

// NJ Map Pin
separators1.from('.separator-s1', {
   width: '150px',
});

// Slide 19 Modal
$(document).ready(function() {
   $(".slide-19 .gurantee-box").click(function() {
      $(".section19-modal").removeClass("d-none");
   });
   $(".section19-modal .gurantee-box-close").click(function() {
      $(".section19-modal").addClass("d-none");
   });
});

// Slide 9 Modal
$(document).ready(function () {
   $(".roofdesign-popup").click(function (event) {
      console.log("Open modal");
      $(".section9-modal").removeClass("d-none");
      event.stopPropagation();
   });
   $(".section9-modal .box-close").click(function () {
      console.log("Close modal");
      $(".section9-modal").addClass("d-none");
   });
   $(document).on("click", function (event) {
      if (!$(event.target).closest(".gurantee-box").length) {
         console.log("Close modal");
         $(".section9-modal").addClass("d-none");
      }
   });
});

// $(document).ready(function() {
//    $("body").on("click",function(e){
//       if($(e.target).parents().hasClass("section9-modal"))
//       {
//          return false;
//       }
//       $(".slide-9-active").addClass("d-none");
//    });
// });

$(document).ready(function() {

   $(".t-linethrough").click(function() {
      $(".t-linethrough").toggleClass("linethrough");
      $(".s-linethrough").removeClass("linethrough");
   });

   $(".s-linethrough").click(function() {
      $(".s-linethrough").toggleClass("linethrough");
      $(".t-linethrough").removeClass("linethrough");
   });
   
});

// Slide 12 Gray Scale
$(document).ready(function() {
   $("#saving-input").click(function() {
      $(".slide-12").toggleClass("grayscale");
   });
});

$(document).ready(function() {

   $('.person').on('click', function() {
      var $description = $(this).find('.description');
      var $activePerson = $('.person.active');
    
      if ($(this).hasClass('active')) {
        $description.css('max-height', 0);
        $(this).removeClass('active');
      } else {
        $description.css('max-height', $description[0].scrollHeight + 'px');
        $(this).addClass('active');
    
        if ($activePerson.length) {
          var $activeDescription = $activePerson.find('.description');
          $activeDescription.css('max-height', 0);
          $activePerson.removeClass('active');
        }
      }
    });
   
});
$(document).ready(function() {
 // Add 'active' class to target element when '.open-popup' is clicked
 $('.open-popup').click(function(event) {
     event.stopPropagation(); // Prevent event bubbling
     var target = $(this).data('target');
     $('#' + target).addClass('active');
 });
 $('.modal-inner .box-close').click(function() {
   $(this).parents('.custom-modal').removeClass('active');
});
 // Remove 'active' class from '.custom-modal' elements when clicking outside of them
 $(document).on('click', function(event) {
     if (!$(event.target).closest('.modal-inner').length) {
         $(".custom-modal").removeClass("active");
     }
 });
});


jQuery(document).ready(function ($) {
	var owl = $("#warranty-slider");
	owl.owlCarousel({
		autoplay: false,
		items: 1,
		loop: true,
		margin: 30,
      dots: false,
      nav:true,
	});

	$(".next").click(function () {
		owl.trigger("owl.next");
	});
	$(".prev").click(function () {
		owl.trigger("owl.prev");
	});
});


