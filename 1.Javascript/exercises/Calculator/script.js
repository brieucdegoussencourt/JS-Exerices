// Récupérer la valeur des boutons class number
let buttons = document.querySelectorAll('.number');


// Récupérer les boutons class actions
let addition = document.getElementById("addition");
let substraction = document.getElementById("substraction");
let division = document.getElementById("division");
let multiplication = document.getElementById("multiplication");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");

// Variable pour stocker les valeurs concaténées lorsque clickées
let clickedValues = "";

// Fonction pour mettre à jour l'affichage avec les valeurs concaténées des boutons
function updateDisplay(event) {
    clickedValues += event.target.innerHTML;  // Ajouter la valeur du bouton cliqué
    let display = document.querySelector(".display p");
    display.innerHTML = clickedValues;  // Mettre à jour l'affichage avec les valeurs concaténées
    console.log(clickedValues)
}

// Gestion de l'événement click sur les boutons class number
buttons.forEach(button => {
    button.addEventListener("click", updateDisplay);
});

// Gestion de l'événement click sur les boutons class action
addition.addEventListener("click", updateDisplay);
substraction.addEventListener("click", updateDisplay);
division.addEventListener("click", updateDisplay);
multiplication.addEventListener("click", updateDisplay);


// Fonction pour obtenir le résultat
function computeResult(str) {
    return Function("return " + str)();
}

function displayResult() {
    try {
        let result = computeResult(clickedValues);
        let display = document.querySelector(".display p");
        display.innerHTML = result;  // Afficher le résultat
        clickedValues = result.toString();  // Stocker le résultat pour les calculs futurs
    } catch (e) {
        let display = document.querySelector(".display p");
        display.innerHTML = "Error";  // Afficher une erreur en cas d'expression invalide
        clickedValues = "";  // Réinitialiser les valeurs cliquées
    }
}

// Fonction pour réinitialiser l'affichage
function clearDisplay() {
    clickedValues = "";
    let display = document.querySelector(".display p");
    display.innerHTML = "";
}

// Obtenir le résultat
equal.addEventListener("click", displayResult);

// Réinitialiser l'affichage
clear.addEventListener("click", clearDisplay);

