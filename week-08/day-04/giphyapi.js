
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


load(url, function(datas){
    datas.data.forEach(function(elem, idx) {
        console.log(elem);
        document.querySelector('.item' + (idx+1)).style.backgroundImage = 'url(\'' + elem.images.downsized_still.url + '\')';
        document.querySelector('.item' + (idx+1)).addEventListener('mouseover', function(e) {
            console.log(elem);
            document.querySelector('.item' + (idx+1)).style.backgroundImage = 'url(\'' + elem.images.downsized.url + '\')';
        });
    });
});



function getkeyword(keyword) {
    var keywordWithSpaces = keyword.replace(/ /g ,'+'); // https://goo.gl/NmuEVs
    const endpoint = 'http://api.giphy.com/v1/gifs/search?q='+ keywordWithSpaces + '&api_key=dc6zaTOxFJmzC&limit=16';
    console.log(endpoint);
    load(endpoint);
}




keyword.addEventListener('keyup', function(e) {
    if(e.keyCode == 13) { // Enter key
        // console.log(keyword.value);
        getkeyword(keyword.value);
    }
});





