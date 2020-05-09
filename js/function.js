var swiper_home = new Swiper('.slider-home',{
  loop: true,
  freeMode: true,
  effect: 'fade',
  spaceBetween: 10,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 4,
	loop: true,
	freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	loop:true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
  	nextEl: '.swiper-button-next',
  	prevEl: '.swiper-button-prev',
  },
  thumbs: {
  	swiper: galleryThumbs,
  },
});
var galleryTop = new Swiper('.related-product-slide', {
	spaceBetween: 10,
	slidesPerView: 2,
	loop:true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
});
$('#nav-bottom').ready(function(){
  $('.btn-control').click(function(){
   
    $(this).parent().find('.control-bottom').animate({
      width: "toggle"
    },200);
  });
  $('.btn-close-control').click(function(){
    $(this).closest('.box-item').find('.control-bottom').animate({
      width: "toggle"
    },100);
  });
});
$('.megamenu-show').click(function(){
  $(this).toggleClass('show-mn');
  $(this).parent().children('.dropdown-menu').animate({height:'toggle'},300);
  $(this).parent().children('a').toggleClass('f-bold');
});
$('.btn-showroom').click(function(){
  let imgSrc = $(this).attr('data-img');
  $('#image-showroom').find('img').attr('src',imgSrc);
});