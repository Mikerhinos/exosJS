function pythagore(a,b){
    // retourner la valeur du carré de a additionné au carré de b
    return Math.sqrt((a*=a)+(b*=b));
}
// récupération des variables a et b
var a = parseInt(prompt("Entrez la taille de a"));
var b = parseInt(prompt("Entrez la taille de b"));
// affichange dans la console du return de la fonction
console.log(pythagore(a,b));