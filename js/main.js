(()=>{
	console.log("JS CONNECTED");

	let button = document.querySelector('#hamburger');
	let burgerCon = document.querySelector('.burger-con');
	let albumCovers = document.querySelectorAll('#track-list li audio');
	let theAudioEl = document.querySelector('#audioMain');
	let playButton = document.querySelector('#play-button');
	let pauseButton = document.querySelector('#pause-button');
	let spinPlates = document.querySelectorAll('.jockey');
	let buttonSpan = document.querySelector('#track-display nav div');
	let effectControl = document.querySelectorAll('.effect-control li');
	let trackList = document.getElementById('track-list');
    let infoPlay = document.querySelector('.infoPlay');
	
	trackList.addEventListener('click', function(event) {
        let trackItem = event.target.closest('li');
        if (trackItem) {
            let trackName = trackItem.querySelector('p').textContent;
            infoPlay.textContent = "Playing " + trackName;
        }
    });
	

	function shadowEffect(event){
		  event.target.closest('li').classList.toggle('effectshadow');
		  console.log('Shadow Effect Added to Effect Controls')
	}

function noSpan(){
	buttonSpan.style.animation = 'none';
}

	function loadAudio(){
		let newSrc =  `audio/${this.dataset.trackref}.wav`;
		theAudioEl.src = newSrc;
		theAudioEl.load();
		
	  }
	
function playAudio(){
	
		theAudioEl.play(); 
		spinPlates.forEach(function(spinPlate) {
			spinPlate.classList.add('jockey');
		});
		buttonSpan.style.animation = 'bounce 1s infinite alternate';

		infoPlay.textContent = "Now Playing " + currentTrackName;


		console.log("Disk Rotation Added");
		console.log("Playing");
		
	 }



	 function pauseAudio(){
		theAudioEl.pause();
		spinPlates.forEach(function(spinPlate) {
			spinPlate.classList.remove('jockey');
		});
		buttonSpan.style.animation = 'none';

		console.log("Disk Rotation Removed");
		console.log("Paused");
	}

	audioMain.loop = true;

	 albumCovers.forEach(
		cover => cover.addEventListener('click', loadAudio)
		
	)



document.addEventListener("DOMContentLoaded", function() {
   
    let spinPlates = document.querySelectorAll('.jockey');
    
    
    spinPlates.forEach(function(spinPlate) {
        spinPlate.classList.remove('jockey');
    });
	
});


	

	function hamburgerMenu() {
		burgerCon.classList.toggle('burger-con');
		console.log("Menu Track toggled");
		
	};




	button.addEventListener('click', hamburgerMenu, false);	
	pauseButton.addEventListener('click', pauseAudio);
	playButton.addEventListener('click', playAudio);
	document.addEventListener('DOMContentLoaded', noSpan);
	effectControl.forEach(
		shadow => shadow.addEventListener('click', shadowEffect)
	);
	

	
})();