
// 
// Une fonction qui prends un paramètre(une valeur numérique entre 0 et 10), sans valeur de retour, et elle affiche
// ne nombre des tours :
// C'est le tour de manège n°1
// C'est le tour de manège n°2
// C'est le tour de manège n°3
// C'est le tour de manège n°4
// C'est le tour de manège n°5


// function tournezManege() {
//   var nbTours = parseInt(window.prompt("Combien de tours à faire ?"));
//   while (isNaN(nbTours) || nbTours <= 0 || nbTours > 10) {
//     nbTours = parseInt(
//       window.prompt("Veuillez saisir une valeur valide entre 0 et 10.")
//     );
//   }
//   //   for (var i = 1; i <= nbTours; i++) {
//   //     document.write("C'est le tour de manège n°" + i + "<br>");
//   //   }
//   compteur = 1;
//   while (compteur <= nbTours) {
//     document.write(
//       "C'est le tour de manège avec la boucle 'while' n°" + compteur + "<br>"
//     );
//     compteur++;
//   }
// }

// tournezManege();

var nbTours = parseInt(window.prompt("Combien de tours à faire ?"));
while (isNaN(nbTours) || nbTours <= 0 || nbTours > 10) {
  nbTours = parseInt(
    window.prompt("Veuillez saisir une valeur valide entre 0 et 10.")
  );
}

tournezManege2(nbTours);
document.write("<br><br>");
nbTours = nbTours + 2;
tournezManege2(nbTours);

function tournezManege2(param) {
  compteur = 1;
  while (compteur <= param) {
    document.write(
      "C'est le tour de manège avec la boucle 'while' n°" + compteur + "<br>"
    );
    compteur++;
  }
}

// Une fonction sans paramètre, avec une valeur de retour, vous récupèrerez la valeur de retour et afficherez sur la page du navigateur
// ne nombre des tours :
// C'est le tour de manège n°1
// C'est le tour de manège n°2
// C'est le tour de manège n°3
// C'est le tour de manège n°4
// C'est le tour de manège n°5




