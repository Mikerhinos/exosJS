function affiche(tableau,chaine){
    var taille = tableau.length; // récupération de la longueur du tableau
    var concat = ""; // initialisation de la variable dans laquelle nous allons concaténer les valeurs du tableau et la chaine, les guillemets assurent que la variable sera une string
    for (i=0; i<taille; i++){ // pour i de 0 à la fin du tableau
        if (i == taille-1){ // si nous sommes à la dernière valeur du tableau, concaténer uniquement la valeur
            concat += tableau[i];
        }
        else {
            concat += tableau[i]+chaine; // sinon concaténer le caractère chaine après chaque valeur
        }
    }
    console.log(concat); // sortie de boucle, output de concat dans la console
}

var tableau = [8,2,3,4,5]; // valeurs du tableau entrées en dur
var chaine = String(prompt("Entrez un caractère de séparation")); // demande de saisie de la chaîne de séparation, convertie en string au cas où l'utilisateur saisirait des caractères numériques ou spéciaux

affiche(tableau,chaine); // lancement de la fonction