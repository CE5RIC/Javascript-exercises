/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    document.getElementById("addition").addEventListener("click", function() {
        let choice1 = document.getElementById("op-one").value;
        let choice2 = document.getElementById("op-two").value;
        choice1 = parseInt(choice1);
        choice2 = parseInt(choice2);
        const result = choice1 + choice2;
        document.getElementById('target').innerHTML = result;
        

    });

    document.getElementById("substraction").addEventListener("click", function() {
        let choice1 = document.getElementById("op-one").value;
        let choice2 = document.getElementById("op-two").value;
        choice1 = parseInt(choice1);
        choice2 = parseInt(choice2);
        const result = choice1 - choice2;
        document.getElementById('target').innerHTML = result;
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let choice1 = document.getElementById("op-one").value;
        let choice2 = document.getElementById("op-two").value;
        choice1 = parseInt(choice1);
        choice2 = parseInt(choice2);
        const result = choice1 * choice2;
        document.getElementById('target').innerHTML = result;
    });

    document.getElementById("division").addEventListener("click", function() {
        let choice1 = document.getElementById("op-one").value;
        let choice2 = document.getElementById("op-two").value;
        choice1 = parseInt(choice1);
        choice2 = parseInt(choice2);
        const result = choice1 / choice2;
        document.getElementById('target').innerHTML = result;
    });

})();
