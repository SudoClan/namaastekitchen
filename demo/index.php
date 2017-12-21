<!DOCTYPE html>
<html>
	<head>
		<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
		<script src="js/slippry.min.js"></script>
		<script src="//use.edgefonts.net/cabin;source-sans-pro:n2,i2,n3,n4,n6,n7,n9.js"></script>
		<meta name="viewport" content="width=device-width">
    <link href="css/demo.css" rel="stylesheet">
    <link href="css/slippry.css" rel="stylesheet">
	</head>
	<body>


			<ul id="demo1">
				<li><a href="#slide1"><img src="img/slideshow/1.jpg"></a></li>
				<li><a href="#slide2"><img src="img/slideshow/2.jpg"></a></li>
				<li><a href="#slide3"><img src="img/slideshow/3.jpg"></a></li>
				<li><a href="#slide4"><img src="img/slideshow/4.jpg"></a></li>
				<li><a href="#slide5"><img src="img/slideshow/5.jpg"></a></li>
			</ul>


		<script>
			$(function() {
				var demo1 = $("#demo1").slippry({
					transition: 'fade',
					// useCSS: true,
					speed: 3500,
					// pause: 3000,
					// auto: true,
					// preload: 'visible',
					autoHover: false
				});

				//$('.stop').click(function () {
					//demo1.stopAuto();
				//});

				//$('.start').click(function () {
					//demo1.startAuto();
				//});

				//$('.prev').click(function () {
					//demo1.goToPrevSlide();
					//return false;
				//});
				//$('.next').click(function () {
					//demo1.goToNextSlide();
					//return false;
				//});
				//$('.reset').click(function () {
					//demo1.destroySlider();
					//return false;
				//});
				//$('.reload').click(function () {
					//demo1.reloadSlider();
					//return false;
				//});
				//$('.init').click(function () {
					//demo1 = $("#demo1").slippry();
					//return false;
				//});
			});
		</script>
	</body>
</html>
