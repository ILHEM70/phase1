// var noteNegative = 0;
// var noteRecal = 10;
// var noteReçu = 12;
// var noteBien = 20;
// var moyenne = window.prompt("Inserrez votre moyenne !");
// moyenne = parseInt(moyenne);
// while (isNaN(moyenne) || moyenne > noteBien || moyenne < noteNegative) {
//     window.prompt("Veuillez saisir la valeur correctement entre 0 et 20 ! ");
// }
// if (!isNaN(moyenne) < 10) {
//     alert("Vous êtes recalez ! ");
// } else if (moyenne >= 10 && moyenne <= 12) {
//     alert("Vous êtes reçu ! ");
// }
// else if(moyenne > 12 && moyenne<= 20){
//     document.write("Reçu avec mention !");
// } else {
//     document.write("Note valid");
// }

// var string = window.prompt("Inserrez une chaine de caractère !");
// isNaN(string);
// if (isNaN(string)) {
//     alert("Ceuci est un string")
// } else {
//    alert ("Le type de votre valeur est numérique ! ");
// }

var maValeur = window.prompt(" Veuillez saisir une chaine de caractère ! ");
var resBoolean = isNaN(maValeur);
if (!resBoolean) {
  alert("Le type de votre valeur est numérique ! ");

} else {
    document.write("Merci ! ");
}



// Correction d'exercices :

// Afficher la valeur de retour d'un utilisateur quand le type de cette valeur est "string" sinon le message suivant : "Le type de votre valeur n'est pas un 'string' !" 


// var noteNegative = 0;
// var noteRecal = 10;
// var noteRecu = 12;
// var noteBien = 20;
// var moyenne = window.prompt("Veuillez saisir votre moyenne ... ");
// moyenne = parseInt(moyenne);

// moyenne = parseFloat(moyenne);
// moyenne = parseInt(moyenne);
// console.log(moyenne);
// console.log(typeof moyenne);
// moyenne = Number(moyenne);
// console.log(moyenne);
// console.log(typeof moyenne);

// while (isNaN(moyenne) || moyenne > noteBien || moyenne < noteNegative) {
//   moyenne = window.prompt("Veuillez saisir une valeur correct entre 0 et 20 !");
// }

// if (moyenne < noteRecal) {
//   alert("vous êtes recalé");
// } else if (moyenne >= noteRecal && moyenne < noteRecu) {
//   document.write("Vous êtes reçu !");
// } else if (moyenne >= noteRecu && moyenne <= noteBien) {
//   document.write("vous êtes reçu avec mention");
// }

// var maValeur = window.prompt("Saisissez une valeur ...");
// var resBoolean = isNaN(maValeur);

// si la valeur de resBoolean est false afficher le message : le type de votre valeur est numérique

// if(!isNaN(maValeur)){}
// if (!resBoolean) {
//   document.write("Le type de votre saissi est 'number'");
// }

// if (resBoolean) {
//     document.write("Le type de votre saissi est 'string'");
// }else {
//   document.write("Le type de votre saissi est 'number'");
// }
// document.write();
// alert();
// console.log();
// parseInt();
// parseFloat();
// window.prompt();
