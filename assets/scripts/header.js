$(window).scroll(function() {
	var scroll = $(window).scrollTop();
  	if(scroll > 100) {
  		$(".navbar").addClass("bg-light");
  		$(".nav-link").css("color", "#000000");
  	}
  	else {
  		$(".navbar").removeClass("bg-light");
  		$(".nav-link").css("color", "#ffffff");
  	}
})