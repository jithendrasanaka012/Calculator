// JavaScript for Calculator functionality

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let lastInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            // Clear everything
            currentInput = '';
            operator = '';
            lastInput = '';
            display.value = '';
        } else if (value === 'DEL') {
            // Delete the last character
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (value === '=') {
            // Perform calculation
            if (operator && lastInput) {
                currentInput = eval(lastInput + operator + currentInput).toString();
                display.value = currentInput;
                lastInput = '';
                operator = '';
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            // Store operator and move current input to lastInput
            if (currentInput) {
                lastInput = currentInput;
                currentInput = '';
                operator = value;
            }
        } else if (value === '%') {
            // Convert current input to percentage
            if (currentInput) {
                currentInput = (parseFloat(currentInput) / 100).toString();
                display.value = currentInput;
            }
        } else {
            // Handle numbers and decimal point
            currentInput += value;
            display.value = currentInput;
        }
    });
});
