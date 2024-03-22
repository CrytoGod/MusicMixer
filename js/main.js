(()=>{
	console.log("JS CONNECTED");

	let button = document.querySelector('#hamburger');
	let burgerCon = document.querySelector('.burger-con');
	let albumCovers = document.querySelectorAll('#track-list li audio');
	let theAudioEl = document.querySelector('#track-display #audioMain');
	let playButton = document.querySelector('#play-button');
	let pauseButton = document.querySelector('#pause-button');
	let spinPlates = document.querySelectorAll('.jockey');
	let buttonSpan = document.querySelector('#track-display nav div');
	let effectControl = document.querySelectorAll('.effect-control li');
	let trackList = document.getElementById('track-list');
    let infoPlay = document.querySelector('.infoPlay');
	let trackItems = document.querySelectorAll('#track-list li');
	let selectedTrackName;

	albumCovers.forEach(
		cover => cover.addEventListener('click', loadAudio)
	);
	
	trackItems.forEach(
		cover => cover.addEventListener('click', function() {
		
			loadAudio.call(this);
			pauseAudio();
			selectedTrackName = this.querySelector('p').textContent;
			console.log('track selected');})
			
		
	)


	// trackList.addEventListener('click', function(event) {
    //     let trackItem = event.target.closest('li');
    //     if (trackItem) {
    //         let trackName = trackItem.querySelector('p').textContent;
    //         infoPlay.textContent = "Playing " + trackName;
    //     }
    // });

	trackList.addEventListener('click', function(event) {
		// Check if a track item was clicked (inside an <li> element)
		let trackItem = event.target.closest('li');
		if (trackItem) {
			// Get the audio element inside the track item
			let audioElement = trackItem.querySelector('audio');
			if (audioElement) {
				// Call loadAudio() with the correct context (audio element)
				loadAudio.call(audioElement);
				let trackName = trackItem.querySelector('p').textContent;
				         infoPlay.textContent = "Playing " + trackName;
			}
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
		theAudioEl.dataset.trackref = this.dataset.trackref;
		theAudioEl.load();
		console.log("New source:", newSrc);
		
		
	  }

	// function loadAudio() {
	// 	let trackRef = this.getAttribute('data-trackref');
	// 	console.log("Track reference:", trackRef);
	// 	if (trackRef) {
	// 		let newSrc = `audio/${trackRef}.wav`;
	// 		console.log("New source:", newSrc);
	// 		theAudioEl.src = newSrc;
	// 		theAudioEl.load();
	// 	} else {
	// 		console.error("No data-trackref attribute found on the element.");
	// 	}
	// }

	// function loadAudio() {
	// 	let trackRef = this.dataset.trackref;
	// 	if (trackRef) {
	// 		let newSrc = `audio/${trackRef}.wav`;
	// 		this.src = newSrc;
	// 		this.load();
	// 	} else {
	// 		console.error("No data-trackref attribute found on the audio element.");
	// 	}
	// }
	
	
function playAudio() {
    // Checks if a track has been selected
    if (selectedTrackName) {
        // Play the audio
        theAudioEl.play(); 
      
        spinPlates.forEach(function(spinPlate) {
            spinPlate.classList.add('jockey');
        });
        buttonSpan.style.animation = 'bounce 1s infinite alternate';
        infoPlay.textContent = "Now Playing " + selectedTrackName ;
        console.log("Playing");
    } else {
        // If no track has been selected
        console.log("No track selected. Cannot play.");
    }
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