// Déclaration des tableaux contenant les listes mots ou phrase
const listeMots = ['Cachalot', 'Pétunia', 'Serviette'];
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];

function afficherResultat(score, nbMotsProposes) {
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}

function choisirPhraseOuMots() {
    let choix = prompt("mot ou phrase");
    while (choix !== "mot" && choix !== "phrase") {
        choix = prompt("quel est votre choix: mot ou phrase?")
    }
    return choix
}

function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            score++
        }
    }
    return score
}



function playGAme() {
    let choix = choisirPhraseOuMots()
    let nbMotsProposes = 0
    let score = 0

    if (choix === "mot") {
        lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }
    afficherResultat(score, nbMotsProposes)
}

playGAme()