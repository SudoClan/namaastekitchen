$(document).ready(function() {


	// Navigation Bar Add Extra Margin
	
		$(window).scroll(function() {
			if($(".navbar").offset().top > 450) {
				// Hide main logo
				$(".navbar-left, .navbar-right").css("margin-top", "0px");
				$(".main-logo").slideUp("slow");			
				$(".main-logo-top").fadeIn(1000);
				
			}
			else {
				if($(window).width() <= 668) {
				$(".navbar-brand").hide();	

			}
			else{

				$(".main-logo").slideDown("slow");
				$(".main-logo-top").fadeOut(50);
				$(".navbar-left, .navbar-right").css("margin-top", "10px");
				
				

			}
				
			}
		});

		

	// SCROLLING EFFECT ON HOME PAGE

		$(".page-scroll a").bind("click", function(){
			var $anchor = $(this);			
			$("html, body").stop().animate({
					scrollTop: $($anchor.attr("href")).offset().top-90
				}, 1500, "easeInOutExpo");
				event.preventDefault();

		});


		if($(window).width() < 768 || $(window).width() <= 480) {
			$("button.navbar-toggle").click(function(){

				$(".dropdown-toggle").hide();
				$(".dropdown-menu").css("display","block");
				$(".dropdown-menu").css("background-color","none");
				$(".dropdown-toggle").attr("aria-expanded", "true");
				
			});

		}
		


		
			

});



