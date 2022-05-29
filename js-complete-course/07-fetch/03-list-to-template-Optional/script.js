/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here


})();



document.getElementById("run").addEventListener("click", function() {
    getXmen();

displayEachHero();
    
})



async function getXmen() {
    let data = await fetch('../../_shared/api.json');

    let response = await data.json();

console.log(response.heroes[0].alterEgo);  
console.log(response);




document.getElementById("target").innerHTML = response.heroes[0].name;
document.getElementById("target1").innerHTML = response.heroes[1].name;

document.getElementById("target2").innerHTML = response.heroes[2].name;

document.getElementById("target3").innerHTML = response.heroes[3].name;

document.getElementById("target4").innerHTML = response.heroes[4].name;


}

// Struggled with using the existing HTML to reproduce hero structure, created a couple of ID's to show heroes name


function displayEachHero() {


}




