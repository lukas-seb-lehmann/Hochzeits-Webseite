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




window.onload=checkcookie();


function starttracking(){
	 window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SRC8XTZ052');
	/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'G-SRC8XTZ052', 'auto');
ga('send', 'pageview');*/
	
}

f



 function checkcookie() {
	 if (document.cookie.indexOf("nocookie") <= 0) {
    //new visit
	
	
  }else{
	  
	//returning
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	starttracking();
	
  }
 }

function funzustimmen(){
	var now = new Date();
  var time = now.getTime();
  var expireTime = time + 3600*4392000;
  now.setTime(expireTime);
  document.cookie = 'name=nocookie;expires='+now.toUTCString()+';path=/';
	
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	
	starttracking();
/*fbq('consent', 'grant');*/
	
}

function funanpassen(){
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	
}

function deletecookie(){
	document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}
 
