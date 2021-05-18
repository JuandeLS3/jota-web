(function ($) {
	"use strict";
	
	/*----------------------------
	Toggle Menu  Active
	------------------------------ */
	    $('.toggle i').on('click', function() {
        $('.sidemenu').toggleClass('active');
    });
	/*----------------------------
	Animation js Active
	------------------------------ */
	AOS.init();
	/*----------------------------
	/*----------------------------
	Scroll Active JS
	----------------------------*/
	$.scrollIt({
		upKey: 0,
		downKey: 140,
		easing: 'linear',
		scrollTime: 600,
		activeClass: 'current',
		onPageChange: null,
		topOffset: -160
	});
	/*-----------------------------
	Project Carousel
	------------------------------*/
	$('.dot-list').owlCarousel({
		loop: true,
		autoplayHoverPause: true,
		autoplay: true,
		dots: true,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			},
			1369: {
				items: 4
			}
		}
	});


	/*----------------------------
	 Video Popup JS
	 ----------------------------*/
	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	/*----------------------------
	Smooth Scrool
	------------------------------ */
	$('a').on('click', function (event) {
		var $anchor = $($(this).attr('href')).offset().top - 60;
		$('body, html').animate({
			scrollTop: $anchor
		}, 1500);
		event.preventDefault();
		return false;
	});

	/*-----------------
	Scroll-Up
	-----------------*/
	$.scrollUp({
		scrollText: '<i class="fas fa-chevron-up"></i>',
		easingType: 'linear',
		scrollSpeed: 1000,
		animation: 'fade'
	});
    	/*-------------
	Move Background
	-------------------- */
	$(function () {
		$('.header-area-3').backgroundMove();
	});
		
})(jQuery);