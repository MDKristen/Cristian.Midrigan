function calculate() {
    let total = 0;
    for (let i = 1; i <= 3; i++) {
        const price = +document.getElementById(`price${i}`).value || 0;
        const quantity = +document.getElementById(`quantity${i}`).value || 0;
        const result = price * quantity;
        document.getElementById(`result${i}`).value = result.toFixed(2);
        total += result;
    }
    document.getElementById('totalResult').value = total.toFixed(2);
}

function reset() {
    for (let i = 1; i <= 3; i++) {
        ['price', 'quantity', 'result'].forEach(field => document.getElementById(`${field}${i}`).value = 0);
    }
    document.getElementById('totalResult').value = 0;
}
