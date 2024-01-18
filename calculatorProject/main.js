
let screen = document.querySelector('.calculatorScreen');
let validator = 0;
let numStorage = [];
let operator = "";
let num1;
let num2;
let counter = 0;
let upDate;
let buttons = document.querySelectorAll('.button');
let secondCalculationCheck = 0;

buttons.forEach(button =>{
    button.addEventListener('click',function(){
        button.style.transform = 'scale(0.90)';

        setTimeout(function(){
            button.style.transform = 'scale(1)';

        },200);
    });
});

let operators = {
    '+':'+',
    '-':'-',
    'X':'X',
    '÷':'÷',
};

const add = (a,b) => a + b;

const subtract = (a,b) => a-b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

function operate(){
    counter++;
    
    for (let i = 0; i < numStorage.length; i++) {

        if (numStorage[i] in operators ) {
            num1 = numStorage.slice(0 , i);
            num2 = numStorage.slice(i + 1);
            break;
        }
    }

    let num1String = num1.join('');
    let num2String = num2.join('');
    let INTnum1= parseFloat(num1String,10);
    let INTnum2 = parseFloat(num2String,10);


    console.log("num1:", num1String);
    console.log("num2:", num2String);

    
    if (counter > 1){
        INTnum1 = upDate;
    }

    if(counter){
        if (operator == "+"){
            console.log(INTnum1);
            upDate = add (INTnum1,INTnum2);
            console.log(upDate);
    
        }else if (operator == "-"){
            upDate = subtract (INTnum1,INTnum2);
    
        }else if (operator == "X"){
            upDate = multiply (INTnum1,INTnum2);
    
        }else if (operator =="÷"){
            upDate = divide (INTnum1,INTnum2);
        }
    }
    numStorage = [];
    INTnum1 = INTnum2 = null;
    screen.innerHTML = upDate;
}


function keyPressed(number){
    if (number in operators){
        numStorage.push(number);
        operator = number;
        console.log(numStorage);
        screen.innerHTML+=number;
        validator++;
    console.log(validator);
    }else{
        numStorage.push(number);
        console.log(numStorage);
        screen.innerHTML+=number;
    }
    if (typeof numStorage[0] === "number" && typeof numStorage[1] === "string" && typeof numStorage[2] === "number" && typeof numStorage[3] ==="string"){
        console.log("in");
        operate();

    }
}

function remove(bool){
    if (bool == true){
        screen.innerHTML = "";
        numStorage = [];
        counter = 0;
    }else{
        let length = numStorage.length-1;                                           
        numStorage.pop(length);
        screen.innerHTML = screen.innerHTML.replace(/.$/,"");
    }
}




