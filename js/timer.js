		var	startTime = 1500,		//time of last start/resume
			running = false,			//status
			time;
		//Public Method
		function startPause() {
			if(startTime > 0 && running != true){
				running = true;
				decrement();
				document.getElementById('control_btn').innerHTML = 'Pause';
			} else {
				running = false;
				clearInterval(time); 
				document.getElementById('control_btn').innerHTML ='Resume'; 
			}
		}

		function reset() {
			running = false;
			startTime = 2500;
			clearInterval(time); 
			document.getElementById('control_btn').innerHTML ='Start'; 
			document.getElementById('countDownDisplay').innerHTML = "00:00:00"
		}

		function decrement() {
			if(running != false){
				time = setInterval(function(){
					startTime--;
					var mins = Math.floor(startTime/10/60),
						secs = Math.floor(startTime/10),
						tenth = startTime%10;

					if(mins < 10) {
						secs = "0" + mins;
					}
					if(secs < 10) {
						secs = "0" + secs;
					}

					document.getElementById('countDownDisplay').innerHTML = mins + ":" + secs + ":" + tenth;
				}, 100);
			}
		}

