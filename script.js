const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

let selectedOperation = null; 

function calculate() {
    const a = Number(num1.value);
    const b = Number(num2.value);
    let calculation;

    switch (selectedOperation) {
        case "+":
            calculation = a + b;
            break;
        case "-":
            calculation = a - b;
            break;
        case "*":
            calculation = a * b;
            break;
        case "/":
            if (b === 0) {
                result.textContent = "Can't divide by zero";
                return;
            }
            calculation = a / b;
            break;
        default:
            result.textContent = "Choose an operation";
            return;
    }

    result.textContent = calculation;
}

document.getElementById("add").addEventListener("click", () => {
    selectedOperation = "+";
    calculate();
});
document.getElementById("subtract").addEventListener("click", () => {
    selectedOperation = "-";
    calculate();
});
document.getElementById("multiply").addEventListener("click", () => {
    selectedOperation = "*";
    calculate();
});
document.getElementById("divide").addEventListener("click", () => {
    selectedOperation = "/";
    console.log(selectedOperation);
});

document.getElementById("equals").addEventListener("click", () => {
    // Validate that both inputs contain a value
    if (num1.value === "" || num2.value === "") {
        result.textContent = "Enter both numbers";
        return;
    }

    // Convert strings into numbers
    const a = Number(num1.value);
    const b = Number(num2.value);

    let calculation;

    // Perform the selected operation
    switch (selectedOperation) {
        case "+":
            calculation = a + b;
            break;

        case "-":
            calculation = a - b;
            break;

        case "*":
            calculation = a * b;
            break;

        case "/":
            if (b === 0) {
                result.textContent = "Cannot divide by zero";
                return;
            }
            calculation = a / b;
            break;

        default:
            result.textContent = "Select an operation";
            return;
    }

    // Display the result
    result.textContent = calculation;
});

document.getElementById("reset").addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    selectedOperation = null;
    result.textContent = "0";
});