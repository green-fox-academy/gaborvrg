'use strict';

const url = 'http://localhost:3000/';

let render = renderTodo.render;
let newAjax = ajax.load;

let addButton = document.querySelector('.add-button');
let addTodo = document.querySelector('.add-todo');



addButton.addEventListener('click', function(){
	newAjax('Post', url + 'add-todos', render, addTodo.value);
	addTodo.value = '';
});


newAjax('Get', url + 'todos', render);


