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

// slider stepup 1

var i = 0;
var images = [];
var time = 3000;

// images list 
images[0] = "images/stepup1.png";
images[1] = "images/stepup2.png";
images[2] = "images/stepup3.png";

// change image 

function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);

	}

	window.onload = changeImg;