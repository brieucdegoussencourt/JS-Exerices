/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const targetElement = document.getElementById("target");

    // Tableau des noms de jours en français
    const days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

    // Tableau des noms de mois en français
    const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

    // Obtient la date actuelle
    const now = new Date();

    // Récupère les composants de la date
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Formate les minutes avec un zéro devant si nécessaire
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    // Formate les heures et les minutes
    const time = `${hours}h${formattedMinutes}`;

    // Crée la chaîne de date complète
    const dateString = `${dayName} ${day} ${month} ${year}, ${time}`;

    // Change le contenu de l'élément avec l'ID "target"
    targetElement.innerHTML = dateString;
})();

