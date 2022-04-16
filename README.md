# RPN(revearse polish notation) calcualator

## Instructions
1. Node.js is required please check if your system has it installed if not please download
2. Clone respository by using this command: git clone https://github.com/somir1/SnapCalc.git
3. Open terminal/comand prompt cd into folder location
4. Run this command to install the dependencies: 
5. npm install
6. Execute the program using the command: node snapCalc.js

## Description
My solution started off by getting the simple mechanics to work, which was to get the base calculations to start working and testing to see if that works. Once the main functionality started working. I started runnning some test cases from the instructions and started getting the incorrect output which made me realize that when it came to subtraction and division the order of operations goes from left to right. Afterwards I needed to start getting the user input to work with the calculation function which was a bit difficult because what if the user inputs everything either on one line or one by one. I decided to make another function works directly with the users input. It works by taking the users input and turning it into an array which runs a loop checking each value and seperating it and putting it in its respective arrays. It then came to fine tuning this function with the edge cases(as seen below).

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