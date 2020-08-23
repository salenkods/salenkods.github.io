let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/nature.png'){
		myImage.setAttribute('src', 'images/nature2.png');
	}
	else{
		myImage.setAttribute('src', 'images/nature.png');
	}
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
  setUserName();
}

let myHeading = document.querySelector('h1');
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(myName === null){  
	  setUserName();
  }
  else{
	  localStorage.setItem('name', myName);
	  myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}