function corigé(){
    const windowFeatures = "width=600,height=400,scrollbars=yes,resizable=yes";
    const url = "corrige.html";

    window.open(url, "_blank", windowFeatures);

}

function fermer(){
    window.close();
}

function effacer() {
    document.getElementById('form1').reset();

}
function corection(){

    var reponses = document.querySelectorAll('.div2 ');
    var score = 0;
    var total = 20;

    reponses.forEach((div2) =>{
        var checkboxs = div2.querySelectorAll('input[type="checkbox"]');
        var correct = true;

        checkboxs.forEach(checkbox  => {
            if ((checkbox.checked && checkbox.value === "felse") || (!checkbox.checked && checkbox.value === "true")){
                correct = false;
            }
        });

        if (correct){
            score++;
        }
    });

    var c = Number(score)*20
    var b = Number(c)/10

    var resul = document.getElementById('resultat')
    resul.textContent = `resultat:${b}/${total}`;
}
