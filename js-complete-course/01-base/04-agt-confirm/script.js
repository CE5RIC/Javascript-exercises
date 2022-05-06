/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

})();


let age = prompt("How old are you?");
let town = prompt("Where do you live?");
let gender = prompt("Male or female?");


let reply = prompt("So, you are " + age + " years old, live in " + town + " and you are " + gender + "?");


if (reply === "yes" || reply === "YES" || reply === "Yes" ) {
    alert("Allright perfect!");
} else {
    let age = prompt("How old are you?");
    let town = prompt("Where do you live?");
    let gender = prompt("Male or female?");
    alert("Ok so that means you are " + age + " years old, live in " + town + " and you are " + gender)
}