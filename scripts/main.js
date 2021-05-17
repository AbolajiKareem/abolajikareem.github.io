let shuttleImage = document.querySelector('img');

shuttleImage.onclick = function(){
    let altSrc = shuttleImage.getAttribute('src');
    if (altSrc === "images/space-shuttle.jpg") {
        shuttleImage.setAttribute('src', 'images/space-shuttle2.jpg')
    } else {
        shuttleImage.setAttribute('src', 'images/space-shuttle.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }