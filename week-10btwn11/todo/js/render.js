'use strict';

// let newAjax = ajax.load;
// const url = 'http://localhost:3000/';

let renderTodo = (function() {

	function render(data) {
		let todoClass = document.querySelector('.todos');
		todoClass.innerHTML = '';
		data.forEach(function(elem, idx) {
			let todoContainer = document.createElement('div');
			todoContainer.className = 'todoItem';
			todoClass.appendChild(todoContainer);

			let todoText = document.createElement('div');
			todoText.className = 'text';

			let todoBin = document.createElement('div');
			todoBin.className = 'bin';
			todoBin.setAttribute('id', elem.id);

			let todoCheck = document.createElement('div');
			todoCheck.className = 'uncheck';
			todoCheck.setAttribute('id', elem.id);
			if (elem.state === null) {
				todoCheck.setAttribute('class', 'uncheck');
			} else {
				todoCheck.setAttribute('class', 'checked');
			}

			todoContainer.appendChild(todoText);
			todoText.textContent = elem.text;
			todoContainer.appendChild(todoBin);
			todoContainer.appendChild(todoCheck);


			// todoBin.addEventListener('click', function(e) {
			// 	console.log(todoBin.id);
			// 	newAjax('DELETE', url + 'todos/' +  todoBin.id, addTodo.value, function () {
			// 		newAjax('Get', url + 'todos', addTodo.value, render);
			// 	});
			// });

			todoBin.addEventListener('click', function(e) {
				console.log(todoBin.id);
				newAjax('DELETE', url + 'todos/' +  todoBin.id, addTodo.value, callback);
			});


			todoCheck.addEventListener('click', function(e) {
				console.log(todoCheck);
			});

		});
	}

	return {
		render: render
	};
}());


