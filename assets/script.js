(function(){
	var timer = false;
	var delay = false;

	//Numbers
	var num = 0;
	var perMinute = 75;
	var perSecond = perMinute / 60;
	
	//Element selection
	var count = document.getElementById("count");
	
	function update(){
		//Add the rounded per-second value to the total
		num += Math.round(perSecond);
	
		//Display the count formatted nicely with commas and whatnot
		count.innerHTML = formatNumber(num);
	}

	function formatNumber(x){
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	document.getElementById('btn-start').addEventListener("click", function(e) {
		clearInterval(timer);
		clearTimeout(delay);

		var startDelay = parseInt(document.getElementById('txt-start-after').value) * 1000;
		num = parseInt(document.getElementById('txt-start').value);
		count.innerHTML = formatNumber(num);

		delay = setTimeout(function(){
			//Run the update function once every second (1000 milliseconds)
			timer = setInterval(update, 1000/perSecond);		
		}, startDelay)
		
	
	}, false);

	//click link to toggle full screen mode
	document.getElementById('btn-fullscreen').addEventListener("click", function(e) {
		if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		}
		return false;
	}, false);
})();