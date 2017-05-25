// API Key for the Article Search API: 6634bd1387474f6c95b27a843981d522

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon+landing+by+Apollo+11&api-key=6634bd1387474f6c95b27a843981d522'; 


function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        var responseFromServer = JSON.parse(xhr.response);  // IMPORTANT
        // console.log(responseFromServer.response.docs);
        callback(responseFromServer.response.docs);
    }
  };

  xhr.open('GET', url, true);
  xhr.send('');
}

load(url, function(datas) {
    var newDiv = document.createElement('div'); 
    var newDl = document.createElement('dl');
    document.querySelector('body').appendChild(newDiv).className = 'content';
    document.querySelector('.content').appendChild(newDl).className = 'section';

    datas.forEach(function(elem, idx) {
        console.log(elem);
        // console.log(elem.snippet);
        // console.log(elem.pub_date);
        var newDt = document.createElement('dt');
        newDt.className = 'header' + (idx+1);
        newDt.textContent = elem.headline.main;
        document.querySelector('.section').appendChild(newDt);

        var newDd = document.createElement('dd');
        newDd.className = 'snippet';
        newDd.textContent = elem.snippet;
        document.querySelector('.section').appendChild(newDd);

        var newDd2 = document.createElement('dd');
        newDd2.className = 'pub_date';
        newDd2.textContent = elem.pub_date;
        document.querySelector('.section').appendChild(newDd2);

        var a = document.createElement('a');
        a.textContent = 'Permalink';
        a.href = elem.web_url;
        document.querySelector('.section').appendChild(a);

    });
});




