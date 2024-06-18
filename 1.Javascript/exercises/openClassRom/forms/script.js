let baliseCouleur = document.querySelectorAll('input[name="couleur"]')
let couleur = ""

// Determine the initially checked color

for (let i = 0; i < baliseCouleur.length; i++) {
    if (baliseCouleur[i].checked) {
        couleur = baliseCouleur[i].value
        break
    }
}

// Add event listener to each input element
baliseCouleur.forEach(element => {
    element.addEventListener("change", () => {
        console.log(element.value);
    });
});

console.log(couleur.checked);