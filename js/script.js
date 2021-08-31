// counter js
$(document).ready(function () {
   $(".counter").counterUp({
    //   delay: 10,
      time: 3000
   });
});

// Typed js
var typed = new Typed("#typed", {
   strings: [
       "Welcome to Shikhbe Shobai...",
       "Try it out!",
       "Typed.js is a JavaScript library",
       "it typos",
       "It types out sentences",
       "Have a great day!"
    ],
//    cursorChar: "_",
//    suffle: true,
   loop: true,
   backSpeed: 30,
   typeSpeed: 30,
});

// WoW js
var wow = new WOW({
   boxClass: "wow", // animated element css class (default is wow)
   animateClass: "animated", // animation css class (default is animated)
   offset: 10, // distance to the element when triggering the animation (default is 0)
   mobile: true, // trigger animations on mobile devices (default is true)
   live: true, // act on asynchronously loaded content (default is true)
   callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
   },
   scrollContainer: null, // optional scroll container selector, otherwise use window,
   resetAnimation: true, // reset animation on end (default is true)
});
wow.init();
// wow end

// aos 2 start
AOS.init({
   offset: 200,
   duration: 600,
   easing: "ease-in-sine",
   delay: 100,
});
// aos 2 end

// animated circle 
$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
  });
$(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
      if ( 
          $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
          $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
          // Get percentage of progress
          percent = $(value).data('percentage');
          // Get radius of the svg's circle.complete
          radius = $(this).find($('circle.complete')).attr('r');
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - ((percent * circumference) / 100);
          // Transition progress for 1.25 seconds
          $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
      }
    });
  }).trigger('scroll');