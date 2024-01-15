let keyboardButtons = document.querySelectorAll('.number');
let screen = document.querySelector('.calculatorScreen');
var operator = 0;

keyboardButtons.forEach(button => {
    button.addEventListener("click",function(){
        screen.innerHTML += button.innerHTML;
    })
});

function add (a,b) {
    operator += a+b; screen.innerHTML += '+';
    console.log(operator.value);
    return operator;
}

function subtract (a,b) {
    operator = a-b; screen.innerHTML += '-';
    return operator;
}

function multiply (a,b) {
    operator = a*b; screen.innerHTML += 'X';
    return operator;
}

function divide (a,b) {
    operator = a/b; screen.innerHTML += '(÷)';
    return operator;
}

function equal () {
     screen.innerHTML = operator;
     console.log(operator);
}








