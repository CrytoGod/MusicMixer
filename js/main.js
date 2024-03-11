(()=>{
	console.log("JS CONNECTED");

	let button = document.querySelector('#hamburger');
	let burgerCon = document.querySelector('.burger-con');
	let albumCovers = document.querySelectorAll('#track-list audio');
	let theAudioEl = document.querySelector('#audioMain');
	let playButton = document.querySelector('#play-button');
	let pauseButton = document.querySelector('#pause-button');
	
	
	function loadAudio(){
		let newSrc =  `audio/${this.dataset.trackref}.wav`;
		theAudioEl.src = newSrc;
		theAudioEl.load();
		playAudio();
	  }
	
function playAudio(){
		theAudioEl.play(); 
		
	 }

	 function pauseAudio(){
		theAudioEl.pause();
	}

	audioMain.loop = true;

	 albumCovers.forEach(
		cover => cover.addEventListener('click', loadAudio)
	);




	
// START Function for Menu bar toggle attribute
	function hamburgerMenu() {
		burgerCon.classList.toggle('burger-con');
		(console.log("Menu Track appear"));
		
	};
// END Function for Menu bar toggle attribute



	button.addEventListener('click', hamburgerMenu, false);	
	pauseButton.addEventListener('click', pauseAudio);
	playButton.addEventListener('click', playAudio);
	
		
	
})();