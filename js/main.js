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
	let puzzlePieces = document.querySelectorAll('.img-wrapper img');
	let dropZones = document.querySelectorAll('.undefined-drop .img-wrapper');
	let selectedTrackName;
	let draggedPiece = document.querySelectorAll('.img-wrapper img') ;
	let mainTrackPlaying = false;
	let resetButton = document.querySelector('.inforeset');
	// let audioElements = document.querySelectorAll('.mt-minis');
	// let miniTracks = document.querySelectorAll('.img-wrapper audio') ;
	// let revPiece = document.querySelectorAll('.defined-drop img') ;
	// let reverseDrag = document.querySelectorAll('.defined-drop img');

	// revPiece.forEach(piece => { (((Trying to reverse a drag and drop back to drag state)))
	// 	piece.addEventListener("dragstart", handleRevDrag);
	// 	piece.addEventListener("dragover", handleDragOver);
	// 	piece.addEventListener("drop", handleRevDrop);
	// }); Do Not Un-comment this comment----lol

	function buttonReset() {
		location.reload();
	}
	



	function handleStartDrag() { 
		console.log('started dragging this piece:', this);
		// store a reference to the puzzle piece image that we're dragging
		// so we can use it later and move it to a drop zone
		draggedPiece = this;
	}
	// function handleRevDrag() { (((Trying to reverse a drag and drop back to drag state)))
	// 	console.log('started dragging this piece:', this);
	// 	// store a reference to the puzzle piece image that we're dragging
	// 	// so we can use it later and move it to a drop zone
	// 	revPiece = this;
	// } Do Not Un-comment this comment----lol

	function handleDragOver(event) { 
		event.preventDefault(); 
		// this overrides the default dragover behaviour
		console.log('dragged over me'); 
	}


	
	function handleDrop(event) {
		event.preventDefault();
		console.log('dropping something on me');
	
		if (this.children.length === 0) {
			this.appendChild(draggedPiece);
		} else {
			console.log('puzzle piece in zone ');
		}
		let dropZone = this.closest('.undefined-drop');
    if (dropZone) {
        dropZone.querySelector('span').textContent = 'Playing';
		dropZone.querySelector('span').classList.add('droppings');
    }
	let minitrack = draggedPiece.getAttribute("data-minitrack");

	if (mainTrackPlaying) {
        let audio = document.querySelector(`audio[data-minitrack="${minitrack}"]`);
        audio.loop = true;
        audio.play();
    }
    


	event.target.closest('li').classList.add('dropeffectshadow');
	}

	// function handleRevDrop(event) { (Trying to reverse a drag and drop back to drag state)
	// 	event.preventDefault();
	// 	console.log('dropping something on me');
	
	// 	if (this.children.length === 0) {
	// 		this.appendChild(reverseDrag);
	// 	} else {
	// 		console.log('puzzle piece in zone ');
	// 	}
	
  
	// } Do Not Un-comment this comment----lol
// ============================================================================
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
	

	function shadowEffect(event) {
		// Remove the 'effectshadow' class from all 'li' elements with the class 'effect-control'
		document.querySelectorAll('.effect-control li').forEach(function(item) {
			item.classList.remove('effectshadow');
		});
	
			
	
		// Add the 'effectshadow' class to the clicked 'li' element
		let listItem = event.target.closest('li');
		if (listItem) {
			listItem.classList.add('effectshadow');
			console.log('Shadow Effect Added to Effect Controls');
	
			// Check the id of the clicked element and apply corresponding changes
			switch (listItem.id) {
				case 'echo':
					// Change HTML background image
					document.getElementById('container').style.backgroundImage = 'url(images/dark.svg)';
					break;
				case 'scracth':
					// Change container background image
					document.getElementById('container').style.backgroundImage = 'url(images/grint.svg)';
					
					break;
				case 'reverb':
					// Change font color
					document.getElementById('container').style.backgroundImage = 'url(images/hacp.svg)';
					break;
				case 'pitch':
					// Change body background image
					document.getElementById('container').style.backgroundImage = 'url(images/sci.svg)';
					break;
				default:
					// Default case
					break;
			}
		}
	
	}
	
	// Add event listener to the 'effect-control' list
	document.querySelectorAll('.effect-control li').forEach(function(item) {
		item.addEventListener('click', shadowEffect);
	});
	
	
	

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
	mainTrackPlaying = true;
	
}




	 function pauseAudio(){
		theAudioEl.pause();
		spinPlates.forEach(function(spinPlate) {
			spinPlate.classList.remove('jockey');
		});
		buttonSpan.style.animation = 'none';
	mainTrackPlaying = false;
	

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
	resetButton.addEventListener('click', buttonReset);
	// =============================================
	// dropZones.forEach(zone => {
	// 	zone.addEventListener("dragstart", handleStartDrag);
	// 	zone.addEventListener("dragover", handleDragOver);
	// 	zone.addEventListener("drop", handleDrop);
	// }); Do not even know what i am doing here!!!!!! All i can say Is FAT ARROW!
	// =========================
	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

// add the dragover AND the drop event handling to the drop zones
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// add the drop event handling
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
// reverseDrag.forEach(zone => zone.addEventListener("drop", handleDrop));
// =========================================================================
// puzzlePieces.forEach(piece => {
//     piece.addEventListener("dragstart", handleStartDrag);
//     piece.addEventListener("dragover", handleDragOver); // Allow dragging over drop zones
//     piece.addEventListener("drop", handleDrop); // Allow dropping back to the drag zone
// }); Do not even know what i am doing here!!!!!! All i can say Is FAT ARROW!


	
})();