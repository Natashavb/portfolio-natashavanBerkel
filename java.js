document.getElementsByClassName('menutoggle')[0].onclick = function(){
	var menu = document.getElementById('menu');
	if(menu.classList.contains('inactive')){
		menu.classList.remove('inactive');
		menu.classList.add('active');
	} else {
		menu.classList.remove('active');
		menu.classList.add('inactive');
	}
};

function borderKleur(a, tekst){  
	// als er niks is ingevuld in de formulier veld, dan wordt de border kleur donker oranje zodra er gedrukt wordt op de volgende invoer veld. (verliest focus)
	if(a == ""){
		document.getElementById(tekst).style.border="1px solid #AE4F05";
			return false;
	}
	 				// als er wel iets is ingevuld, wordt de border kleur groen zodra er gedrukt wordt op de volgende invoer veld. 
	else {
		document.getElementById(tekst).style.border="1px solid green";
		 }
}; 

// // slider stepup 1

// var i = 0;
// var images = [];
// var time = 3000;

// // images list 
// images[0] = "images/stepup1.png";
// images[1] = "images/stepup2.png";
// images[2] = "images/stepup3.png";

// // change image 

// function changeImg(){
// 	document.slide.src = images[i];

// 	if(i < images.length - 1){
// 		i++;
// 	} else {
// 		i = 0;
// 	}

// 	setTimeout("changeImg()", time);

// 	}

// 	window.onload = changeImg;

// slider wewo 2 

var i = 0;
var images = [];
var time = 3000;

// images list 
images[0] = "images/W1.png";
images[1] = "images/w2.png";
images[2] = "images/w3.png";
images[3] = "images/w4.png";
images[4] = "images/w5.png";
images[5] = "images/w6.png";
images[6] = "images/W7.png";
images[7] = "images/w8.png";

// change image 

function changeImg2(){
	document.slide2.src = images[i];

	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg2()", time);

	}

	window.onload = changeImg2;
