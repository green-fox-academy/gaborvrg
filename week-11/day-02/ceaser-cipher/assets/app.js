'use script';

const xhr = new XMLHttpRequest();
const url = 'http://localhost:3000';
let button = document.querySelector('button');
let mainHtml = document.querySelector('.main');

let postToServer = function (data, callback) { // ha lefut a function a POST keressel, akkor utana fut le a callback
  // console.log(data);
  xhr.open('POST', url + '/decode', true); 
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data)); // JSON-osit // itt nem szamit a sorrend? nem kellene a 'onreadystatechange' utan tenni?
  // console.log(JSON.stringify(data));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        callback(xhr.response);
    }
  };
};

let drawListToHtml = function(response) {
  // console.log(JSON.parse(response));
  let data = JSON.parse(response);

  mainHtml.innerHTML = '';
  let ulTag = document.createElement('ul');

  data.forEach(function(elem) {
    // console.log(elem.decoded_text);
    let liTag = document.createElement('li');
    liTag.textContent = elem.decoded_text;
    ulTag.appendChild(liTag);
  });
  mainHtml.appendChild(ulTag);
};



let eventHandler = function() {
	let shiftNumber = document.querySelector('.shift');
  let input = document.querySelector('.textinput');
	
	button.addEventListener('click', function() {
    let inputObj = {
      'text': 'oruhp lsvxp groru vlw',
      'shift': 3
      // "shift": shiftNumber.value,
      // "text": input.value
    };

		// console.log(inputObj);
    postToServer(inputObj, drawListToHtml);
	});
};

eventHandler();