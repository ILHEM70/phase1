var prixHt = window.prompt("Inserez votre prix HT");

var tauxTva = 0.2;
var tva = prixHt * tauxTva;
var ttc = prixHt + tva;
console.log(ttc);
