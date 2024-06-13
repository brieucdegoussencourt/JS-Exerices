/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {
        // Générer un tableau de 10 nombres aléatoires entre 1 et 100
        const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
        
        // Afficher les nombres dans les balises prévues
        numbers.forEach((number, index) => {
            document.getElementById(`n-${index + 1}`).textContent = number;
        });

        // Calculer les statistiques
        const min = Math.min(...numbers);
        const max = Math.max(...numbers);
        const sum = numbers.reduce((acc, number) => acc + number, 0);
        const average = sum / numbers.length;

        // Afficher les statistiques dans les balises prévues
        document.getElementById('min').textContent = min;
        document.getElementById('max').textContent = max;
        document.getElementById('sum').textContent = sum;
        document.getElementById('average').textContent = average.toFixed(2); // Afficher la moyenne avec 2 décimales
    });
})();
