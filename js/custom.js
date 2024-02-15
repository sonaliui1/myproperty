(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();
	

	var tinySdlier = function() {

		var heroSlider = document.querySelectorAll('.hero-slide');
		var propertySlider = document.querySelectorAll('.property-slider');
		var imgPropertySlider = document.querySelectorAll('.img-property-slide');
		var testimonialSlider = document.querySelectorAll('.testimonial-slider');
		

		if ( heroSlider.length > 0 ) {
			var tnsHeroSlider = tns({
				container: '.hero-slide',
				mode: 'carousel',
				speed: 700,
				autoplay: true,
				controls: false,
				nav: false,
				autoplayButtonOutput: false,
				controlsContainer: '#hero-nav',
			});
		}


		if ( imgPropertySlider.length > 0 ) {
			var tnsPropertyImageSlider = tns({
				container: '.img-property-slide',
				mode: 'carousel',
				speed: 700,
				items: 1,
				gutter: 30,
				autoplay: true,
				controls: false,
				nav: true,
				autoplayButtonOutput: false
			});
		}

		if ( propertySlider.length> 0 ) {
			var tnsSlider = tns({
				container: '.property-slider',
				mode: 'carousel',
				speed: 700,
				gutter: 30,
				items: 3,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: '#property-nav',
				responsive: {
					0: {
						items: 1
					},
					700: {
						items: 2
					},
					900: {
						items: 3
					}
				}
			});
		}


		if ( testimonialSlider.length> 0 ) {
			var tnsSlider = tns({
				container: '.testimonial-slider',
				mode: 'carousel',
				speed: 700,
				items: 3,
				gutter: 50,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: '#testimonial-nav',
				responsive: {
					0: {
						items: 1
					},
					700: {
						items: 2
					},
					900: {
						items: 3
					}
				}
			});
		}
	}
	tinySdlier();

	var ctx = document.getElementById('myChart')
	// eslint-disable-next-line no-unused-vars
	var myChart = new Chart(ctx, {
	  type: 'bar',
	  data: {
		labels: [
		  'Sunday',
		  'Monday',
		  'Tuesday',
		  'Wednesday',
		  'Thursday',
		  'Friday',
		  'Saturday'
		],
		datasets: [{
		  data: [
			15339,
			21345,
			18483,
			24003,
			23489,
			24092,
			12034
		  ],
		  lineTension: 0,
		  backgroundColor: 'transparent',
		  borderColor: '#007bff',
		  borderWidth: 4,
		  pointBackgroundColor: '#007bff'
		}]
	  },
	  options: {
		scales: {
		  yAxes: [{
			ticks: {
			  beginAtZero: false
			}
		  }]
		},
		legend: {
		  display: false
		}
	  }
	})

	const ctx1 = document.getElementById('myChart1');
	new Chart(ctx1, {
	  type: 'doughnut',
	  data: {
		datasets: [{
		  data: [42, 68],
		  hoverOffset: 4
		}]
	  }
	});

	const ctx2 = document.getElementById('myChart2');
	new Chart(ctx2, {
	  type: 'doughnut',
	  data: {
		datasets: [{
		  data: [42, 68],
		  hoverOffset: 4
		}]
	  }
	});

	const ctx3 = document.getElementById('myChart3');
	new Chart(ctx3, {
	  type: 'doughnut',
	  data: {
		datasets: [{
		  data: [42, 68],
		  hoverOffset: 4
		}]
	  }
	});

	const ctx4 = document.getElementById('myChart4');
	new Chart(ctx4, {
	  type: 'doughnut',
	  data: {
		datasets: [{
		  data: [42, 68],
		  hoverOffset: 4
		}]
	  }
	});

	const ctx5 = document.getElementById('myChart5');
	new Chart(ctx5, {
	  type: 'doughnut',
	  data: {
		datasets: [{
		  data: [42, 68],
		  hoverOffset: 4
		}]
	  }
	});

	const ctx6 = document.getElementById('myChart6');
	new Chart(ctx6, {
	  type: 'doughnut',
	  data: {
		datasets: [{
		  data: [42, 68],
		  hoverOffset: 4
		}]
	  }
	});


	const myChart_h_1 = document.getElementById('myChart_h_1');

	new Chart(myChart_h_1, {
		type: 'doughnut',
		data: {
		  datasets: [{
			data: [42, 68],
			hoverOffset: 4
		  }]
		}
	});
	const myChart_h_2 = document.getElementById('myChart_h_2');

	new Chart(myChart_h_2, {
		type: 'doughnut',
		data: {
		  datasets: [{
			data: [42, 68],
			hoverOffset: 4
		  }]
		}
	});
	const myChart_h_3 = document.getElementById('myChart_h_3');

	new Chart(myChart_h_3, {
		type: 'doughnut',
		data: {
		  datasets: [{
			data: [42, 68],
			hoverOffset: 4
		  }]
		}
	});
	const myChart_h_4 = document.getElementById('myChart_h_4');

	new Chart(myChart_h_4, {
		type: 'doughnut',
		data: {
		  datasets: [{
			data: [42, 68],
			hoverOffset: 4
		  }]
		}
	});
	const myChart_h_5 = document.getElementById('myChart_h_5');

	new Chart(myChart_h_5, {
		type: 'doughnut',
		data: {
		  datasets: [{
			data: [42, 68],
			hoverOffset: 4
		  }]
		}
	});
	const myChart_h_6 = document.getElementById('myChart_h_6');

	new Chart(myChart_h_6, {
		type: 'doughnut',
		data: {
		  datasets: [{
			data: [42, 68],
			hoverOffset: 4
		  }]
		}
	});
})()