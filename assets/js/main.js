(function ($) {
	"use strict";

    jQuery(document).ready(function($){

			$('.logo-carousel').owlCarousel({
				items:6,
				margin:30,
				dots:false,
			    loop:true,
			    nav:false,
			    autoplay:true,
			});
			$('.case-studies-carousel').owlCarousel({
				items:3,
				margin:30,
				dots:true,
			    loop:true,
			    nav:false,
			});
			$('.homepage-slides').owlCarousel({
			    items:1,
			    loop:true,
			    dots:true,
			    nav:true,
			    navText:['<i class="zmdi zmdi-arrow-left" aria-hidden="true"></i>','<i class="zmdi zmdi-arrow-right" aria-hidden="true"></i>'],
			});

			$('.testimonial-carousel').owlCarousel({
				items:1,
				margin:30,
				dots:true,
			    loop:true,
			    nav:false,
			});
			$('.single-testimonial').owlCarousel({
							items:1,
							margin:30,
							dots:true,
						    loop:true,
						    nav:false,
						});




        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	
