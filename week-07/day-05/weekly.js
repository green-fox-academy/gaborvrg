// 'use strict';

var imageList = [
      {
        img: 'img/pic1.jpg',
        title: 'Foxes',
        descripton: 'some description'
      },
      {
        img: 'img/pic2.jpg',
        title: 'Whales and Rabbits',
        descripton: 'some description'
      },
      {
        img: 'img/pic3.jpg',
        title: 'Baobabs and Roses',
        descripton: 'some description'
      },
      {
        img: 'img/pic4.jpg',
        title: 'Giant monsters',
        descripton: 'some descripton'
      },
      {
        img: 'img/pic5.jpg',
        title: 'Sheep',
        descripton: 'some description'
      }
    ]

var clickList = document.querySelectorAll('.item');


function slider (event) {

  var imgClass = event.target.classList;
  var imgUrl = document.querySelector('img');
  var imgCss = document.querySelectorAll('.item');

  if (imgClass.contains('one')) {
    imgUrl.setAttribute('src', 'img/pic1.jpg');
    imgCss[0].style.backgroundImage="url(img/pic1.jpg)"

  } else if (imgClass.contains('two')) {
    imgUrl.setAttribute('src', 'img/pic2.jpg');
    imgCss[1].style.backgroundImage="url(img/pic2.jpg)" 

  } else if (imgClass.contains('three')) {
    imgUrl.setAttribute('src', 'img/pic3.jpg');
    imgCss[2].style.backgroundImage="url(img/pic3.jpg)" 

  } else if (imgClass.contains('four')) {
    imgUrl.setAttribute('src', 'img/pic4.jpg');
    imgCss[3].style.backgroundImage="url(img/pic4.jpg)" 

  } else if (imgClass.contains('five')) {
    imgUrl.setAttribute('src', 'img/pic5.jpg');
    imgCss[4].style.backgroundImage="url(img/pic5.jpg)"

  } else if (imgClass.contains('six')) {
    imgUrl.setAttribute('src', 'img/pic6.jpg');
    imgCss[5].style.backgroundImage="url(img/pic6.jpg)" 
  }
}

clickList.forEach(function(elem) {
  elem.addEventListener('mouseover', slider);
});


var imgNum = 0;
var defImage = document.querySelector('img');
console.log(imageList[imgNum].img);
defImage.setAttribute('img', imageList[imgNum].img);

function newSlider(event) {
  
}
















