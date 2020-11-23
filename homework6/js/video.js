var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value / 100);
	video.volume = this.value / 100;
	vol = document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.duration);

	if (video.currentTime + 5 < video.duration) {
		video.currentTime += 5;
	}
	else {
		console.log("Going back to begining")
		video.currentTime = 0;
	}

	console.log("Current location: " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	let mute = document.querySelector("#mute").innerHTML;

	if (video.muted) {
		video.muted = false;
		mute = "Mute";
	}
	else {
		video.muted = true;
		mute = "Unmute";
	}
});

document.querySelector("#old").addEventListener("click", function() {
	if (video.classList.contains("oldTime") == false) {
		video.classList.add("oldTime");
	}
});

document.querySelector("#original").addEventListener("click", function() {
	if (video.classList.contains("oldTime")) {
		video.classList.remove("oldTime");
	}
});