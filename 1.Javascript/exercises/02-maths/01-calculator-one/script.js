/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Function to get the value of an input by its id and convert it to a number
    function getInputValue(id) {
        return parseFloat(document.getElementById(id).value);
    }

    // Function to display the result
    function displayResult(result) {
        alert(`Result: ${result}`);
    }

    document.getElementById("addition").addEventListener("click", () => {
        // Perform addition
        let num1 = getInputValue("op-one");
        let num2 = getInputValue("op-two");
        let result = num1 + num2;
        displayResult(result);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // Perform subtraction
        let num1 = getInputValue("op-one");
        let num2 = getInputValue("op-two");
        let result = num1 - num2;
        displayResult(result);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // Perform multiplication
        let num1 = getInputValue("op-one");
        let num2 = getInputValue("op-two");
        let result = num1 * num2;
        displayResult(result);
    });

    document.getElementById("division").addEventListener("click", () => {
        // Perform division
        let num1 = getInputValue("op-one");
        let num2 = getInputValue("op-two");
        if (num2 !== 0) {
            let result = num1 / num2;
            displayResult(result);
        } else {
            displayResult("Error: Division by zero");
        }
    });
})();

