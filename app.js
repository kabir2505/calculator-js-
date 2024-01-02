const screen1=document.getElementById('screen1')
const screen2=document.getElementById('screen2')
let store=''
const deleteb=document.getElementById('delete').addEventListener('click',function(){
    console.log(typeof screen1.innerHTML)
    temp=screen1.innerHTML
    templ=temp.length-1
    temp = temp.substring(0, templ)
   
    screen1.innerHTML=temp
    // for (let i=0;i<temp.length;i++){
    //     screen1.innerHTML=''
    //     screen1.innerHTML+=temp[i]
    //     console.log(screen1.innerHTML)
    // }
   

})

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
document.getElementById('=').addEventListener('click', function hello() {
    
    if (typeof store=="object"){
        console.log('hello1')
        temp=screen1.innerHTML

        temp=temp.split(' ').map(item => item.trim());
        temp= temp.filter(item => item !== '');

        nah=temp.splice(-2)
        store=store.concat(nah)
        
      

    }else if(typeof store=='string') {
        console.log('hello12')
    store=screen1.innerHTML
    
    store=store.split(' ').map(item => item.trim());
    store= store.filter(item => item !== '');
    prev=screen1.innerHTML
    prev=prev.split(' ').map(item => item.trim());
    prev= prev.filter(item => item !== '');
    console.log('store sec',store)
    }
    console.log('second')
    console.log(store)
    returnvalue = solution(store);
    screen2.innerHTML = returnvalue;
    store.splice(0,3,returnvalue)
    while (store.length>1){
    
        returnvalue = solution(store);
        returnvalue=roundTo4Decimals(returnvalue)
        screen2.innerHTML = returnvalue;
        store.splice(0,3,returnvalue)
        
    }}
   
);

function solution(store) {
   
    console.log('store from sol',store)
    // var lis = store.split(' ').map(item => item.trim());
    // lis = lis.filter(item => item !== '');
    if (store.length){
    console.log(store.length)}
    for (let i = 0; i < store.length; i++) {
        if (store[i] === '+' || store[i] === '÷' || store[i] === 'x' || store[i] === '.' ||store[i]=='-') {
            let operator = store[i];
           

            // Assuming operate() performs the arithmetic operations
            let sol = operate(operator, store[i - 1], store[i + 1]);
            finalsol += sol;
           
            // Update screen1 with the result
            // screen1.innerHTML = sol;

            return sol;
             // Return the result of the current operation
        }
    }
    // If no operation is performed, return 0 or handle the case accordingly
    return finalsol;
}



function roundTo4Decimals(n) {
    return Number(n.toFixed(4));
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

// function evaluateExpression(expression) {
//     const operators = {
//         '+': (x, y) => x + y,
//         '-': (x, y) => x - y,
//         '*': (x, y) => x * y,
//         '/': (x, y) => x / y
//     };

//     let stack = [];

//     for (let token of expression) {
//         if (!operators[token]) {
//             stack.push(token);
//         } else {
//             let num2 = parseFloat(stack.pop());
//             let operator = operators[token];
//             let num1 = parseFloat(stack.pop());
//             let result = operator(num1, num2);
//             stack.push(result);
//         }
//     }

//     return stack[0];
// }

// // Given expression list
// let expressionList = [1, '+', 3, '*', 5, '/', 3];

// // Evaluate the expression
// let result = evaluateExpression(expressionList);

