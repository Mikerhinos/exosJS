function affiche(name, iter){
    // pour i de 1 à valeur de iter, afficher "bonjour" + le nom
    for (i=1; i<=iter; i++){
        console.log("Bonjour "+name);
    }
}
// Récupération du nom et quantité
var nom = prompt("Entrez votre nom");
var qte = parseInt(prompt("Entrez un nombre"));
// appel de la fonction
affiche(nom, qte);
