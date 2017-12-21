$(document).ready(function() {

	$(".menu-items").click(function() {

		var current = $(this).attr("id");
		console.log(current);

		if(current === "starter") {
			$(".food-range").slideUp("slow");
			$(".starter").fadeIn(1000);
		}
		else if(current === "main-course") {
			$(".food-range").slideUp("slow");
			$(".main-course").fadeIn(1000);
		} 
		else if(current === "grill") {
			$(".food-range").slideUp("slow");
			$(".grill").fadeIn(1000);
		} 
		else if(current === "veg") {
			$(".food-range").slideUp("slow");
			$(".veg").fadeIn(1000);
		} 
		else if(current === "bread") {
			$(".food-range").slideUp("slow");
			$(".bread").fadeIn(1000);
		} 
		else if(current === "rice") {
			$(".food-range").slideUp("slow");
			$(".rice").fadeIn(1000);
		} 
		else if(current === "dessert") {
			$(".food-range").slideUp("slow");
			$(".dessert").fadeIn(1000);
		} 
		else if(current === "bevarage") {
			$(".food-range").slideUp("slow");
			$(".bevarage").fadeIn(1000);
		} 
		else if(current === "liquer") {
			$(".food-range").slideUp("slow");
			$(".liquer").fadeIn(1000);
		} 

	});

	$(".food-price-tag").click(function() {
		$(".food-range").slideDown("slow");
		$(".food-price").fadeOut(1000);
	});
});






