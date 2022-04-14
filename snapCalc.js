const prompt = require("prompt-sync")({ sigint: true });

const snapraiseCalc = (input) => {
    //checks if input is an array
    if(!Array.isArray(input)){
        console.log("Please enter valid format")
        return null
    }
    //stores the numbers
    let numberArr = [];
    //stores the operators
    let operatorArr = [];

    //goes through the array and checks the type of each item in the array
    for (let i = 0; i < input.length; i++) {
        //store the current index into a variable
        let currItem = input[i];
        
        //if current index is a number it will get parsed from string to int and stored in numberArr
        if (!isNaN(parseInt(currItem))) {
            
            //if the user enters operators first and number later it will throw an error
            // + + 5 6 7 8
            if (operatorArr.length >= 1) {
                console.log('You should have number before operators');
                return null;
            //if its in the right format it will push into the number stack
            }else{
                numberArr.push(parseInt(currItem));
            }

        //if current index is NaN it will check for the 4 required operators and will be stored the operatorArr
        } else if (currItem === '+' || currItem === '-' || currItem === '*' || currItem === '/'){
            //checks if user input operator first before a number
            if (numberArr.length === 0) {
                console.log('You must enter number first than operator');
                return null;
            }else{
            //if its in the right format it will push into the operator stack
            operatorArr.push(currItem);
            }
        } else {
            // if any other invalid inputs then it will make it null
            //triggering block 114
            return null;
        }
    }
    // abcde
    // checks if the number stack has any right values
    if(numberArr.length === 0){
        return null
    }
    //if the number of operators are greater then amount of numbers it will perform the right calculations 
    if (operatorArr.length >= numberArr.length) {
        console.log("You have entered too many operators");
        console.log("The correct calculation is below");
        operatorArr = operatorArr.slice(0, numberArr.length - 1);
    }
    //made a new variable and set it to 0 
    //set total to be the last number of the numberArr
    let total = 0;
    total += numberArr[numberArr.length - 1];

    //loops in revearse through the second to last number in the numberArr
    for (let i = numberArr.length - 2; i >= 0; i--) {
        //tracking the current index from the number stack from right to left.
        let currNum = numberArr[i];

        let currOperator = operatorArr[operatorArr.length - 1 - i];
        //its tracking the operator from left to right while the numbers itterate in reverse
            //5 5 5 8 + + -
            //5 5 5 8
            //+ + -
            //5 - 18

            //operatorArr.length - 1 - i
            //3 - 1 - 2
            //3 - 1 - 1
            //3 - 1 - 0

        //checks if the value of the each index and if its equal to the desired operator
        // it will perform the proper calculation
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
    let results = Math.round(1000 * total) / 1000;
    return results;
}

//a new variable to track the results if we want to continue adding to the total 
let globalSum = 0;
console.log("Welcome to the RPN Calculator")
console.log("Please enter your equation in this format: 1 2 3 + *");
console.log("Press q to exit out if needed to be");
console.log("Type clear to empty calculator history");
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
        if (result === null){
            console.log("Invalid try again or enter q to the exit calculator")
          // if the inputs are valid it will run the function
        } else{
            globalSum += result;
            console.log("Your answer is: " + globalSum);
            console.log("Press Q to exit or continue adding numbers in the same format to increase the total");
            console.log("You may clear out the history to try a new calculation by simply typing in clear");
        }
    }
}

//TEST CASES
// console.log("-----Test1----");
// let test1result = snapraiseCalc([5, 5, 5, 8, '+', '+', '-']);
// console.log(test1result === -13 ? 'PASS' : 'FAIL');

// console.log("-------------------------");

// console.log("---Test2---");
// let test2result = snapraiseCalc(['+', '+', 5, 6, 7 , 8]);
// console.log(test2result === null ? 'PASS' : 'FAIL');

// console.log("-------------------------");

// console.log("---Test3---");
// let test3result = snapraiseCalc([5, 9, 1, "-", "/"]);
// console.log(test3result === 0.625 ? 'PASS' : 'FAIL');

// console.log("-------------------------");

// console.log("---Test4---");
// let test4result = snapraiseCalc([5, 6, 7, 8, "+", "/", "*", "*", "/"]);
// console.log(test4result === 2 ? 'PASS' : 'FAIL');

// console.log("-------------------------");

// console.log("---Test5---");
// let test5result = snapraiseCalc("ascsdvsdcda");
// console.log(test5result === null ? 'PASS' : 'FAIL');

// console.log("-------------------------");

// console.log("---Test6---");
// let test6result = snapraiseCalc([-5, 9,"+"]);
// console.log(test6result === 4 ? 'PASS' : 'FAIL');

// console.log("-------------------------");