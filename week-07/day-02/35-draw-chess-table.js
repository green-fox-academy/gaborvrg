// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//

var lineCount = 8

// old version

// for (var i = 1; i < lineCount + 1; i++) {
//     if (i % 2 === 1) {
//         console.log('% % % %');
//     } else {
//         console.log(' % % % %');
//     }
// }

// newer version

for (var i = 0; i < lineCount; i++) {
    // console.log(i+1);
    for (var j = 0; j < lineCount; j++) {       
    }
    if (i % 2 === 0) {
        console.log('% '.repeat(j));
    } else {
        console.log(' %'.repeat(j));
    }
}






