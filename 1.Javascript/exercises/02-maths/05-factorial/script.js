/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // Récupérer la valeur de l'input
        const number = parseInt(document.getElementById("number").value);

        // Fonction pour calculer la factorielle
        function factorial(n) {
            if (n === 0 || n === 1) {
                return 1;
            }
            return n * factorial(n - 1);
        }

        // Vérifier si le nombre est un entier positif
        if (!isNaN(number) && number >= 0) {
            // Calculer la factorielle du nombre
            const result = factorial(number);

            // Afficher le résultat dans une alerte
            alert("La factorielle de " + number + " est : " + result);
        } else {
            alert("Veuillez entrer un nombre entier positif.");
        }
    });
})();
