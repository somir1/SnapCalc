# RPN(revearse polish notation) calcualator

## Description
My solution started off as taking the input and seperating them in to 2 arrays where one array is for operators and the other for numbers. Once I got that settled I needed to loop through the numbers array and operator array and start adding my if/else statments to do proper calculations once a certain operator was found in the operator array. When it came to the numbers array I realised the hard way that the number array was starting off as a string which when I found out that they needed to be intergers which is why parsed the values to integers. After I got my if/else statment settled I started using the test case from the instructions and found out I am not getting the correct output. It then came to my attention that the numbers array needed to be going from right to left instead of left to right which is when I started looping through the array in revearse starting from the second to last number in the array then I set the variable named total to equal to 0 and added the last number from the number array. So that variable total would be used as a base for the mathimatical equations starting from the second to last number then going backwards, once I got that running my final answer was still wrong when it came to subtraction and division. After running into that issue I found out that when it comes doing the calculations for subtraction and division it run from left to right. It was challenging to build but once I got a basic functionality in thats when I started coming up with edge cases.

## Tradeoffs/etc
Trade offs that I had was balancing errors from the the user experiance to the function side, since I was adding all my edge cases on the user side which was a going to be a problem. Thats when I started adding my edge cases to the functional side because thats where everything runs. Most of my time went with coming up with edge cases for a RPN calculator is quite alot and after figuring out and adding them in I started adding test cases and learned more how to use tenery operators. So increased lines of code to account to check the user input to be validated for our edge cases. If I had more it could have been spent with working more on the user experience to give it an enhanced look.

## Edge cases
1. Invalid charcters
2. If you put operators before numbers
3. If you have a blank input
4. Clearing the history like a real calculator 
5. If you have more operators then numbers
6. Any other invalid inputs
7. Able to continue adding more to previous answer

Readme
------

Write your README as if it was for a production service. Include the following items:

* A high-level description of your solution
* Reasoning behind your technical choices, including architectural
* Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project
* How to run your code, if applicable
* Link to the hosted application, if applicable