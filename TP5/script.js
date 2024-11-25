function affichagetab() {
    document.write("<table border=2px width=30%>");
    for (let i = 0; i <= 5; i++) {
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>");
}

function affichagetab2() {
    var len = prompt("Combien de lignes?");
    document.write("<table border=2px width=30%>");
    for (let i = 0; i < len; i++) {
        document.write("<tr><td>" + (i + i) + "</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>");
}

function seconnecter() {
    var login = prompt("Donnez votre nom d'utilisateur");
    var password = prompt("Entrez votre mot de passe");
    if (login === "admin" && password === "admin") {
        document.write("Bienvenue : " + login);
    } else {
        alert("Accès Refusé");
    }
}

function seconnecter2() {
    window.location.href = "identification.html";
}

function login() {
    var login = document.getElementById("t1").value;
    var password = document.getElementById("t2").value;
    if (login === "admin" && password === "admin") {
        window.location.href = "yes.html";
    } else {
        window.location.href = "no.html";
    }
}

function cdc() {
    var chaine = prompt("Donnez un mot");
    document.write(chaine.toUpperCase() + "<br>");
    document.write(chaine.toLowerCase() + "<br>");
    document.write("La chaine contient " + chaine.length + " caractères." + "<br>");
    document.write("La première lettre est " + chaine.substr(0, 1) + "<br>");
}

function seconnecter3() {
    var i = 0;
    do {
        var login = prompt("Donnez votre nom d'utilisateur");
        var password = prompt("Entrez votre mot de passe");
        if (login === "admin" && password === "admin") {
            document.write("Bienvenue : " + login);
            break;
        } else {
            alert("Accès Refusé");
        }
        i++;
    } while (i < 3);

    if (i === 3) {
        alert("Délai Dépassé");
    }
}

function ajouterLigne() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;

    if (a === "" || b === "") {
        alert("Un ou deux champs sont vides");
    } else if (Number(b) < 0 || Number(b) > 120) {
        alert("Âge invalide");
    } else {
        var table = document.getElementById("myTable");
        var newRow = table.insertRow(-1);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        cell1.innerHTML = a;
        cell2.innerHTML = b;
    }
}
