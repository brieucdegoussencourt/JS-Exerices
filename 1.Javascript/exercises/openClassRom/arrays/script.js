// declaring variable, object & console log template literals

const ticket = {
    nomFilm : "Batman",
    prix : "10EUR",
    numeroSalle : 4
}

let name = "Brieuc";

console.log(`Bonjour ${name},votre film ${ticket.nomFilm} est en salle ${ticket.numeroSallenumero}`);

// working with arrays

////////////////////
// Copie par valeur
////////////////////
let variableSimple1 = 25
let variableSimple2 = variableSimple1

variableSimple2 = 30

// Le console.log va afficher 25, le fait d’avoir changé la valeur de variableSimple2 ne change rien pour variableSimple1
console.log("variableSimple1", variableSimple1)
console.log("variableSimple2", variableSimple2)

///////////////////////
// Copie par référence
///////////////////////
let variableComplexe1 = ['pomme', 'cerise']
variableComplexe1.push("poire")
let variableComplexe2 = variableComplexe1
variableComplexe2.pop("poire")
let variableComplexe3 = [...variableComplexe1];

variableComplexe2.push('peche')

// Le console.log va afficher pomme cerise ET peche. On a modifié la seconde variable, mais le contenu de la première a été changé aussi, parce que c’est le même contenu.
console.log('variableComplexe1', variableComplexe1)
console.log('variableComplexe2', variableComplexe2)
console.log('variableComplexe3', variableComplexe3)

//exercice array

const playlist = ["moby", "mozart", "britney"];
let totalMorceau = playlist.length;
console.log(totalMorceau);
playlist.push("aqua", "radiohead");
console.log(playlist);
totalMorceau = playlist.length;
console.log(totalMorceau);
playlist.pop()
console.log(playlist);

