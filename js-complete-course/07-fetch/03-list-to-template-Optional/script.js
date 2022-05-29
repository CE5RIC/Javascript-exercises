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
    
})



async function getXmen() {
    let data = await fetch('../../_shared/api.json');

    let response = await data.json();

console.log(response.heroes[0].alterEgo);  


}




