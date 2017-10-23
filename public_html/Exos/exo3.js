function max(n1, n2){
    if (n1 > n2){ // si n1 > n2
        return n1;// retourner n2
    }
    else if (n1 == n2){//sinon si n1 = n2
        erreur = "Erreur les nombres doivent être différents";
        return erreur;//afficher une erreur pour avertir l'utilisateur que les nombres doivent être différents
    }
    else {
        return n2; // si n1 n'est pas plus grand ni égal à n2, alors n2 est forcément plus grand, le retourner
    }
}

var n1 = parseInt(prompt("Entrez le premier nombre"));// saisie des 2 valeurs
var n2 = parseInt(prompt("Entrez le deuxième nombre"));

console.log(max(n1,n2)); // appelle de la fonction