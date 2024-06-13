/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {
        // Get the input values
        const day = document.getElementById('dob-day').value;
        const month = document.getElementById('dob-month').value - 1; // Month is zero-based in JavaScript Date object
        const year = document.getElementById('dob-year').value;

        // Create a new Date object for the birth date
        const birthDate = new Date(year, month, day);

        // Get the current date
        const today = new Date();

        // Calculate the age
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        
        // Adjust age if the current month and day are before the birth month and day
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        // Alert the age
        alert(`Votre âge est ${age} ans.`);
    });
})();
