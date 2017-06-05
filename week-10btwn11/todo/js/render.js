'use strict';

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

			let todoCheck = document.createElement('div');
			todoCheck.className = 'uncheck';
			if (elem.state === null) {
				todoCheck.setAttribute('class', 'uncheck');
			} else {
				todoCheck.setAttribute('class', 'checked');
			}

			todoContainer.appendChild(todoText);
			todoText.textContent = elem.text;
			todoContainer.appendChild(todoBin);
			todoContainer.appendChild(todoCheck);

			todoBin.addEventListener('click', function(e) {
				console.log('bin');
			});

			todoCheck.addEventListener('click', function(e) {
				console.log('uncheck');
			});
		});
	}

	return {
		render: render
	};
}());


