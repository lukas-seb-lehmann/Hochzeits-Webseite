// JavaScript Document
function span1rot() {
	var span1 = document.getElementById("span1");
	span1.classList.toggle("active1");
}

function span2dis() {
	var span2 = document.getElementById("span2");
	span2.classList.toggle("active2");
}

function span3rot() {
	var span3 = document.getElementById("span3");
	span3.classList.toggle("active3");
}

function menu() {
	var menu = document.getElementById("menu");
	menu.style.transitionDuration = '.5s';
	menu.classList.toggle("activemenu");
}

function closemenu(){
	var menu = document.getElementById("menu");
	menu.style.transitionDuration = '.5s';
	menu.classList.toggle("activemenu");
}


// Contact Track
	
	function trackcontact(){
		
  fbq('track', 'Contact');

	};

	
