// var chaineDeCaractere = "Concactenation";
// document.write("<h1>" + chaineDeCaractere + "</h1>")
// var stringCour = "cour de ";
// var Concactenation = chaineDeCaractere + stringCour;
// document.write("<h2>" + Concactenation + "</h2>");

// var annee = 2000;
// var futur = 24;
// var addition2Number = 2000 + 24;
// var stringAddition = "2000+24";
// document.write(stringAddition + "<br>");
// document.write(addition2Number);
// console.log(stringAddition);
// console.log(addition2Number);


// var prenom = "Ilhem";
// alert(prenom);

// var texte = window.prompt("question: Qui suis-je ? ", "Ilhem");

// document.write("<h1>" + voici mon text + "</h1>");

//type variable boolean : true ou false

// var unBooleanTrue = true;
// var unBooleanFalse = false;

// if (unBooleanTrue) {
//     document.write(prenom + "<br>")
// }
// if (4 === "4"){
// document.write("Ceuci est faux!");
// }

// var num1 = 50;
// var num2 = 5;
// var num3 = 10;
// var num4 = 12.5;
// var num5 = num1 / num3;

// if (num1 / num3 != num4) {
//     document.write(
//         "le resultat de la division" + num1 + "par" + num3 + "est" + num5);
// } else {
//     document.write("la valeur de la varible num4 est egale à" + num4);
// }



var internaute = 18;
alert(internaute);
var texte = window.prompt("Inserez votre age");
console.log(texte);
console.log(typeof texte);

texte = parseInt(texte);
console.log(texte);
console.log(typeof texte);

if (texte >= internaute) {
    document.write("Bienvenue");
} else {
    alert(" Vous êtes redirigés ver un site marchand");
    document.location.href = "http://www.darty.com"
}





