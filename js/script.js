$( document ).ready(function() {
//	smooth scroll
	var scroll = new SmoothScroll('a[href*="#"]',{
		header: '.headerArea'
	});
	
	var topBtn = $('#back_to_top a');
	
	$(window).scroll(function () {

		var bh = $('body').outerHeight();
		var wh = $(window).outerHeight();
		var ww = $(window).width();
		var wOffset = $(this).scrollTop();
		var footerH = $('.footerArea').outerHeight();
		var addBottom = 40;
		if(ww <= 768) {
			addBottom = 40;
		}

		if(wOffset > bh-wh+addBottom) {
			var diff = (wOffset+wh)-(bh-footerH+addBottom);
			topBtn.css('bottom',diff);
		} else {
			topBtn.css('bottom',addBottom);
		}

		if (wOffset > $('.headerArea').outerHeight()) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	
});
