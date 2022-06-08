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
