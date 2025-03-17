function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    // Check if input is valid
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    // perform calculation
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num2 != 0 ? num1 / num2 : "Cannot divide by zero";

    // Display results
    document.getElementById("result").innerHTML = `
        <h3>Results</h3>
        <p>Sum: ${sum}</p>
        <p>Difference: ${difference}</p>
        <p>Product: ${product}</p>
        <p>Quotient: ${quotient}</p>
    `;
}