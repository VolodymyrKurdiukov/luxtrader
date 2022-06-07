//burger
$('.nav-header__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.nav-header__menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});
//=====================================================================================================================

//burger
$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

//=====================================================================================================================
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

//=====================================================================================================================

// tabs
$(document).ready(function () {
	$('ul.news-tabs').on('click', 'li:not(.news-tab__active)', function () {
		$(this)
			.addClass('news-tab__active').siblings().removeClass('news-tab__active')
			.closest('.news-body').find('.news-content').removeClass('news-content__active').eq($(this).index()).addClass('news-content__active');
	});

	//modal

	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});

	//validate

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 5
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					minlength: jQuery.validator.format("Введите {0} символов!")
				},
				phone: "Пожалуйста, введите свой телефон",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введен аддрес почты"
				}
			}
		});
	};
	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

	//sroll window

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	//links trans

	$("a[href=#up]").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

	//animation

	new WOW().init();
});
//=====================================================================================================================

// //scroll main_bg
// $(window).scroll(function (event) {
// 	var s = 0 - $(this).scrollTop() / 3;
// 	$('.main__img').css('transform', 'translate3d(0, ' + s + 'px, 0)');
// });

// //scroll main_bg
// $(window).resize(function (event) {
// 	main();
// });
// function main() {
// 	var h = $(window).outerHeight();
// 	$('.main').css('min-height', h);
// }
// main();
//=====================================================================================================================

//goto block
$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });
});
//=====================================================================================================================

//filter
$('.body-portfolio__link').click(function (event) {
	var i = $(this).data('filter');
	if (i == 1) {
		$('.body-portfolio__column').show();
	} else {
		$('.body-portfolio__column').hide();
		$('.body-portfolio__column.f_' + i).show();
	}
	$('.body-portfolio__link').removeClass('active');
	$(this).addClass('active');

	return false;
});
//=====================================================================================================================

//zoom
if ($('.gallery').length > 0) {
	baguetteBox.run('.gallery', {
		// Custom options
	});
}
//=====================================================================================================================


$(document).ready(function () {

	//CHECKBOX
	$.each($('.checkbox'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function (event) {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');

		return false;
	});

	//RADIO
	$.each($('.radiobuttons__item'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.radiobuttons__item', function (event) {
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	});
});

//=====================================================================================================================

//SLIDERS andrykanych
if ($('.slider__body').length > 0) {
	$('.slider__body').slick({
		//autoplay: true,
		//infinite: true,
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}
//SLIDERS petrychenko

//=====================================================================================================================

$('input[name=phone]').mask("+7 (999) 999-9999");

$('form').submit(function (e) {
	e.preventDefault();

	if (!$(this).valid()) {
		return;
	}

	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function () {
		$(this).find("input").val("");
		$('#consultation, #order').fadeOut();
		$('.overlay, #thanks').fadeIn('slow');

		$('form').trigger('reset');
	});
	return false;
});








