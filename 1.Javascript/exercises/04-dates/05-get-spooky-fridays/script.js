/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {
        // Get the input year
        const year = document.getElementById('year').value;
        
        // Array of month names in French
        const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        
        // Array to hold months with Friday the 13th
        let fridays13 = [];
        
        // Check each month for a Friday the 13th
        for (let month = 0; month < 12; month++) {
            let date = new Date(year, month, 13);
            if (date.getDay() === 5) { // 5 represents Friday
                fridays13.push(months[month]);
            }
        }
        
        // Display the result
        let result = `Les mois contenant un vendredi 13 en ${year} sont : ${fridays13.join(", ")}.`;
        alert(result);
    });
})();

