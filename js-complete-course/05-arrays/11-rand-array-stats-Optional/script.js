/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById("run").addEventListener("click", function() {

     const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


     let sum = 0;

     for (let i = 0; i < numbersArray.length; i++) {
         sum += numbersArray[i];
     }


     let average = sum / 10;

     console.log(sum);

     document.getElementById("n-1").innerHTML = numbersArray[0];
     document.getElementById("n-2").innerHTML = numbersArray[1];
     document.getElementById("n-3").innerHTML = numbersArray[2];
     document.getElementById("n-4").innerHTML = numbersArray[3];
     document.getElementById("n-5").innerHTML = numbersArray[4];
     document.getElementById("n-6").innerHTML = numbersArray[5];
     document.getElementById("n-7").innerHTML = numbersArray[6];
     document.getElementById("n-8").innerHTML = numbersArray[7];
     document.getElementById("n-9").innerHTML = numbersArray[8];
     document.getElementById("n-10").innerHTML = numbersArray[9];


document.getElementById("min").innerHTML = numbersArray[0];
document.getElementById("max").innerHTML = numbersArray[9];
document.getElementById("sum").innerHTML = sum;
document.getElementById("average").innerHTML = average;

    })

  

})();
