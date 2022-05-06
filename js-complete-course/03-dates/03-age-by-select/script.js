/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

})();


const btnRun = document.getElementById('run').addEventListener('click',calculateAge);


//Let's write the function to be ran when the button is clicked
function calculateAge(){
    //Let's get the values the user selected
    const dobDay = document.getElementById('dob-day').value;
    const dobMonth = document.getElementById('dob-month').value;
    const dobYear = document.getElementById('dob-year').value;
    //Let's get the current date
    const currentDate = new Date();
    //Let's create a date that holds the user's date of birth
    const dobDate = new Date(dobYear,dobMonth,dobDay);
    //Let's use the dates to calculate the user's age
    const ageYears = currentDate.getFullYear() - dobDate.getFullYear();
    console.log(currentDate.getFullYear())
    console.log(dobDate.getFullYear())
    //The days are in an array from 0-6 and months in an array from 0-11
    //So we add one to get a correct value for us mortals
    const ageMonths = currentDate.getMonth() - dobDate.getMonth() +1;
    const ageDays = currentDate.getDay() - dobDate.getMonth() +1;
    //Let's tell the user how old he is, to show it on the page I added a 'target' ID to the field that says Calculate the age
    document.getElementById('target').innerHTML = "You are: " + ageYears + " years, " + ageMonths + " months,and " + ageDays + " days young, still looking good :)";
}


