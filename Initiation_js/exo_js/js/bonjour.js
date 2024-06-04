// j'ai declarer une variable "nom", j'ai executer la fontion prompt de JS
// la fontion prompt a deux roles principaux:
//  1- affichage d'une boite de dialogue avec un champ de formulaire.
// 2- retour de la valeur de saisie dans le champ de formulaire.
// j'ai affectée la valeur de retour de la fonction prompt a ma variable " nom "
//  Conclusion : grâce a la syntaxe suivante la valeur de la variable " nom ", sera la valeur saisie dans le champ de formulaire.

var nom = window.prompt(" entrer votre nom ");
var prenom = window.prompt(" entrer votre prenom ");

alert(" bienvenue " + nom + " " + prenom);

var login = window.prompt("Veuillez saisir votre nom");
var nom = window.prompt("Veuillez saisir votre prénom");
alert("Bonjour " + login + " " + nom);

// une appliquation dynamique est utilisé avec les variables 
// une aplication statique est utilisé avec les endure ( chaine de caractaire)