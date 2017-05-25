'use strict';

var url = 'http://localhost:3000/';

var category = document.querySelector('.cat');
var publisher = document.querySelector('.publ');
var author = document.querySelector('.auth');
var country = document.querySelector('.country');
var main = document.querySelector('.main');


function get(url) {
  load(url, function (data) {
  console.log(data);
  defTable(data);
  loadSelectValuescat(data);
  loadSelectValuespub(data);
  loadSelectValuesauth(data);
  changeEventHandler();
});
}

get(url);

document.addEventListener('DOMContentLoaded',function() {
    category.addEventListener('change', changeEventHandler);
    publisher.addEventListener('change', changeEventHandler);
    author.addEventListener('change', changeEventHandler);
    country.addEventListener('change', changeEventHandler);
},false);

function changeEventHandler(event) {
    console.log(event.target.value);
    if (event.target.className === 'cat') {
      get(url + '?category=' + event.target.value);
    } else if (event.target.className === 'publ') {
      get(url + '?publisher=' + event.target.value);
    } else if (event.target.className === 'auth') {
      get(url + '?author=' + event.target.value);
    }
}

function loadSelectValuescat(data) {
  var listOfCategory = [];
  data.forEach(function(elem,idx) {
    if (listOfCategory.includes(elem.cate_descrip) === false) {
      listOfCategory.push(elem.cate_descrip);
    }
  });

  listOfCategory.forEach(function(elem, idx) {
    var option = document.createElement('option');
    option.className = elem;
    option.textContent = elem;
    category.appendChild(option);
  });
}

function loadSelectValuespub(data) {
  var listOfCategory = [];
  data.forEach(function(elem,idx) {
    if (listOfCategory.includes(elem.pub_name) === false) {
      listOfCategory.push(elem.pub_name);
    }
  });

  listOfCategory.forEach(function(elem, idx) {
    var option = document.createElement('option');
    option.className = elem;
    option.textContent = elem;
    publisher.appendChild(option);
  });
}

function loadSelectValuesauth(data) {
  var listOfCategory = [];
  data.forEach(function(elem,idx) {
    if (listOfCategory.includes(elem.aut_name) === false) {
      listOfCategory.push(elem.aut_name);
    }
  });

  listOfCategory.forEach(function(elem, idx) {
    var option = document.createElement('option');
    option.className = elem;
    option.textContent = elem;
    author.appendChild(option);
  });
}

function defTable(data) {
  var defTable = drawing(data);
  main.innerHTML = '';
  main.insertAdjacentHTML('afterbegin', defTable);
}


function drawing(rows) {
  var table = "<table>";
  table += "<tr><th>" + "Book name" + "</th><th>" + "Author" + "</th><th>" + "Category" + "</th><th>" + "Publisher Name" + "</th><th>" + "Book Price" + "</th></tr>";
  rows.forEach(function(record) {
    table += "<tr>";
    table += "<td>" + record.book_name + "</td>";
    table += "<td>" + record.aut_name + "</td>";
    table += "<td>" + record.cate_descrip + "</td>";
    table += "<td>" + record.pub_name + "</td>";
    table += "<td>" + record.book_price + "</td>";
    table += "</tr>";
    });
  table += "</table>";
  return table;
}


function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      let responseFromServer = JSON.parse(xhr.response);  // IMPORTANT
      callback(responseFromServer);
    }
  };
  xhr.open('GET', url, true);
  xhr.send('');
}



