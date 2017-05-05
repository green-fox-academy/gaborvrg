'use strict';

var clickList = document.querySelectorAll('.item');

// console.log(clickList);

function slider () {
  console.log('ojjektum');
}

clickList.forEach(function(elem) {
  elem.addEventListener('click', slider);
  console.log(elem);
});










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
        img: 'img/pic.jpg',
        title: 'Sheep',
        descripton: 'some description'
      }
    ]