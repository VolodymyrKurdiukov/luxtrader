//Burger

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	//==================================================================================================

	//slider

	$('.slider__row').slick({
		// infinite: true,
		// autoplay: true,
		// autoplaySpeed: 5000,
		arrows: true,
		adaptiveHeight: true,
		speed: 1200,
		nextArrow: document.querySelector('.control__arrow-r'),
		prevArrow: document.querySelector('.control__arrow-l')
	});
	$('.trade__row').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		speed: 1200,
		slidesToShow: 3,
		adaptiveHeight: true,
		prevArrow: document.querySelector('.control-trade__arrow-l'),
		nextArrow: document.querySelector('.control-trade__arrow-r'),
		responsive: [
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.quotes__row').slick({
		// infinite: true,
		// autoplay: true,
		// autoplaySpeed: 3000,
		arrows: true,
		adaptiveHeight: true,
		speed: 1200,
		nextArrow: document.querySelector('.control-quotes__decor'),
		prevArrow: false
	});

	$("a[href^='#']").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

	// $("a").on('click', function (event) {
	// 	if (this.hash !== "") {
	// 		event.preventDefault();
	// 		var hash = this.hash;
	// 		$('html, body').animate({
	// 			scrollTop: $(hash).offset().top
	// 		}, 800, function () {
	// 			window.location.hash = hash;
	// 		});
	// 	}
	// });

});
//==================================================================================================

//Выпадающее меню

let user_icon = document.querySelector('.user__icon');
user_icon.addEventListener("click", function (e) {
	let user_menu = document.querySelector('.user__list');
	user_menu.classList.toggle('active');
});
//==================================================================================================

//клик вне области

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user')) {
		let user_menu = document.querySelector('.user__list');
		user_menu.classList.remove('active')
	}
});
//==================================================================================================

//ibg

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();
//==================================================================================================
