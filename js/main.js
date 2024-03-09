(()=>{
	console.log("JS CONNECTED");

	let button = document.querySelector('#hamburger');
	let burgerCon = document.querySelector('.burger-con');
	
	

	
// START Function for Menu bar toggle attribute
	function hamburgerMenu() {
		burgerCon.classList.toggle('burger-con');
		console.log("appear");
	};
// END Function for Menu bar toggle attribute

	button.addEventListener("click", hamburgerMenu, false);	
		
	
})();