// for (var i = 1; i <= 10; i += 2){
//     document.write("<p>Instruction exécuter:" + i + "</P>");  //declarer une variable, mettre une condition , faire une incémentation( ou décrémenter ou multuplier...), puis executer la boucle
// }
// for (var j = 1; j <= 10; j++){
//     document.write("<p>Inscription exécutée : " + j + "</p>");

// }
// for (var j; j <= 20; j += 2){
//     document.write("<p> Instruction exécutée" + j + "</p>");
// }
// for (var mesSous = 1000; mesSous == 2000; mesSous += 50) {}

// var tps = 0;
// for (var mesSous = 1000; mesSous <= 2000; mesSous += 50) {
//   document.write("Le mois suivant" + mesSous + "<br>");
// }
var ageMin = 3;
var ageMax = 120
var majoriteFr = 18;
var age = window.prompt("Inserrez votre âge : ");
age = parseInt("message");

while (age <= ageMin || ageMax <= 120) {
    age = parseInt(window.prompt("Insérez votre âge !"))
    
}
if (age >= majoriteFr) {
    document.write("Bienvenue sur mon site");

} else {
  document.write("Vous êtes mineur");
  window.location.href = "https://amazon.fr";

   
}


    

 //window.open("https://amazon.fr");
    // alaert();

// version 2 :
// var age = prompt("message")
// age = parseInt(age)
//var age = parseInt(window.prompt("message"))


