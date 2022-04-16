# RPN(revearse polish notation) calcualator

## Instructions
1. Node.js is required please check if your system has it installed if not please download
2. Clone respository by using this command: git clone https://github.com/somir1/SnapCalc.git
3. Open terminal/comand prompt cd into folder location
4. Run this command to install the dependencies: 
5. npm install
6. Execute the program using the command: node snapCalc.js

## Description
My solution started off as taking the input and seperating them in to 2 arrays where one array is for operators and the other for numbers. Once I got that settled I needed to loop through the numbers array and operator array and start adding my if/else statments to do proper calculations once a certain operator was found in the operator array. When it came to the numbers array I realised the hard way that the number array was starting off as a string which when I found out that they needed to be intergers which is why parsed the values to integers. After I got my if/else statment settled I started using the test case from the instructions and found out I am not getting the correct output. It then came to my attention that the numbers array needed to be going from right to left instead of left to right which is when I started looping through the array in revearse starting from the second to last number in the array then I set the variable named total to equal to 0 and added the last number from the number array. So that variable total would be used as a base for the mathimatical equations starting from the second to last number then going backwards, once I got that running my final answer was still wrong when it came to subtraction and division. After running into that issue I found out that when it comes doing the calculations for subtraction and division it run from left to right. It was challenging to build but once I got a basic functionality in thats when I started coming up with edge cases.

## Tradeoffs/etc
Trade offs that I had was balancing errors from the the user experiance to the function side, since I was adding all my edge cases on the user side which was a going to be a problem. Thats when I started adding my edge cases to the functional side because thats where everything runs. Most of my time went with coming up with edge cases for a RPN calculator is quite alot and after figuring out and adding them in I started adding test cases and learned more how to use tenery operators. So increased lines of code to account to check the user input to be validated for our edge cases. If I had more time it could have been spent with working more on the user experience to give it an enhanced look and fine tuning the edge cases.

## Edge cases
1. Invalid charcters: abcde
2. If you put operators before numbers: + + + 5 6 7 8
3. If you have a blank input
4. If you have more operators then numbers:  5 6 + * / -
5. Any other invalid inputs: 5 12 3 + / 10 13, 5 5 5 ++
6. You enter an operator with out a number when you input values on one line: + + -
7. If you entered numbers with out operators