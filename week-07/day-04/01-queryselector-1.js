 //    1. store the element that says 'The King' in the 'king' variable.
 //    console.log it.

 //    2. store the element that contains the text 'The Conceited Man'
 //    in the 'conceited' variable.
 //    show the result in an 'alert' window.

 //    3. store 'The Businessman' and 'The Lamplighter'
 //    in the 'businessLamp' variable.
 //    console.log each of them.

 //    4. store 'The King' and 'The Conceited Man'
 //    in the 'conceitedKing' variable.
 //    alert them one by one.

 //    5. store 'The King', 'The Conceited Man' and 'The Lamplighter'
 //    in the 'noBusiness' variable.
 //    console.log each of them.


 //    6. store 'The Businessman' in the 'allBizniss' variable.
 //    show the result in an 'alert' window.


// 1

var king = document.querySelector('#b325').textContent;
console.log(king);

// 2

var conceited = document.querySelector('.b326').textContent;
alert(conceited);

// 3

var businessLamp = document.getElementsByClassName('big');
console.log(businessLamp[0].textContent, businessLamp[1].textContent);

var businessLamp2 = document.querySelectorAll('.big');
console.log(businessLamp[0].textContent, businessLamp[1].textContent);

// 4

var conceitedKing = document.querySelectorAll('section .asteroid');
window.alert(conceitedKing[0].textContent);
window.alert(conceitedKing[1].textContent);

// 5

var noBusiness = document.querySelectorAll('.asteroid');
console.log(noBusiness[0].textContent,noBusiness[1].textContent,noBusiness[2].textContent);

// 6

var allBizniss = document.querySelector('.big');
console.log(allBizniss.textContent);







