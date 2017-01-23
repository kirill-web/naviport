$(function () {
	$("#accordion").accordion({
		heightStyle: "content"
	});
});

$(document).ready(function () {

	$('.menu-toggle').on('click', function (e) {
		e.preventDefault();
		$('.accordion').css('display', 'block');
	});
	$(document).mouseup(function (e) {
		var container = $(".accordion");
		if (container.has(e.target).length === 0) {
			container.hide();
		}
	});

	/* Выпадающее меню */

	$('#info-toggle').hover(function () {
		$(this).addClass('active');
		$('.dropdown-menu').slideDown(200);
	});
	$('.dropdown-menu').mouseleave(function () {
		$('.dropdown-menu').slideUp(200);
		$('#info-toggle').removeClass('active');
	})
	$('.dropdown-menu__nav-item').hover(function () {
		$('.dropdown-menu__nav-item').removeClass('active');
		$(this).addClass('active');
	});
	$('#first-nav').hover(function () {
		if ($(this).hasClass('active')) {
			$('#authors').fadeOut(100);
			$('#info').fadeOut(100);
			$('#news').fadeIn(100);
		}
	});
	$('#second-nav').hover(function () {
		if ($(this).hasClass('active')) {
			$('#news').fadeOut(100);
			$('#info').fadeOut(100);
			$('#authors').fadeIn(100);
		}
	});
	$('#third-nav').hover(function () {
		if ($(this).hasClass('active')) {
			$('#news').fadeOut(100);
			$('#authors').fadeOut(100);
			$('#info').fadeIn(100);
		}
	});
});

/* Раскрытие блока Метки */

$(document).ready(function () {
	var hh = $('.tags-sidebar__items').innerHeight();
	$('.tags-sidebar__items').css('height', '115px');

	$('.tags-sidebar__btn').on('click', function (e) {
		e.preventDefault();
		var hhafter = $('.tags-sidebar__items').innerHeight();
		if (hhafter == 115) {
			$(this).addClass('active');
			$('.tags-sidebar__items').animate({
				height: hh
			}, 500);
		} else {
			$(this).removeClass('active');
			$('.tags-sidebar__items').animate({
				height: "115px"
			}, 500);
		}
	});
});

/* Селекты */

$(function () {
	$('.simple-select').selectric({
		disableOnMobile: false
	});
});

/* Раскрывающийся поиск */

$('#search-open').on('click', function (e) {
	e.preventDefault();
	$('.search-opened').fadeIn(0).animate({
		width: "50%"
	}, 300);
	$(document).mouseup(function (a) {
		var searchOpened = $(".search-opened");
		if (searchOpened.has(a.target).length === 0) {
			searchOpened.animate({
				width: "0"
			}, 300);
			searchOpened.fadeOut(0);
		}
	});
});
$('.search-opened input').keyup(function () {
	var inputLenght = $('.search-opened input').val().length;
	if ((inputLenght) > 0) {
		$('.search-opened .border').css('background-color', '#0055ab');
	} else {
		$('.search-opened .border').css('background-color', '#d21717');
	}
});


/* Слайдеры на главной */


$(document).ready(function () {
	$('.where-bye__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true
				}
    		},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true
				}
    		},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
    		},
			{
				breakpoint: 525,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    		}
  		]
	});
	$('.main-news__slider-items').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true
				}
    		},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true
				}
    		},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
    		},
			{
				breakpoint: 525,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    		}
  		]
	});
	$('.experts-block__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true
	});
});

// Ошибка формы

$(function () {
	if ($('.ask-question__form input').hasClass('error')) {
		$('.ask-question__form .error-text').css('display', 'block')
	} else {
		$('.ask-question__form .error-text').css('display', 'none')
	}
	if ($('.eop-callback__order-call input').hasClass('error')) {
		$('.eop-callback__order-call .error-text').css('display', 'block')
	} else {
		$('.eop-callback__order-call .error-text').css('display', 'none')
	}
});

// RSS Block 

$(function () {
	$('.rss-block__btn').prop('disabled', true)

	$('.rss-block__email').keyup(function () {
		var emailLength = $('.rss-block__email').val().length;
		if (emailLength >= 3) {
			$('.rss-block__btn').addClass('active').prop('disabled', false)
		} else {
			$('.rss-block__btn').removeClass('active').prop('disabled', true)
		}
	});
});