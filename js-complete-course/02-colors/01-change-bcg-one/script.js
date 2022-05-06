/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

})();

const red = document.getElementById("red");


red.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'red';
});



const green = document.getElementById("green");

green.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'green';
});


const yellow = document.getElementById("yellow");


yellow.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'yellow';
});



const blue = document.getElementById("blue");


blue.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'blue';
});