
var jour1 = "Lundi";
var jour2 = "Mardi";
var jour3 = "Mercredi";
var jour4 = "Jeudi";
var jour5 = "vendredi";
var jour6 = "Samedi";
var jour7 = "Dimanche";
var erreur = "Erreur";
var jour = window.prompt("Nous somme le :");

if (jour == jour1) {
    alert(jour2); 
}
 else if (jour == jour2) {
    alert(jour3); 
    
}
 else if (jour == jour3) {
    alert(jour4); 
    
}
 else if (jour == jour4) {
    alert(jour5);
    
}
else if (jour == jour5) {
    alert(jour6); 
    
}
else if (jour == jour6) {
    alert(jour7); 
    
}
 else if (jour == jour7) {
    alert(jour1); 
    
}
else { 
    alert(erreur);
}



