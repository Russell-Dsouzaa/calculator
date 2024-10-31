var firstNumber = "";
var secondNumber = "";
var operator = '';
var displayNumber = "";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.classList.contains("operator")) {

            if (operator !== button.innerText) {
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
            displayNumber = calculate(firstNumber,secondNumber);
            display.innerText = displayNumber;
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

            if (operator === '') {
                if (!firstNumber.includes('.')) {
                    firstNumber += '.';
                }
            } else {
                if (!secondNumber.includes('.')) {
                    secondNumber += '.';
                }
            }

            display.innerText = firstNumber + " " + operator + " " + secondNumber;


        } else if (button.id === "percentage") {

            if (operator === '') {
                firstNumber = (Number(firstNumber) / 100).toFixed(3).toString();
                display.innerText = firstNumber;
            } else {
                if (!(secondNumber === "")) {
                    secondNumber = ((Number(secondNumber) / Number(firstNumber)) * 100).toFixed(3).toString();
                    display.innerText = secondNumber;
                }
            }

        } else if (button.id === "sign") {

            if (operator === '') {
                firstNumber = toggleSign(firstNumber);
            } else {
                secondNumber = toggleSign(secondNumber);
            }

            display.innerText = firstNumber + " " + operator + " " + secondNumber;

        } else {

            if (operator === '') {
                firstNumber = firstNumber + button.innerText;
                displayNumber = firstNumber;
            } else {
                secondNumber = secondNumber + button.innerText;
                if (firstNumber === "") {
                    displayNumber = 0 + " " + operator + " " + secondNumber;
                } else {
                    displayNumber = firstNumber + " " + operator + " " + secondNumber;
                }
            }

            display.innerText = displayNumber;

        }

    });
});

function calculate(num1,num2) {
    let one = Number(num1);
    let two = Number(num2);

    if (num1 == "" && num2 == "") {
        return 0;
    } else if (num2 == "") {
        if (operator == '/') {
            alert("Dividing by 0 gives us infinity, enter a valid second number");
            return ":(";
        }
        return firstNumber + " " + operator;
    } else if (operator == '') {
        return firstNumber;
    } else {
        if (operator == '+') {
            firstNumber = "";
            secondNumber = "";
            operator = '';
            displayNumber = "";

            return parseFloat(one) + parseFloat(two);
        } else if (operator == '-') {
            firstNumber = "";
            secondNumber = "";
            operator = '';
            displayNumber = "";

            return parseFloat(one) - parseFloat(two);
        } else if (operator == '*') {
            firstNumber = "";
            secondNumber = "";
            operator = '';
            displayNumber = "";

            return parseFloat(one) * parseFloat(two);
        } else {
            if (num2 == "" || num2 == "0") {
                alert("Dividing by 0 gives us infinity, enter a valid second number");
                return ":("
            } else {
                firstNumber = "";
                secondNumber = "";
                operator = '';
                displayNumber = "";

                return parseFloat(one) / parseFloat(two);
            }
        }
    }
}

function toggleSign(num) {
    if (num === "") {
        return num;
    }

    return (Number(num) * -1).toString();
}

module.exports = calculate;