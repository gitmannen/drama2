alert("slippryLoaded")

var demo1 = $("#demo1").slippry({
					//transition: 'fade',
					// useCSS: true,
					 speed: 1000,
					// pause: 3000,
					auto: true
					//adaptiveHeight: false,
					// preload: 'visible',
					//autoHover: false
				});

				$('.prev').click(function () {
					demo1.goToPrevSlide();
					return false;
				});
				$('.next').click(function () {
					demo1.goToNextSlide();
					return false;
				});
				
				/* $('.stop').click(function () {
					demo1.stopAuto();
				}); */

				/* $('.start').click(function () {
					demo1.startAuto();
				}); */


				/* $('.reset').click(function () {
					demo1.destroySlider();
					return false;
				});
				$('.reload').click(function () {
					demo1.reloadSlider();
					return false;
				});
				$('.init').click(function () {
					demo1 = $("#demo1").slippry();
					return false;
				}); */