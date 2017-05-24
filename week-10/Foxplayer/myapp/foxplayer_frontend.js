'use strict';

var url = 'http://localhost:3000/';

var playlistsPanel = document.querySelector('.leftdown');
var tracksPanel = document.querySelector('.rightdown');

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        // console.log(xhr.response);
        let responseFromServer = JSON.parse(xhr.response);  // IMPORTANT
        callback(responseFromServer);
    }
  };
  xhr.open('GET', url, true);
  xhr.send('');
}

load(url + "playlists", function (data) {
  // console.log(data);
  // playlistsRender(data);
  data.forEach(function(elem) {
      console.log(elem);
      var playlistsDiv = document.createElement('div');
      playlistsDiv.className = 'playlist';
      playlistsDiv.textContent = elem.title;
      playlistsPanel.appendChild(playlistsDiv);
  });
});

load(url + "playlist-tracks", function (data) {
  console.log(data);
  data.forEach(function(elem) {
      console.log(elem);
      var tracksDiv = document.createElement('div');
      tracksDiv.className = 'tracks';
      tracksDiv.textContent = elem.title + '(' + elem.artist + ')';
      tracksPanel.appendChild(tracksDiv);
  });
});

