
var url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=16';
var keyword = document.querySelector('.keyword');

function load(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      let responseFromServer = JSON.parse(xhr.response);  // IMPORTANT
      // console.log(responseFromServer);
      callback(responseFromServer);
    }
  };
  xhr.open('GET', url, true);
  xhr.send('');
}

function getkeyword(keyword) {
  var keywordWithSpaces = keyword.replace(/ /g ,'+'); // https://goo.gl/NmuEVs
  const endpoint = 'http://api.giphy.com/v1/gifs/search?q='+ keywordWithSpaces + '&api_key=dc6zaTOxFJmzC&limit=16';

  load(endpoint, function(datas){
    datas.data.forEach(function(elem, idx) {
      document.querySelector('.item' + (idx+1)).style.backgroundImage = 'url(\'' + elem.images.downsized_still.url + '\')';
      document.querySelector('.item' + (idx+1)).addEventListener('click', function(e) {
        document.querySelector('.item' + (idx+1)).style.backgroundImage = 'url(\'' + elem.images.downsized.url + '\')';
      });
    });
  });
}


keyword.addEventListener('keyup', function(e) {
  if(e.keyCode == 13) { // Enter key
      getkeyword(keyword.value);
  }
});

getkeyword('cat')

