/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    

    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

    document.getElementById("run").addEventListener("click", () => {
        const bird = getRandomElement(birds);
        const adjectivesArray = Array.from(adjectives); // Convert Set to Array
        let adjective = getRandomElement(adjectivesArray);

        if (bird.fem) {
            adjective += "e";
        }

        const article = bird.fem ? "La" : "Le";
        const birdName = `${article} ${bird.name} ${adjective}`;

        document.getElementById("target").textContent = birdName;
    });
})();
