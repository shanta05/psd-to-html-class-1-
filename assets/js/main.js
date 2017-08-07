(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	
			  $('.map')
		      .gmap3({
		        center:[41.850033, -87.650052],
		        zoom:12,
		        mapTypeId: "shadeOfGrey", // to select it directly
		        mapTypeControlOptions: {
		          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
		        }
		      })
		      .styledmaptype(
		        "shadeOfGrey",
		        [
		          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#ededed"},{"lightness":40}]},
		          {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
		          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
		          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
		          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
		          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
		          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
		          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
		          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
		          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
		          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
		          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
		          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
		        ],
		        {name: "Shades of Grey"}
		      );


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