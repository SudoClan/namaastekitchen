$(document).ready(function(){
		$(".menu-items").click(function(){
		var $attribute = $(this).attr("id");

		console.log($attribute);

		if($attribute ==="starter"){
			$(".food-wrapper").animate({"margin-left": "-2500px"}, 500);
			$(".starter").show();
			

			
		}
		else if($attribute === "main-course") {
			$(".food-wrapper").animate({"margin-left": "-2500px"}, 500);
			$(".main-course").show();
		}
		else if($attribute === "grill") {
			$(".food-wrapper").animate({"margin-left": "-2500px"}, 500);
			$(".grill").show();
		}
		else if($attribute === "veg") {
			$(".food-wrapper").animate({"margin-left": "-2500px"}, 500);
			$(".veg").show();
		}
		else if($attribute === "bread") {
			$(".food-wrapper").animate({"margin-left": "-2500px"}, 500);
			$(".bread").show();
		}
		else if($attribute === "rice") {
			$(".food-wrapper").animate({"margin-left": "-2500px"}, 500);
			$(".rice").show();
		}
		else if($attribute === "dessert") {
			$(".food-wrapper").animate({"margin-left": "-2500px"}, 500);
			$(".dessert").show();
		}
		else if($attribute === "bevarages") {
			$(".food-wrapper").animate({"margin-left": "-2500px"}, 500);
			$(".bevarages").show();
		}
		else if($attribute === "liquers") {
			$(".food-wrapper").animate({"margin-left": "-2500px"}, 500);
			$(".liquers").show();
		}


	});

	$(".food-tag").click(function(){
		$(".food-wrapper").animate({"margin-left": "0"},700);
		$(this).parents(".food-item-price").hide("slow");

	});
});// Document Read function End


