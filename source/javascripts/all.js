// clicking on play link:
// when music is ready:
// play music
// add playing class to body
var play = function() {
	console.log("ready to play");
	var container = document.getElementsByTagName("body")[0];
	var music = document.getElementsByTagName("audio")[0];
	container.className = "playing";
	//music.play();
};

var checkMusic = function() {
	console.log("checkMusic");
	var music = document.getElementsByTagName("audio")[0];
	//music.addEventListener("canplaythrough", play, false);
	play();

	if(music.readyState !== 4){ //HAVE_ENOUGH_DATA
		music.addEventListener('canplaythrough', play, false);
		music.addEventListener('load', play, false); //add load event as well to avoid errors, sometimes 'canplaythrough' won't dispatch.
		setTimeout(function(){
			music.pause(); //block play so it buffers before playing
			// pause animation
		}, 1); //it needs to be after a delay otherwise it doesn't work properly.
	}else{
		//video is ready
		
	}
};

var prepareToPlay = function() {
	console.log("prepareToPlay");
	var play_button = document.getElementById("play");
	var pause_button = document.getElementById("pause");
	//trigger.className = "ready";
	play_button.addEventListener("click", checkMusic, false);
	pause_button.addEventListener("click", pause, false);
	//console.log("showPlay end");
};

window.onload = function(e) {
	prepareToPlay();
};