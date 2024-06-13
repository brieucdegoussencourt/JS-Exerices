/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
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

    // Function to perform the operation
    const performOperation = operation => {
        const num1 = getInputValue("op-one");
        const num2 = getInputValue("op-two");
        let result;

        switch (operation) {
            case "addition":
                result = num1 + num2;
                break;
            case "substraction":
                result = num1 - num2;
                break;
            case "multiplication":
                result = num1 * num2;
                break;
            case "division":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Error: Division by zero";
                }
                break;
            default:
                result = "Unknown operation";
        }

        // Display the result
        alert(`Result: ${result}`);
    };

    // Add event listeners to each button
    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => performOperation($btn.id),
        ),
    );
})();


