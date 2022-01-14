
const display_span = document.querySelector(".display > p");
const buttons_span = Array.from(document.getElementsByClassName("buttons"));


const num1_div = document.getElementById("num1");
const oper_div = document.querySelector(".operators");





function add(num1, num2) {
    return num1 + num2;

}

function subtract(num1, num2) {
    return num1 - num2;

}

function multiply(num1, num2) {
    return num1 * num2;

}

function divide(num1, num2) {
    return num1 / num2;

}

function operate(operator, num1, num2) {
    if (operator === `+`) { return (add(num1, num2)) }
    if (operator === `-`) { return (subtract(num1, num2)) }
    if (operator === `*`) { return (multiply(num1, num2)) }
    if (operator === `/`) { return (divide(num1, num2)) }
}

buttons_span.map(buttons => {
    buttons.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display_span.innerText = '';
                break;
            case '':
                if (display_span.innerText) {
                    display_span.innerText = display_span.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display_span.innerText = eval(display_span.innerText);
                } catch {
                    display_span.innerText = 'Error';
                }

                break;
            default:
                display_span.innerText += e.target.innerText;
        }
    });
});










