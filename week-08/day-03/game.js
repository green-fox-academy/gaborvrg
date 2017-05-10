'use strict'

var createCandiesButton = document.querySelector('.create-candies');
var candie = document.querySelector('.candies');
var buyLollypopsButton = document.querySelector('.buy-lollypops');
var candyMachineButton = document.querySelector('.candy-machine');
var addLollypops = document.querySelector('.lollypops');
var candiesNumber = 0;
var lollypopsNumber = 3;

function addCandie() {
    candiesNumber += 1;
    candie.textContent = candiesNumber;
    console.log(candiesNumber);

}

function addLollypop() {
    addLollypops.textContent += '🍭'; 
    lollypopsNumber += 1;
    if (lollypopsNumber % 5 === 0 ) {
        for(let i=0; i<100; i++) {
            window.clearInterval(i);
        }
        setInterval(addCandie, 1000);
    } 
}

function buyingLollypops() {
    if (candiesNumber >=  5) {
        candiesNumber -= 5;
        candie.textContent = candiesNumber;
        addLollypop();
        console.log(candiesNumber);
    }
}



createCandiesButton.addEventListener('click', function(e) {
    addCandie();
});

buyLollypopsButton.addEventListener('click', function(e) {
    buyingLollypops();
});

