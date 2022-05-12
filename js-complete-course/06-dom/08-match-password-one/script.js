/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        const password = document.getElementById('pass-one');
        const confirm = document.getElementById('pass-two');
    
        if(password != confirm) {
            password.style.border = ".2rem solid red";
            confirm.style.border = ".2rem solid red";
        } else {
            console.log("Wrong password");
        }
    })

})();












    