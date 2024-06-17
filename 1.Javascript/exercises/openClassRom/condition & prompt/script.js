//working with prompts & conditions

const listeMots =["patate", "pomme", "banane"];
let score = 0;

let firstWord = prompt("Quel est le premier mot de la liste?");

if (firstWord === listeMots[0]){
    score ++;
} else {
    alert("try again")
    prompt("Quel est le premier mot de la liste?:")
};
console.log(score);

let secondWord = prompt("Quel est le deuxième mot de la liste?");

if (secondWord === listeMots[1]){
    score ++;
} else {
    alert("try again")
    prompt("Quel est le deuxième mot de la liste?:")
};
console.log(score);

let thirdWord = prompt("Quel est le troisième mot de la liste?");

if (thirdWord === listeMots[2]){
    score ++;
} else {
    alert("try again")
    prompt("Quel est le deuxième mot de la liste?:")
};
console.log(score);