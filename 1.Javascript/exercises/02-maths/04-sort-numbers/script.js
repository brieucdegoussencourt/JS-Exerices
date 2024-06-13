/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // Get the value of the input
        const numbersInput = document.getElementById("numbers").value;

        // Split the input string into an array of numbers
        const numbersArray = numbersInput.split(',').map(Number);

        // Sort the array in ascending order
        const sortedNumbers = numbersArray.sort((a, b) => a - b);

        // Display the sorted numbers in an alert
        alert("Les nombres classés du plus petit au plus grand sont : " + sortedNumbers.join(", "));
    });
})();

