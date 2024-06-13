/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function getUserInfo() {
        let age, gender, city, confirmResponse;
        
        do {
            // Ask the user for their age, gender, and city
            age = prompt("Quel est ton âge ?");
            gender = prompt("Quel est ton sexe ?");
            city = prompt("Quelle est ta ville ?");
            
            // Display the information and ask for confirmation
            confirmResponse = confirm(`Voici tes informations :\nÂge : ${age}\nSexe : ${gender}\nVille : ${city}\nEst-ce correct ?`);
            
            // If the user does not confirm, the loop will repeat
        } while (!confirmResponse);
        
        // If the user confirms, display a thank you message
        alert("Merci pour tes informations !");
    }
    
    // Call the function to start the process
    getUserInfo();
    
  
})();
