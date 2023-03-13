console.log("calcullatrice.js loaded") //question 2.1

function afficher(a){
    //question 2.2 on log dans la console le fait qu'on ait bien appuyé sur le bouton
    console.log("Vous avez choisi d'entrer un :", a);
    tempo = document.getElementById("affichage").value;
    value = tempo + a
    document.getElementById("affichage").value = value;
}

function effacer(){
    //on va aller clear la dernière opération rentrée en juste retirer le dernier caractere
    console.log("Ton C marche bien ")//test du bouton C
    tempo = document.getElementById("affichage").value.slice(0,-1)
    document.getElementById("affichage").value = tempo
}

function calculer(){
    equation = document.getElementById("affichage").value;//on recupere l'équation rentrée dans la calculatrice
    resultat = eval(equation)//on l'évalue
    affichage_res = equation + " = " + resultat//on réalise l'affiche eq = res
    document.getElementById("resultat").value = affichage_res //on affiche le resultat
    document.getElementById("affichage").value = "";//on clear l'affichage de l'équation en cours
}