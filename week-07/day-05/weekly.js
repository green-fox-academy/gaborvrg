'use strict';

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

// console.log(clickList);

function slider (event) {
  // console.log(defaultImage());
  // defaultImage();
  var imgClass = event.target.classList;
  // console.log(imgClass);
  var imgUrl = document.querySelector('img');

  if (imgClass.contains('two')) {
    imgUrl.setAttribute('src', 'img/pic3.jpg');
  }
}

function defaultImage(pic) {
  return pic
}

clickList.forEach(function(elem) {
  elem.addEventListener('click', slider);
});

// imageList.forEach(function(elem) {
//   var defPic = elem['img'];
// });


















