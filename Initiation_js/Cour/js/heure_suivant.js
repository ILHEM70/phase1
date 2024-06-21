var heure = parseInt(window.prompt("Inserez l'heure !"));
while (heure < 0 || heure > 24 || isNaN(heure)) {
  heure = parseInt(window.prompt("Inserez une heure correcte !"));
}
var minutes = parseInt(window.prompt("Inserez les minutes !"));
while (minutes < 0 || minutes > 60 || isnaNaN(minutes)) {
    minutes = parseInt(window.prompt("Inserez les minutes correctement !"));
}

var secondes = parseInt(window.prompt("Inserez les secondes !"));
while (secondes < 0 ||secondes> 60 || isnaNaN(secondes)) {
    secondes = parseInt(window.prompt("Inserez les secondes correctement !"));
    

}
secondes++;
if (secondes == 60) {
    secondes = 0;
    minutes++;
    if (minutes == 60) {
        minutes = 0;
        heure++;
        if (heure == 24) {
            heure = 0;
        }
    }
}
document.write("<h1>" + heure + "," + minutes + "," + secondes + "</h1>");








