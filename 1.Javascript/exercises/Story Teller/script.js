/* becode/javascript/challenge
 *
 * Créez un "Story Teller".
 * Capturez des phrases venant de l'utilisateur. Stockez les. Affichez dans l'ordre que vous voulez les réponses de l'utilisateur afin que ça donne une histoire complètement loufoque !
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// your code here

(() => {
    function getUserStory() {
        let intro, declencheur,chute,story;
        
        do {
            // Ask the user for their story
            intro = prompt("Chois le nom de tom héros, son âge et son sexe, et raconte nous d'où il vient");
            declencheur = prompt("Imagine un évènement fou qui pourrait arriver à ton héros");
            chute = prompt("Comment imagines-tu la vie de ton héros dans 10 ans?");
            
            // Combine the information
            story = `Voici ton histoire :\n${intro} \n${declencheur} \n${chute}`;

            // Display the story
            alert(story);
            
            // Prompt the user to repeat or end the story creation
        } while (confirm("Veux-tu créer une autre histoire ?"));
    } 
    // Call the function to start the process
    getUserStory();
    
})();

