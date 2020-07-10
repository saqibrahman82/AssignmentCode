var sec = 0;
var min = 0;
var hrs = 0;

var interval;

var btnStrat = document.getElementById('startTimer');
var btnPause = document.getElementById('pauseTimer');
var btnReset = document.getElementById('resetTimer');

var spanHrs = document.getElementById('hrs');
var spanMin = document.getElementById('min');
var spanSec = document.getElementById('sec');

function startTimer(){
	sec++;
	if(sec > 59){
		sec = 0;
		min++;
	}
	if(min > 59){
		min = 0;
		hrs++;
	}

	spanHrs.innerHTML = hrs;
	spanMin.innerHTML = min;
	spanSec.innerHTML = sec;
}

function onclickStart() {
	interval = setInterval(startTimer, 1000);

	btnStrat.disabled = true;
	btnPause.disabled = false;
	btnReset.disabled = false;
}

function onclickPause() {	
	setTimeout(function () {
		clearInterval(interval);
	});

	btnStrat.disabled = false;
	btnPause.disabled = true;
	btnReset.disabled = false;

	btnStrat.innerHTML = "Resume";
}

function onclickReset() {
	setTimeout(function () {
		clearInterval(interval);
	});
	
	sec = 0;
	min = 0;
	hrs = 0;

	spanHrs.innerHTML = hrs;
	spanMin.innerHTML = min;
	spanSec.innerHTML = sec;

	btnStrat.disabled = false;
	btnPause.disabled = true;
	btnReset.disabled = true;

	btnStrat.innerHTML = "Start";
}