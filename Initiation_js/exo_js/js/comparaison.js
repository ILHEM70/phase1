// 1- Afficher deux champs de formulaires à l'aide de la fonction prompt
// 2- Convertir les valeurs de retour des fonctions prompt aux valeurs numérique, grâce à la fonction "parseInt"
// var couleurs = ["rouge", "jaune", "bleu", "vert", "orange"];


var num0 = "18";
var num1 = 16;
num0 = parseInt(num0);
// Le type de la variable "num1" est "string"
var num1 = window.prompt("Insérrez une chaine de carathèrenumérique");
//Pour appliquer les opérations arythmétique à une variable,il faut absolumentconvertirle type de cette variable a une valeur unmérique. grâce à la fonction (parseIntou) bien la fonction (parseFloat).
num1 = parseInt(num1)
console.log("le type de la valeur de retour ");
num0 = parseInt(num0);
// Le type de la variable "num1" est "string"
var num1 = window.prompt("Insérez la première valeur numérique !");
console.log(
  "Le type de la valeur de retour de la fonction 'prompt' : " + typeof num1
);
// Pour appliquer les opérations arythmétique à une variable, il faut absolument convertir le type de cette variable à un valeur numérique, grâce à la fonction parseInt ou bien la fonction "parseFloat"
num1 = parseInt(num1);
console.log(
  "Le type de la valeur de retour de la fonction 'parseInt' : " + typeof num1
);
// var
var num2 = window.prompt("Insérez la deuxième valeur numérique !");
num2 = parseInt(num2);
console.log();

if (num1 < num2) {
  document.write(
    "La valeur du premier chiffre : " +
      num1 +
      " est inférieur de la valeur du deuxième chiffre : " +
      num2
  );
} else if (num1 > num2) {
  document.write(
    "La valeur du premier chiffre : " +
      num1 +
      " est supérieur de la valeur du deuxième chiffre : " +
      num2
  );
} else if (num1 == num2) {
  document.write(
    "La valeur du premier chiffre : " +
      num1 +
      " est égale de la valeur du deuxième chiffre : " +
      num2
  );
}
// la fonction"isNaN prend un paramètre (ici c'est num1)et le vérifie si le type de la variable "number"ou "string". Aprés la vérification elle retoune un boolean false or true
//Si le type de paramètre est "string" la fonction retourne true, sinon elle retourne false
var chaineDeCaracthere = isNaN(num1);
console.log(chaineDeCaracthere);
