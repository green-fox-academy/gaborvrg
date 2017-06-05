'use strict';

let ajax = (function () {
	function load(method, url, callback, input) {

		let data = {
			todoText: input,
			state: null
		};

		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
		  if (xhr.readyState === 4) {
		    let responseFromServer = JSON.parse(xhr.response);
		    callback(responseFromServer);
		  }
		};
		xhr.open(method, url, true);
		xhr.setRequestHeader('Content-Type', 'application/json');

	  if (data.todoText !== undefined) {
			xhr.send(JSON.stringify(data));
		}	else {
			xhr.send();
		}
	}
	return {
		load: load
	};
}());
