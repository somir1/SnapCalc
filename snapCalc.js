const prompt = require("prompt-sync")({ sigint: true });

//global variable for tracking
let numberStack = [];
let operatorArr = [];

const mathCalculations = () => {

    // 5 5 5 8 + + -
    // [5, 5, 5, 8] ['-', '+','+']
    // total = 0 -> 8 + 5 -> 13 -> 13 + 5 -> 18 -> 18 -> 5 -18 -> -13
    // [5, 5] [-, +]
    // 5 +
    // [5, 5, 13] [-, +]

    // [5, 5] [-, +]
    // [5] [-]
    // currNum -> 5 currOp -> +
    // [5, 18] [-]

    // [5] [-]
    // currNum -> 5 currOp -> -
    // [] []
    // [-13]

    //let our current equal to 0 because change later
    let total = 0;
    //if operator array has operators in it this condition will run
    while(operatorArr.length > 0) {
        //setting the total to be the last number of the number array
        //meaning this will be the base start of our operations
        total = numberStack.pop();

        //store the end of each array to a variable
        let currOperator = operatorArr.pop();
        let currNum = numberStack.pop();

        if(currOperator === "+"){
            total += currNum;
        } else if (currOperator === '-') {
            total = currNum - total;
        } else if (currOperator === '/') {
            total = currNum / total;
        } else if (currOperator === '*'){
            total *= currNum
        }
        //push the total in the number array 
        numberStack.push(total);
    }
    //rounding the answer
    let results = Math.round(1000 * total) / 1000;
    return results;
}

// [5, 5] [+, +, +, +]

const refineUserInputs = userInput => {
    //converts the users input and splits it turning it into an array
    const splitedInputArr = userInput.split(" ");

    //if there is a previous result it is stored here
    let isExistPreviousResult = numberStack[0];

    //loops through the new splited array and seperate the charchters into its respective array
    for (let i = 0; i < splitedInputArr.length; i++) {

        //storing the index of the InputArr to the input variable
        let input = splitedInputArr[i];
        if (!isNaN(parseInt(input))) {
            // + + + 1
            // [13] []
            //if our operator stack is greater then 0 while our numberstack is at 0 it will throw an error
            if (operatorArr.length > 0) {
                console.log('operator should be after all the numbers');
                //it will then reset the operstack
                operatorArr = [];
                //it will store previous calculator result
                if (numberStack.length !== 0) {
                    numberStack = numberStack.slice(0, 1);
                }
                return false;
            }
            numberStack.push(parseInt(input));
          //checks for the desired operators and pushes it to the operator array  
        } else if (input === '+' || input === '-' || input === '*' || input === '/') {
            //if there is operators and no numbers throw error
            if (numberStack.length === 0) {
                //if user inputs + + 1 1 +
                operatorArr = [];
                console.log('You must enter number first than operator');
                return false;
            }else{
            //if its in the right format it will push into the begining the operator stack 
                operatorArr.unshift(input);
            }
        } else {
            //if the input is not valid
            console.log('Invalid input');
            if (isExistPreviousResult) {
                numberStack = numberStack.slice(0, 1);
                console.log("Try again")
            } else {
                numberStack = [];
            }
            operatorArr = [];
            return false;
        }
    }
    // //if operators are greater then numbers throw error
    if (operatorArr.length >= numberStack.length) {
        console.log("You have entered too many operators");
        console.log("The correct calculation is below");
        if (isExistPreviousResult) {
            operatorArr = operatorArr.slice(-(numberStack.length-1));
        } else {
            operatorArr = operatorArr.slice(-(numberStack.length-1));
        }
        return false
    }
    return true;
}

//welcome prompts
console.log("Welcome to the RPN Calculator")
console.log("Please enter your equation in this format: 1 2 3 + *");
console.log("Press q to exit out if needed to be");
console.log("Type clear to empty calculator history");

while(true) {
    const userInput = prompt("> ");
    
    //checks if inputs is eqaul to anything and it will perform the desired actions
    if (userInput === 'q' || userInput === 'Q') {
        console.log("You have exited calculator")
        break;
    } else if (userInput === ""){
        console.log("Input field can not be blank try again")
    } else if (userInput === "clear"){
        numberStack = [];
        operatorArr = [];
        console.log("Calculator history has been cleared")
    } else{ 
        //set a new variable to be equal to the refineduser function
        let refineInputRes = refineUserInputs(userInput);

        // [5, 8] [+]
        // > 5
        // 5
        // > 8
        // 8
        // + 
        // 
        if (refineInputRes) {
            //once a operator in its array it will run the functions
            if (operatorArr.length > 0) {
                const result = mathCalculations();
                console.log("Your answer is: " + result);
            } else {
                //if no operators is found it will print out the user input
                console.log(userInput);
            }
        } else {
            //shows the previous claculated result when invalid input 
            if (numberStack.length !== 0) {
                console.log(numberStack[0]);
            }
        }
    } 
}