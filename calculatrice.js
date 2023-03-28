console.log("calculatrice.js loaded") //question 2.1

// function afficher(a){
//     //question 2.2 on log dans la console le fait qu'on ait bien appuyé sur le bouton
//     //console.log("Vous avez choisi d'entrer un :", a);
//     tempo = document.getElementById("affichage").value;
//     value = tempo + a
//     document.getElementById("affichage").value = value;
// }

// function effacer(){
//     //on va aller clear la dernière opération rentrée en juste retirer le dernier caractere
//     //console.log("Ton C marche bien ")//test du bouton C
//     tempo = document.getElementById("affichage").value.slice(0,-1)
//     document.getElementById("affichage").value = tempo
// }

// function calculer(){
//     equation = document.getElementById("affichage").value;//on recupere l'équation rentrée dans la calculatrice
//     resultat = eval(equation)//on l'évalue
//     affichage_res = equation + " = " + resultat//on réalise l'affiche eq = res
//     document.getElementById("resultat").value = affichage_res //on affiche le resultat
//     document.getElementById("affichage").value = "";//on clear l'affichage de l'équation en cours
// }


//PARTIE 3 LA CLASSE :
class BaseCalculator{
    static instance_ = null;
    static getInstance() {
        if (this.intance_ == null) {
        BaseCalculator.instance_ = new BaseCalculator();
        }
        return BaseCalculator.instance_;
     }
   
   constructor() {
      if (BaseCalculator.intance_ != null) {
      // Error, on ne peut pas creer d'instance supplementaire
        throw new Error("New instance cannot be created");
      }
      //on initialise les datas
      this.value = "";
      this.liste_eq = [];
   }

    //methods
    afficher(a){
        //question 2.2 on log dans la console le fait qu'on ait bien appuyé sur le bouton
        this.value += a;
        document.getElementById("affichage").value = this.value;
    }

    effacer(){
        //on va aller clear la dernière opération rentrée en juste retirer le dernier caractere
        let tempo = this.value.slice(0,-1);
        this.value = tempo;
        document.getElementById("affichage").value = this.value;
    }

    //PARTIE 4 RETOUR :

    retour(){
        let last_equation = this.liste_eq.pop();
        if(last_equation != undefined){//si la liste n'était pas vide
            console.log("retour // valeur de la derniere eq : ", last_equation);
            this.value = last_equation;
            document.getElementById("affichage").value = this.value;
        }else{
            console.log("Historique Vide");
        }
    }

    calculer(){
        try{ 
            let resultat//on évalue l'équation stocké dans le this.value
            let affichage_res = this.value + " = " + eval(this.value);
            document.getElementById("resultat").value = affichage_res ;
            this.liste_eq.push(this.value)//on push dans notre liste la derniere equation faite
            this.value = "";//on reset le value de notre objet
            document.getElementById("affichage").value = this.value;//on clear l'affichage de l'équation en cours
        }
        catch(Error){
            //si il y a une erreur dans l'équation on ne l'enregistre pas dans notre liste_eq
            console.log("Erreur dans votre equation")
        }
    }
}

let Calculatrice = new BaseCalculator();