function test_age(){
    let age = prompt("Quelle est votre age ? ");
    if (age<18){
        document.write("Attention Accès refusé, Vous avez annuler ou vous êtes mineur");
        document.body.style.backgroundColor = "red";
    }
    else {
        document.write("Ok, vous êtes majeur");
        document.body.style.backgroundColor = "green";
    }   
}
function affichage(){
    let prenom = prompt("saisir votre prénom")
    let nom = prompt("saisir votre nom")
    document.write('<div style="border:2px solid blue; width:400px; height:300px; margin:auto; padding:auto; text-align:center; font-size:2em">');
    document.write("Bonjour " + nom + " " + prenom);
    document.write('</div>');
}

function test_couleur(){
    let couleur = prompt("Donner une couleur")
    if (couleur == "rouge") {
        document.body.style.backgroundColor = "red"
    }
    else if (couleur == "bleu") {
        document.body.style.backgroundColor = "blue"
    }
    else if (couleur == "vert") {
        document.body.style.backgroundColor = "green"
    }
    
    else {
        document.write("Couleur non comprise")
    }
}

function calcul_moyenne() {
    var n1 = prompt ("Donner la première note :");
    var n2 = prompt ("Donner la deuxième note :");
    var n3 = prompt ("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne<10){
        document.write("Vous êtes pas admin")
        document.body.style.backgroundColor = "red"
    }
    else {
        document.write("Vous êtes admin!")
        document.body.style.backgroundColor = "green"

    }

    if (moyenne<=10) {
        document.write("<br>")
        document.write("Vous êtes refusé")         
    }
    else if (moyenne<=14.01) {
        document.write("<br>")
        document.write("Admis Passage")
    }
    else if (moyenne>=14 ) {
        document.write("<br>")
        document.write("Admin Bien")
    }


}
