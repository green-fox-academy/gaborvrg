'use strict';

const url = 'http://localhost:3000/';

let render = renderTodo.render;
let newAjax = ajax.load;

let addButton = document.querySelector('.add-button');
let addTodo = document.querySelector('.add-todo');


let callback = 	function () {
	newAjax('Get', url + 'todos', addTodo.value, render);
};


addButton.addEventListener('click', function(){
	newAjax('Post', url + 'add-todos', addTodo.value, callback);
	addTodo.value = '';
});



newAjax('Get', url + 'todos', addTodo.value, render);
