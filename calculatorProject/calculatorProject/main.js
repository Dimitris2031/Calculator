
let screen = document.querySelector('.calculatorScreen');
let validator = false;
let numStorage = [];
let operator = "";
let num1;
let num2;
let counter = 0;
let upDate;

function add (a,b) {
    let result = a+b;
    return result;
}

function subtract (a,b) {
    let result = a-b;
    return result;
}

function multiply (a,b) {
    let result = a*b;
    return result;
}

function divide (a,b) {
    let result = a/b;
    return result;
}






function operate(){
    counter++;
    let length = numStorage.length;
    for (let i = 0; i < length; i++) {
        let currentElement = numStorage[i];
    
        if (currentElement === '+' || currentElement === '-' || currentElement === 'X' || currentElement === '÷') {
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

    
    if (counter <= 1){
        if (operator == "+"){
            upDate = add (INTnum1,INTnum2);
            screen.innerHTML = upDate; 
    
        }else if (operator == "-"){
            upDate = subtract (INTnum1,INTnum2);
            screen.innerHTML = upDate;
    
        }else if (operator == "X"){
            upDate = multiply (INTnum1,INTnum2);
            screen.innerHTML = upDate;
    
        }else if (operator =="÷"){
            upDate = divide (INTnum1,INTnum2);
            screen.innerHTML = upDate;
        }

    }else if(counter > 1){
        if (operator == "+"){
            upDate = add (upDate,INTnum2);
            screen.innerHTML = upDate; 
    
        }else if (operator == "-"){
            upDate = subtract (upDate,INTnum2);
            screen.innerHTML = upDate;
    
        }else if (operator == "X"){
            upDate = multiply (upDate,INTnum2);
            screen.innerHTML = upDate;
    
        }else if (operator =="÷"){
            upDate = divide (upDate,INTnum2);
            screen.innerHTML = upDate;
        }
    }
    numStorage = [];
    INTnum1 = INTnum2 = null;
}



function keyPressed(number){
    //if (numStorage[0] ==("number") &&)
    if (number == '+' || number == '-' || number == 'X' || number == '÷'){
        numStorage.push(number);
        operator = number;
        console.log(numStorage);
        screen.innerHTML+=number;
    }else{
        numStorage.push(number);
        console.log(numStorage);
        screen.innerHTML+=number;
    }

    

    
}

function remove(bool){
    if (bool ==true){
        screen.innerHTML = screen.innerHTML.replace(/[0-999999999999]/g, "");
        numStorage = [];
        counter = 0;
    }else{
        let length = numStorage.length-1;
        numStorage.pop(length);
        screen.innerHTML = screen.innerHTML.replace(/[0-999999999999](?=[^0-999999999999]*$)/, "");
        counter = 0;
    }
}




