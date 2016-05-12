// JavaScript Document

$(window).on('load',function(){
    $('#jsi-slidearea').css({visibility:'hide',opacity:'0'}).animate({visibility:'visible',opacity:'1'},1000);
});

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
