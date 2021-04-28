 $('a').smoothScroll();
// $('nav-link').alert("heoo");
//Captcha();

// openModal();

// setInterval(function openModal() {
// 	document.getElementById("modalBtn").click();
// }, 60000);

function openModal() {
	document.getElementById("modalBtn").click();
}

$('.about-img').tilt({
    glare: true,
    maxGlare: .5,
    maxTilt: 5,
});

//$("#gallery-carousel").owlCarousel();
$(document).ready(function(){
  $("#gallery-carousel").owlCarousel({
      items: 1,
      lazyLoad: true,
      autoplay: true,
      rewind: true,
      autoplayTimeout: 3000,
  });
});

$(document).ready(function(){
  $("#floor-carousel").owlCarousel({
      items: 1,
      lazyLoad: true,
      autoplay: true,
      rewind: true,
      autoplayTimeout: 3000,
      dots: true,
  });
});

$(document).ready(function(){
  $("#home-carousel-desktop").owlCarousel({
      items: 1,
      lazyLoad: true,
      autoplay: true,
      rewind: true,
      autoplayTimeout: 3000
  });
});

//$(document).ready(function(){
//  $("#home-carousel-mobile").owlCarousel({
//      items: 1,
//      lazyLoad: true,
//      autoplay: true,
//      rewind: true,
//      autoplayTimeout: 3000,
//      dots: false,
//      nav: true,
//      navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
//  });
//});

$("#brochure-form").submit(function(event) {
	// console.log("Clickedd!!");
	var str = document.getElementById('brochure_txtInput').value;
	if (!ValidCaptcha(str)) {
		event.preventDefault();
		alert("Please check the recaptcha");
	}
});

$("#contact-form").submit(function(event) {
	// console.log("Clickedd!!");
	var str = document.getElementById('contact_txtInput').value;
	if (!ValidCaptcha(str)) {
		event.preventDefault();
		alert("Please check the recaptcha");
	}
});


$('#header .nav-item').click(function(e) {
    e.preventDefault();
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
});


//$("iframe").click((e) => {
//   e.stopPropagation(); 
//});

// $(".menu-item-link").on("click", function(){
// 	$("#mobile-menu").removeClass("mobile-menu-active");
// 	$("#mobile-header-icon").removeClass("mobile-header-icon-close");
// 	$(".menu-item-link").removeClass("active");
// })




