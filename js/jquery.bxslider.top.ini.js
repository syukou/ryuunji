// JavaScript Document

$(document).ready(function(){
var obj = $('#jsi-slidearea .bxslider').bxSlider({
	  auto: true,
	  autoControls: false,
	  infiniteLoop: true,
	  pager: true,
	  mode: 'horizontal',
	  speed: 1000,
	  pause: 8000,
	  onSlideAfter: function () { obj.startAuto(); },
	  easing: 'jswing',
	  autoHover: true
	});
});

$(document).ready(function(){
var homeInfo = $('#topInfo-slider .slider').bxSlider({
	  auto: true,
	  autoControls: false,
	  infiniteLoop: true,
	  pager: false,
	  mode: 'vertical', /* fade,vertical など */
	  speed: 750,
	  pause: 3000,
	  onSlideAfter: function () { homeInfo.startAuto(); },//一旦停止後また再生
	  easing: 'jswing',
	  autoHover: true,
	  nextSelector: '#topInfo-next',
	  prevSelector: '#topInfo-prev',
	  nextImage: '../img/nav-next.png',
	  prevImage: '../img/nav-prev.png'
	});
});

$(document).ready(function(){
var officeImg = $('#ticker .bxslider').bxSlider({
	  ticker: true,
		minSlides: 3,
		maxSlides: 10,
		slideWidth: 216,
		slideMargin: 0,
		speed: 200000
	});
});