/Midrigan Cristian/

function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('sum-result').innerText = num1 + num2;
}

function showNumbers() {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += i + " ";
    }
    document.getElementById('numbers').innerText = output;
}

function findMax() {
    const num1 = parseFloat(document.getElementById('max-num1').value);
    const num2 = parseFloat(document.getElementById('max-num2').value);
    document.getElementById('max-result').innerText = num1 > num2 ? num1 : num2;
}

function togglePanel(index) {
    const panels = document.querySelectorAll('.exercise-panel');
    panels.forEach((panel, i) => {
        if (i === index) {
            panel.style.display = panel.style.display === "block" ? "none" : "block";
        } else {
            panel.style.display = "none";
        }
    });
}

function calculateFactorial() {
    const num = parseInt(document.getElementById('factorial-num').value);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById('factorial-result').innerText = factorial;
}

function reverseString() {
    const str = document.getElementById('reverse-string').value;
    const reversed = str.split('').reverse().join('');
    document.getElementById('reversed-result').innerText = reversed;
}

function checkEvenOdd() {
    const num = parseInt(document.getElementById('even-odd-num').value);
    const result = num % 2 === 0 ? "Pair" : "Impair";
    document.getElementById('even-odd-result').innerText = result;
}

function countVowels() {
    const str = document.getElementById('vowel-string').value.toLowerCase();
    const vowels = "aeiou";
    let count = 0;
    for (let char of str) {
    if (vowels.includes(char)) {
    count++;
}
}
    document.getElementById('vowel-count-result').innerText = count;
}

function calculateAverage() {
    const numbers = document.getElementById('average-numbers').value.split(',').map(Number);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    document.getElementById('average-result').innerText = average.toFixed(2);
}

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

function reverseArray() {
    const array = document.getElementById('array-input').value.split(',').map(Number);
    document.getElementById('array-result').innerText = array.reverse().join(', ');
}

function findMin() {
    const numbers = document.getElementById('min-array').value.split(',').map(Number);
    const min = Math.min(...numbers);
    document.getElementById('min-result').innerText = min;
}

function generateMultiplicationTable() {
    const num = parseInt(document.getElementById('multiplication-number').value);
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${num} x ${i} = ${num * i}\n`;
    }
    document.getElementById('multiplication-result').innerText = table;
}
function getStringLength() {
    const str = document.getElementById('length-string').value;
    document.getElementById('length-result').innerText = str.length;
}

function isPalindrome() {
    const str = document.getElementById('palindrome-string').value.toLowerCase();
    const reversed = str.split('').reverse().join('');
    const result = str === reversed ? "Oui, c'est un palindrome." : "Non, ce n'est pas un palindrome.";
    document.getElementById('palindrome-result').innerText = result;
}

function calculatePower() {
    const base = parseFloat(document.getElementById('base-number').value);
    const exponent = parseInt(document.getElementById('exponent-number').value);
    const result = Math.pow(base, exponent);
    document.getElementById('power-result').innerText = result;
}





