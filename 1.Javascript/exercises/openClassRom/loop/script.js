//working with loops for & while

for (let compteur = 0; compteur < 3; compteur = compteur + 1) {
    console.log(compteur)
}

// même fonction synthétisée par convention
for (let i = 0; i < 3; i++) {
    console.log(i)
}

let i = 0
while (i < 3) {
    console.log(i)
    i++
}

// Déclaration des tableaux contenant les listes mots ou phrase
const listeMots = ['Cachalot', 'Pétunia', 'Serviette'];
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];

let score = 0

// Déclaration de la variable contenant le choix de l'utilisateur

let choix = prompt("mot ou phrase");

// boucle tant que l'utlisateur n'a pas chosi

while (choix !== "mot" && choix !== "phrase"){
    choix =prompt("quel est votre choix: mot ou phrase?")
}

if (choix ==="mot"){
        // On parcourt le tableau des mots
        for (let i = 0; i < listeMots.length; i++) {
            let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
            if (motUtilisateur === listeMots[i]) {
                // Si le mot saisi par l'utilisateur est correct, on incrémente le score
                score++
            }
        }
        console.log("Votre score est de " + score + " sur " + listeMots.length)

} else {
        // On parcourt le tableau des mots
        for (let i = 0; i < listePhrases.length; i++) {
            let phraseUtilisateur = prompt("Entrez le mot : " + listeMots[i])
            if (phraseUtilisateur === listePhrases[i]) {
                // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
                score++
            }
        }
        console.log("Votre score est de " + score + " sur " + listePhrases.length)

}