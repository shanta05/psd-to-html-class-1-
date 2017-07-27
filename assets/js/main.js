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
			       responsive : {

					0 : {
						items:2
					},

					768 : {
					    items:4
					},
					992 : {
					    items:6
					}
					
				}
			});
			$('.case-studies-carousel').owlCarousel({
				items:3,
				margin:30,
				dots:true,
			    loop:true,
			    nav:false,
			    responsive : {

					0 : {
						items:1
					},

					768 : {
					    items:2
					},
					992 : {
					    items:3
					}
					
				}
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

			$(".menu-trigger").on('click',function(){
				$(".off-canvus-menu").addClass("show-off-canvus-menu")
				$(".off-canvus-menu-shade").addClass("active")
			});
			$(".menu-close").on('click',function(){
				$(".off-canvus-menu").removeClass("show-off-canvus-menu")
				$(".off-canvus-menu-shade").removeClass("active")
			});
			$(".off-canvus-menu-shade").on('click',function(){
				$(".off-canvus-menu").removeClass("show-off-canvus-menu")
				$(".off-canvus-menu-shade").removeClass("active")
			});

			$(".signle-testimonial-box").hover(function(){
				$(".signle-testimonial-box").removeClass('active');
				$(this).addClass('active');

			});

			$(".video-play-btn").magnificPopup({
				type:'video'

			});


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	