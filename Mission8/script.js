/* Midrigan Cristian */

// Addition de deux nombres
function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('sum-result').innerText = num1 + num2;
}

// Affiche les nombres de 1 à 10
function showNumbers() {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += i + " ";
    }
    document.getElementById('numbers').innerText = output;
}

// Trouve le maximum entre deux nombres
function findMax() {
    const num1 = parseFloat(document.getElementById('max-num1').value);
    const num2 = parseFloat(document.getElementById('max-num2').value);
    document.getElementById('max-result').innerText = num1 > num2 ? num1 : num2;
}

// Basculer l'affichage des panneaux
function togglePanel(index) {
    const panels = document.querySelectorAll('.exercise-panel');
    panels.forEach((panel, i) => {
        panel.style.display = i === index && panel.style.display !== "block" ? "block" : "none";
    });
}

// Calcul du factoriel d'un nombre
function calculateFactorial() {
    const num = parseInt(document.getElementById('factorial-num').value);
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    document.getElementById('factorial-result').innerText = result;
}

// Inverse une chaîne de caractères
function reverseString() {
    const str = document.getElementById('reverse-string').value;
    document.getElementById('reversed-result').innerText = str.split('').reverse().join('');
}

// Vérifie si un nombre est pair ou impair
function checkEvenOdd() {
    const num = parseInt(document.getElementById('even-odd-num').value);
    document.getElementById('even-odd-result').innerText = num % 2 === 0 ? "Pair" : "Impair";
}

// Compte les voyelles dans une chaîne
function countVowels() {
    const str = document.getElementById('vowel-string').value.toLowerCase();
    const vowels = "aeiou";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    document.getElementById('vowel-count-result').innerText = count;
}

// Calcul de la moyenne
function calculateAverage() {
    const numbers = document.getElementById('average-numbers').value.split(',').map(Number);
    let sum = 0;
    for (let num of numbers) sum += num;
    const average = sum / numbers.length;
    document.getElementById('average-result').innerText = average.toFixed(2);
}

// Vérifie si un nombre est premier
function isPrime() {
    const num = parseInt(document.getElementById('prime-number').value);
    if (num <= 1) {
        document.getElementById('prime-result').innerText = "Non, ce n'est pas un nombre premier.";
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            document.getElementById('prime-result').innerText = "Non, ce n'est pas un nombre premier.";
            return;
        }
    }
    document.getElementById('prime-result').innerText = "Oui, c'est un nombre premier.";
}

// Inverse un tableau
function reverseArray() {
    const array = document.getElementById('array-input').value.split(',').map(Number);
    document.getElementById('array-result').innerText = array.reverse().join(', ');
}

// Trouve le plus petit nombre dans un tableau
function findMin() {
    const numbers = document.getElementById('min-array').value.split(',').map(Number);
    document.getElementById('min-result').innerText = Math.min(...numbers);
}

// Génère une table de multiplication
function generateMultiplicationTable() {
    const num = parseInt(document.getElementById('multiplication-number').value);
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${num} x ${i} = ${num * i}\n`;
    }
    document.getElementById('multiplication-result').innerText = table;
}

// Donne la longueur d'une chaîne
function getStringLength() {
    const str = document.getElementById('length-string').value;
    document.getElementById('length-result').innerText = str.length;
}

// Fait une soustraction entre les deux nombres
function calculateSubtraction() {
    const num1 = parseFloat(document.getElementById('sub-num1').value);
    const num2 = parseFloat(document.getElementById('sub-num2').value);
    const result = num1 - num2;
    document.getElementById('sub-result').innerText = result;
}


// Calcul de la puissance
function calculatePower() {
    const base = parseFloat(document.getElementById('base-number').value);
    const exponent = parseInt(document.getElementById('exponent-number').value);
    document.getElementById('power-result').innerText = Math.pow(base, exponent);
}

