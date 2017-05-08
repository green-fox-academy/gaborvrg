'use strict';

var clickList = document.querySelectorAll('.thumb'); //
var leftButton = document.querySelector('.left');
var rightButton = document.querySelector('.right');
var imageIndex = Math.floor(Math.random() * imageList.length); // a fokep randomizalasa

// a fokep beallitasa
var mainImage = document.querySelector('.mainImage');
mainImage.setAttribute('src', imageList[imageIndex].url);

function slideRight() {
    imageIndex ++;
    // console.log(imageIndex);
    // for (var i = 0; i < imageList.length; i++) {

        mainImage.setAttribute('src', imageList[imageIndex].url);
    // }
    if (imageIndex === imageList.length - 1) { //az adatbazis vegere eres eseten kezdi elolrol
        imageIndex = 0;
    };
};


function slideLeft() {
    imageIndex --;
    // console.log(imageIndex);
    // for (var i = 0; i < imageList.length; i++) {

        mainImage.setAttribute('src', imageList[imageIndex].url);
    // }
    if (imageIndex === 0) { //az adatbazis elejere eres eseten kezdi a vegerol
        imageIndex = imageList.length - 1;
    };
};




leftButton.addEventListener('click', slideLeft);
rightButton.addEventListener('click', slideRight);


// var defImage = document.querySelector('img');
// console.log(imageList[imgNum]);
// // defImage.setAttribute('img', imageList[imgNum].img);


// function slider(arguments) {
  
// }


// function contoller(event) {
//   console.log(defImage);
// };


// clickList.forEach(function(elem) {
//   elem.addEventListener('click', contoller);
// });









// function slider (event) {

//   var imgClass = event.target.classList;
//   var imgUrl = document.querySelector('img');
//   // var imgCss = document.querySelectorAll('.item');

//   if (imgClass.contains('one')) {
//     imgUrl.setAttribute('src', 'img/pic1.jpg');
//     clickList[0].style.backgroundImage="url(img/pic1.jpg)"

//   } else if (imgClass.contains('two')) {
//     imgUrl.setAttribute('src', 'img/pic2.jpg');
//     clickList[1].style.backgroundImage="url(img/pic2.jpg)" 

//   } else if (imgClass.contains('three')) {
//     imgUrl.setAttribute('src', 'img/pic3.jpg');
//     clickList[2].style.backgroundImage="url(img/pic3.jpg)" 

//   } else if (imgClass.contains('four')) {
//     imgUrl.setAttribute('src', 'img/pic4.jpg');
//     clickList[3].style.backgroundImage="url(img/pic4.jpg)" 

//   } else if (imgClass.contains('five')) {
//     imgUrl.setAttribute('src', 'img/pic5.jpg');
//     clickList[4].style.backgroundImage="url(img/pic5.jpg)"

//   } else if (imgClass.contains('six')) {
//     imgUrl.setAttribute('src', 'img/pic6.jpg');
//     clickList[5].style.backgroundImage="url(img/pic6.jpg)" 
//   }
// }

// var clickList = document.querySelectorAll('.item');

// clickList.forEach(function(elem) {
//   elem.addEventListener('mouseover', slider);
// });

  
















