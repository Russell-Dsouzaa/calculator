var firstNumber = "";
var secondNumber = "";
var operator = '';
var displayNumber = "";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("operator")) {
            
        } else if (button.id === "ac") {

        } else if (button.id === "equal-to") {

        } else if (button.id === "delete") {

        } else if (button.id === "decimal") {

        } else if (button.id === "percentage") {

        } else if (button.id === "sign") {

        } else {

            if (operator === '') {
                firstNumber = firstNumber + button.innerText;
                displayNumber = firstNumber;
                display.innerText = displayNumber;
            } else {
                secondNumber = secondNumber + button.innerText;
                if (firstNumber === "") {
                    display.innerText = 0 + " " + operator + " " + secondNumber;
                } else {
                    displayNumber = firstNumber + " " + operator + " " + secondNumber;
                    display.innerText = displayNumber;
                }
            }

        }
    });
});