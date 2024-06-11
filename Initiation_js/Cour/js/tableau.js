// 1)declarer une variable : 'fruit'
// 2)Afficher à cette variable un élémentde type "array" : ['Apple', 'Banana', ];
// 3)Déclarer une variable 'taille' en lui affectant la taille du tableau (array) à l'aide de la syntaxe suivante : fruit.length
// 4)A partir du terminal de votre navigateur, affichez :
      // a) la taille du tableau
      // b) le contenue du premier élémentà l'aide de la syntaxe suivante : fruit[0]
// 5- Afficher le contenu du dernier élément du tableau
// grâce à la taille du tableau :
// taille : 3, je cherche indice 2 à partir de la taille :
// fruits[2]
      // 6- Déclarer une variable "couleurs" en lui affectant un tableau contenant 3 éléments (choisir 3 différentes couleurs)
// 7- Afficher le contenu du dernier élément du tableau
// grâce à la taille de ce tableau à partir de la console
// 8- Afficher le contenu des éléments du tableau en utilisant la boucle 'for' boucle
     


// var fruits;
// fruits = ["Apple", "Banana", "orange"];
// var tailleTab = fruits.length;
// console.log(tailleTab);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[tailleTab - 1]);



// var couleurs;
// couleurs = ["bleu", "vert", "jaune","orange","rouge"];
// var tailleTab = couleurs.length;
// console.log(couleurs[2]);
// console.log(couleurs[tailleTab - 1]);

// for (var i = 0; i < couleurs.length; i++){
//     document.write(couleurs[i]+ " <br>")
// }
// for (var i = couleurs.length; i < 0; i--){
//       console.log("ok");
// }
// for (var i = 4; i >= 0; --i ) {
//       console.log(couleurs[i]);
// }


// var num;
// num = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
// for (var n = 10; n >= 0 ; --n){
//       document.write(n + "<br>");
// }



fruits = ["Apple", "Banana", ];
//Ajouter a la fin du tableau
var newLength = fruits.push("orange");//
console.log(fruits);
console.log(newLength);

var last = fruits.pop("Apple");
console.log(last);
//Retirer des élément à la fin du tableau, il ne retourne pas la taille de tableau 


//Ajouter à la fin du tableau
// ["Apple", "Banana", "Orange"]

//Supprimer le dernier élément du tableau
// var last = fruits.pop("Apple");
//    console.log(fruits); // supprime Orange (à la fin)
// ["Apple", "Banana"];

//Supprimer le premier élément du tableau
var first = fruits.shift("Apple");
console.log(fruits);

// supprime Apple (au début)et retourne la valeur de l'élément supprimer 
// ["Banana"];

//Ajouter au début du tableau
var newLength = fruits.unshift("Strawberry");
console.log(fruits);

// ajoute au début
// ["Strawberry", "Banana"];






// var couleurs = ["rouge", "jaune", "bleu", "vert", "orange"];
// for (var i = couleurs.lenght; i >= 0; --i) {
//   console.log(couleurs[i]);
// }

// 1- A partir d'une boucle "for", afficher les chiffres de 10 à 0 sur la page du navigateur
// 2- Les chiffres doivent aller à la ligne à chaque exécution de la boucle "utilisation de la bvalise <br>"

// for (var i = 10; i >= 0; i--) {
//   document.write(i + "<br>");
// }


// fruits = ["Apple", "Banana"];
// //Ajouter à la fin du tableau
// var newLength = fruits.push("Orange");

// console.log(fruits);
// console.log(newLength);



// /*********4 fonctions pour manipuler un tableau indexé *********/
// fruits = ["Apple", "Banana"];
// //Ajouter à la fin du tableau

// //Ajouter à la fin du tableau
// // la fonction push exécute deux actions :
// // 1- Ajouter un élément à la fin d'un tableau
// // 2- Retourner la taille mise à jour du tableau. Dans cette exemple la valeur de "newLength" est égale à 3
// var newLength = fruits.push("Orange");
// // ["Apple", "Banana", "Orange"]
// console.log(fruits);
// console.log(newLength);

// //Supprimer le dernier élément du tableau
// // la fonction pop exécute deux actions :
// // 1- Supprimer un élément à la fin d'un tableau
// // 2- Retourner la valeur supprimée dans le tableau. Dans cette exemple la valeur de la variable "last" est égale à "orange"
// var last = fruits.pop(); // supprime Orange (à la fin)
// // ["Apple", "Banana"];
// console.log(fruits);
// console.log(last);

// //Supprimer le premier élément du tableau
// // La fonction "shift" exécute deux actions :
// // 1- Supprimer le premier élément du tableau
// // 2- Retourner la valeur de l'élément supprimé
// var first = fruits.shift(); // supprime Apple (au début)


// console.log(fruits);
// // ["Banana"];
// console.log(first);
// // ["Apple"];

// //Ajouter au début du tableau
// // La fonction "unshift" exécute deux actions :

// // 1- Ajouter un élément au début du tableau
// // 2- Retourner la valeur de la taille du tableau
// var newLength = fruits.unshift("Strawberry"); // ajoute au début


// console.log(fruits);
// // ["Strawberry", "Banana"];
// console.log(newLength);
// //2










