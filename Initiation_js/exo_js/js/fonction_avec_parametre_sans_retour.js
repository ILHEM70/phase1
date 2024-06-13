var mois = parseInt(window.prompt("Insérez un nombre entre 1 et 12 ..."));

while (isNaN(mois) || mois < 1 || mois > 12) {
  mois = parseInt(
    window.prompt("Insérez une valeur numérique correcteun entre 1 et 12 ...")
  );
}

// execution de notre fameuse fonction "afficherNombreMois"
afficherNombreMois(mois);

// Déclaration d'une fonction avec paramètre et sans valeur de retour
function afficherNombreMois(nombreMois) {
  if (nombreMois % 2 == 0 && nombreMois != 2 && nombreMois != 8) {
    alert("Ce nombreMois contient 30 jours");
  } else if (nombreMois % 2 == 1 || nombreMois == 8) {
    alert("Ce nombreMois contient 31 jours");
  } else {
    alert("Ce nombreMois contient 28 jours");
  }
}
