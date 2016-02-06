
		var	startTime = 1500,		//time of last start/resume
			running = false,			//status
			time;
		document.getElementById('countDownDisplay').innerHTML = startTime;	
		//Public Method
		function startPause() {
			if(startTime > 0 && running != true){
				running = true;
				decrement();
				document.getElementById('control_btn').innerHTML = 'Pause';
			} else {
				running = false;
				clearInterval(time); //pause
				document.getElementById('control_btn').innerHTML ='Resume'; 
			}
		}

		function reset() {
			running = false;
			startTime = 2500;
			clearInterval(time); 	//set to 0
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

		function changeTime(timeEle) {
			if(!running) {
				startTime = startTime + timeEle;
			}
			if(startTime < 0) {
				startTime = 1;
			}

		}

