function addition() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);

    document.getElementById("t3").value = c;
}

function permute() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var v3 = a;
    a = b;
    b = v3;
    document.getElementById("t1").value = a;
    document.getElementById("t2").value = b;
}

function parite() {
    var v = Number(document.getElementById("t1").value);
    if (v % 2 === 0)
        document.getElementById("t4").value = "Pair";
    else
        document.getElementById("t4").value = "Impair";
}
S