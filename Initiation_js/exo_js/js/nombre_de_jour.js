// Nombre de jours du mois
// Enoncé
// 1- Créez un fichier "nb_jours.html" et un fichier "nb_jours.js"
// 2- Ecrivez un programme qui fait saisir le numéro d'un mois (nombre entre 1 et 12) puis affiche le nombre de jours de ce mois.

// On ne tiendra pas compte des années bissextiles.

// Les erreurs de saisie doivent être gérées : tant que l'utilisateur n'a pas insérer une valeur numérique entre 1 et 12, la boîte de dialogue doit être affichée.

// Algorithme :
// 	1- Analyser et interpréter l'énoncé en language javascript :
//     	a) fait saisir : ?
//         b) un numéro : ?
//         c) numéro d'un mois : ?
//         d) afficher : ?
//         e) pas d'années bissextiles : ?
//         f) gestion des erreurs : ?


var mois = parseInt(window.prompt("Insérez un nombre entre 1 et 12 ..."));

while (isNaN(mois) || mois < 1 || mois > 12) {
  mois = parseInt(
    window.prompt("Insérez une valeur numérique correcteun entre 1 et 12 ...")
  );
}

if (
  mois == 1 ||
  mois == 3 ||
  mois == 5 ||
  mois == 7 ||
  mois == 8 ||
  mois == 10 ||
  mois == 12
) {
  document.write("Le mois numéro " + mois + " fait 31 jours.");
} else if (mois == 2) {
  document.write("Le mois numéro " + mois + " fait 28 jours.");
} else {
  document.write("Le mois numéro " + mois + " fait 30 jours.");
}


// Une autre correction pour if:

// if (mois % 2 == 0 && mois != 2 && mois != 8) {
//   alert("Ce mois contient 30 jours");
// } else if (mois % 2 == 1 || mois == 8) {
//   alert("Ce mois contient 31 jours");
// } else {
//   alert("Ce mois contient 28 jours");
// }


