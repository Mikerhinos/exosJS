function somme(tab){
    var taille = tab.length;
    var sommeC = 0;
    for (i=0; i<taille; i++){
        sommeC += tab[i];
    }
    return sommeC;
}

tab = [1,2,3,4,5];
console.log(somme(tab));