var firstNumber = "";
var secondNumber = "";
var operator = '';
var displayNumber = "";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.classList.contains("operator")) {
            if (operator === '') {
                operator = `${button.innerText}`;
            }

            display.innerText = firstNumber + " " + operator;
        } else if (button.id === "ac") {
            firstNumber = "";
            secondNumber = "";
            operator = '';
            displayNumber = "";
            display.innerText = "";
        } else if (button.id === "equal-to") {

        } else if (button.id === "delete") {
            if (operator === '') {
                firstNumber = firstNumber.slice(0,-1);
            } else {
                if(secondNumber === "") {
                    operator = '';
                } else {
                    secondNumber = secondNumber.slice(0,-1);
                }
            }

            display.innerText = firstNumber + " " + operator + " " + secondNumber;
        } else if (button.id === "decimal") {

        } else if (button.id === "percentage") {

        } else if (button.id === "sign") {

        } else {

            if (operator === '') {
                firstNumber = firstNumber + button.innerText;
                displayNumber = firstNumber;
            } else {
                secondNumber = secondNumber + button.innerText;
                if (firstNumber === "") {
                    display.innerText = 0 + " " + operator + " " + secondNumber;
                } else {
                    displayNumber = firstNumber + " " + operator + " " + secondNumber;
                }
            }

            display.innerText = displayNumber;

        }

    });
});