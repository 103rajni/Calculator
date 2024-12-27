let display = document.getElementById('display');

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to append values to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);  // Evaluate the expression
    } catch (error) {
        display.value = 'Error'; // Handle any invalid input or expression
    }
}