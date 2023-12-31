const screen1=document.getElementById('screen1')
const screen2=document.getElementById('screen2')
let store=''
function clickedme(a){

    if (screen1.innerHTML){
        screen1.innerHTML+=a}
    else screen1.innerHTML=a
    // console.log(screen1.innerHTML)
    
}
function clickedoper(a){
    if (screen1.innerHTML){
        screen1.innerHTML+=' '+a+' '}
    else screen1.innerHTML=a

}

document.getElementById('clear').addEventListener("click",clear)

function clear(){
    location.reload()
    screen1.innerHTML=' '
    screen2.innerHTML=0

}
let returnvalue;
let finalsol = 0;

// Add an event listener to the element with the ID '='
document.getElementById('=').addEventListener('click', function() {
    
    if (typeof store=="object"){
        temp=screen1.innerHTML

        temp=temp.split(' ').map(item => item.trim());
        temp= temp.filter(item => item !== '');
        console.log('temp',temp)
        nah=temp.splice(-2)
        store=store.concat(nah)
        
        console.log('store here')
        console.log(store)

    }else if(typeof store=='string') {
    console.log('inside the string')
    store=screen1.innerHTML
    
    store=store.split(' ').map(item => item.trim());
    store= store.filter(item => item !== '');
    prev=screen1.innerHTML
    prev=prev.split(' ').map(item => item.trim());
    prev= prev.filter(item => item !== '');
    
    console.log(store)}
    
    returnvalue = solution(store);
    screen2.innerHTML = returnvalue;
    store.splice(0,3,returnvalue)
    console.log(store)
   
});

function solution(store) {
    console.log('=', store);

    // var lis = store.split(' ').map(item => item.trim());
    // lis = lis.filter(item => item !== '');

    for (let i = 0; i < store.length; i++) {
        if (store[i] === '+' || store[i] === '÷' || store[i] === 'x' || store[i] === '.') {
            let operator = store[i];
            console.log(operator);

            // Assuming operate() performs the arithmetic operations
            let sol = operate(operator, store[i - 1], store[i + 1]);
            finalsol += sol;
            console.log(sol)
            // Update screen1 with the result
            // screen1.innerHTML = sol;

            return sol;
             // Return the result of the current operation
        }
    }
    // If no operation is performed, return 0 or handle the case accordingly
    return finalsol;
}



function roudsol(n){
    return Math.round(number*1000)/1000
}

function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(operator,a,b){
    a=Number(a)
    b=Number(b)

    switch(operator){
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case 'x':
            return multiply(a,b)
        case '÷':
            if (b==0) {return null}
            else {return divide(a,b)}
        default:
            return null

            
    }
}


function evaluateExpression(expression) {
    const operators = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        'x': (x, y) => x * y,
        '÷': (x, y) => x / y
    };

    let stack = [];

    for (let token of expression) {
        if (!operators[token]) {
            stack.push(token);
        } else {
            let num2 = parseFloat(stack.pop());
            let operator = operators[token];
            let num1 = parseFloat(stack.pop());
            let result = operator(num1, num2);
            stack.push(result);
        }
    }

    return stack[0];
}

// Given expression list
let expressionList = [1,'+',3,'x',5,'÷',3];

// Convert 'x' to '*' and '÷' to '/'
expressionList = expressionList.map((item) => {
    if (item === 'x') return '*';
    if (item === '÷') return '/';
    return item;
});

// Evaluate the expression
let result = evaluateExpression(expressionList);
console.log("Result:", result);