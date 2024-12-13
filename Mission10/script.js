function ajouterLigne() {
    var table = document.querySelector('#table_inv tbody');
    var modeleLigne = document.querySelector('#modeleLigne');
    var newRow = modeleLigne.cloneNode(true);
    newRow.id = ''; // Supprimer l'ID pour éviter les conflits
    table.appendChild(newRow);
}

function remplir() {
    var descriptions = ["écran 17 pouces", "souris", "clavier", "clé USB 16Go", "ram 8Go"];
    var lignes = document.querySelectorAll('.row');

    lignes.forEach(function (ligne) {
        var description = ligne.querySelector('.desc');
        var quantite = ligne.querySelector('.qte');
        var prix = ligne.querySelector('.prix');

        description.value = descriptions[Math.floor(Math.random() * descriptions.length)];
        quantite.value = Math.floor(Math.random() * 10) + 1; // Quantité entre 1 et 10
        prix.value = Math.floor(Math.random() * 100) + 1;    // Prix entre 1 et 100
    });
}

function calculate() {
    var lignes = document.querySelectorAll('.row');
    var sousTotal = 0;

    lignes.forEach(function (ligne) {
        var quantite = parseInt(ligne.querySelector('.qte').value) || 0;
        var prix = parseInt(ligne.querySelector('.prix').value) || 0;
        var total = quantite * prix;

        ligne.querySelector('.total').value = total;
        sousTotal += total;
    });

    var remise = parseFloat(document.getElementById('remise').value) || 0;
    var tauxTaxe = parseFloat(document.getElementById('taxe').value) || 0;
    var fraisExpedition = parseFloat(document.getElementById('expedition').value) || 0;

    var sousTotalRemise = sousTotal - (sousTotal * remise / 100);
    var taxeTotale = sousTotalRemise * tauxTaxe / 100;
    var solde = sousTotalRemise + taxeTotale + fraisExpedition;

    document.getElementById('sousTotal').value = sousTotal;
    document.getElementById('sousTotalRemise').value = sousTotalRemise;
    document.getElementById('taxeTotale').value = taxeTotale;
    document.getElementById('solde').value = solde;
}

function effacer() {
    document.getElementById('form1').reset();
}

function corige() {
    var windowFeatures = "width=600,height=400,scrollbars=yes,resizable=yes";
    var url = "corrige.html";

    window.open(url, "_blank", windowFeatures);
}

function fermer() {
    window.close();
}

function effacer() {
    var inputs = document.querySelectorAll('input');

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'text') {
            inputs[i].value = inputs[i].readOnly ? '0' : '';
        }
    }

    var rows = document.querySelectorAll('#table_inv tbody .row');

    for (var j = 1; j < rows.length; j++) {
        rows[j].remove();
    }
}


