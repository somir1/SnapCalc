const prompt = require("prompt-sync")({ sigint: true });

const snapraiseCalc = (input) => {
    //stores the numbers
    var numberStack = [];
    //stores the operators
    var operatorStack = [];
    
    //goes through the array and checks the type of each item in the array
    for (var i = 0; i < input.length; i++) {
        //store the current index into a variable
        var currItem = input[i];
        //if current index is a number it will get parsed from string to int and stored in numberStack
        if (!isNaN(parseInt(currItem))) {
            numberStack.push(parseInt(currItem));
        //if current index is NaN it will check for the 4 desired operators and will be stored the operatorStack
        } else if (currItem === '+' || currItem === '-' || currItem === '*' || currItem === '/'){
            operatorStack.push(currItem);
        }
    }
    
    //created a new variable and set it to 0 
    //set total to be the last number of the numberstack
    var total = 0;
    total += numberStack[numberStack.length - 1];

    //loops in revearse through the second to last number in the numberstack
    for (var i = numberStack.length - 2; i >= 0; i--) {
        //tracking the current index from the number stack from right to left.
        var currNum = numberStack[i];

        //grabbing current operator where the index i is reversed 
        //its tracking the operator from left to right 
        var currOperator = operatorStack[operatorStack.length - 1 - i];
        //+ + + *

        //checks if the value of the each index and if its equal to the desired operator
        // it will perform the desired expression
        if (currOperator === '+') {
            total += currNum;
        } else if (currOperator === '-') {
            total = currNum - total;
        } else if (currOperator === '*') {
            total *= currNum;
        } else if (currOperator === '/') {
            total = currNum / total;
        }
    }
    //round our answer
    var results = Math.round(1000 * total) / 1000;
    return results;
}

//a new variable to track the results if we want to continue adding to the total 
var globalSum = 0;
console.log("Welcome to the RPM Calculator")
console.log("Please enter your equation in this format: 1 2 3 + *");
console.log("Press q to exit out if needed to be");
while(true) {
    const numbersInput = prompt("> ");
    //checks if inputs is eqaul to anything and it will perform the desired actions
    if (numbersInput === 'q' || numbersInput === 'Q') {
        console.log("You have exited calculator")
        break;
    } else if (numbersInput === ""){
        console.log("Input field can not be blank try again")
    } else if (numbersInput === "clear" || numbersInput === "CLEAR"){
        globalSum = 0;
        total = 0;
        console.log("Your calculator has been cleared")
        console.log("You may try again");
    } else{ 
        //new function to store the split inputs in the variable results and run the function
        const result = snapraiseCalc(numbersInput.split(" "))
        //if the inputs is NaN it will throw an error 
        if (isNaN (result)){
            console.log("Invalid input try again or enter q to the exit calculator")
          // if the inputs are valid it will run the function
        } else{
            globalSum += result;
            console.log("Your answer is: " + globalSum);
            console.log("Press Q to exit or continue adding numbers in the same format to increase the total");
            console.log("You may clear out the results to try a new calculation by simply typing in clear");
        }
    }
}