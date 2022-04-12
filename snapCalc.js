const prompt = require("prompt-sync")({ sigint: true });
var process = require('process');

const snapraiseCalc = (input) => {
    var numberStack = [];
    var operatorStack = [];
    
    for (var i = 0; i < input.length; i++) {
        var currItem = input[i];
        if (!isNaN(parseInt(currItem))) {
            numberStack.push(parseInt(currItem));
        } else if (currItem === '+' || currItem === '-' || currItem === '*' || currItem === '/'){
            operatorStack.push(currItem);
        }
    }
    // console.log(numberStack);
    // console.log(operatorStack);
    var sum = 0;
    sum += numberStack[0];

    for (var i = 1; i < numberStack.length; i++) {
        var currNum = numberStack[i];
        var currOperator = operatorStack[i - 1];

        if (currOperator === '+') {
            sum += currNum;
        } else if (currOperator === '-') {
            sum -= currNum;
        } else if (currOperator === '*') {
            sum *= currNum;
        } else if (currOperator === '/') {
            sum /= currNum;
        }
    }
    return sum;
}
// 0 1 2 3
// 5 5 5 8
//   + + -

var globalSum = 0;
console.log("Please enter your equation in this format: 1 2 3 + *");
while(true) {
    const numbers = prompt("> ");

    if (numbers === 'q' || numbers === 'Q') {
        console.log("You have exited calculator")
        break;
    } else if (numbers === ""){
        console.log("Input field can not be blank try again")
    } 
    else{
        globalSum += snapraiseCalc(numbers.split(" "));
        console.log("Your answer is: " + globalSum,'\n',"Press Q to exit or continue adding numbers in the same format to increase the total");
    }
}