    let ulTagList = document.querySelector('.asteroids');
    let king = document.querySelector('li');
    ulTagList.removeChild(king);

    planetData.forEach(function(elem) {
      if (elem.asteroid) {
        let newAsteroid = document.createElement('li');
        newAsteroid.className = elem.category;
        newAsteroid.textContent = elem.content;
        ulTagList.appendChild(newAsteroid);
      }
    });