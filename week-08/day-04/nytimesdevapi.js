// API Key for the Article Search API: 6634bd1387474f6c95b27a843981d522

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json&api_key=6634bd1387474f6c95b27a843981d522'; //A local page

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.response); //Outputs a DOMString by default
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}