// for (var i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " est pair");
//   } else (
//       console.log(i + " est impair" )
//   )
// }
// console.log(10 % 2); // Affiche 0 car 10 = 5 * 2 + 0
// console.log(11 % 2); // Affiche 1 car 11 = 5 * 2 + 1
// console.log(18 % 3); // Affiche 0 car 18 = 3 * 6 + 0
// console.log(19 % 3); // Affiche 1 car 19 = 3 * 6 + 1
// console.log(20 % 3); // Affiche 2 car 20 = 3 * 6 + 2




var chiffre = parseInt(window.prompt("Choisir un nombre entier ! "));
while (isNaN(chiffre)) {
    chiffre = parseInt(window.prompt("Choisir un nombre entier !"));
}
var chiffreFinal = chiffre + 10;
