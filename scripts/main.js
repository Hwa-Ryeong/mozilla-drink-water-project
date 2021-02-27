let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'image/glass-water-drink-blue-thumbnail.jpg') {
        myImage.setAttribute('src', 'image/firefox2.png');
    } else {
        myImage.setAttribute('src', 'image/glass-water-drink-blue-thumbnail.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Drinking Water is Important:  ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Drinking Water is Important: ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}