/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById('run').addEventListener('click', () => {
        // Enlever le premier élément
        fruits.shift();
        // Enlever le dernier élément
        fruits.pop();
        // Ajouter "banane" au début du tableau
        fruits.unshift("banane");
        // Ajouter "kiwi" à la fin du tableau
        fruits.push("kiwi");
        // Afficher le tableau résultant dans la console
        console.log(fruits);
    });
})();

