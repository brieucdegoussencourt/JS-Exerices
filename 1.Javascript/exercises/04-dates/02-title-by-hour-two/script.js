/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const targetElement = document.getElementById("target");
    const currentHour = new Date().getHours();

    if (currentHour < 17.5) {
        targetElement.innerHTML = "Bonjour";
    } else {
        targetElement.innerHTML = "Bonsoir";
    }
})();
