var chiffre = 0 //Valeur initialepermettant d'entrer dans la boucle
var chiffre = parseInt(window.prompt("Choisir un nombre entier ! "));
while (isNaN(chiffre) || chiffre < 50 || chiffre > 100) {
    chiffre = Number(prompt("Choisir un nombre entier !"));

    document.write(chiffre);





}






// Tournez manège

// 1- créer un fichier "saisie.html" à la racine de votre dossier "exo_js" dans le répértoire 'initiation_js' et un fichier 'saisie.js' dans le répertoire js


// Ecrivez un programme qui invite l'utilisateur à saisir un nombre jusqu'à ce que ce nombre soit supérieur à 50 ET inférieur à 100.

// Réfléchissez bien à la condition de votre boucle : quel est l'inverse de "compris entre 50 et 100" ?
