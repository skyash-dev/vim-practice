// Welcome to your JavaScript practice file in Vim!

// Try moving around the code using normal mode keys: 
// h (left), l (right), j (down), k (up)

// Task 1: Write a function that takes two numbers and returns their sum.
function sum(a,b){
return a+b;
}

let ans = sum(5,10)
console.log(ans)

// Practice editing the function:
// - Change the function name to 'sum'.
// - Add a console.log to print the result of calling the function with arguments 5 and 10.

// Task 2: Write a function to check if a number is even or odd.
function isEven(num) {
	if(num%2==0){
		return 'Even';
	}
	else{
		return 'Odd';
	}

}
let res = isEven(6)
console.log(res)

// - Modify the function to return 'Even' or 'Odd' instead of true/false.
// - Add a test case with a number of your choice.

// Task 3: Write an array of numbers and print each number.
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});

// Extra JavaScript tasks for you to explore:
// 1. Create an object representing a person with name and age.
// 2. Write a function to update the person's age and print the updated object.

// Insert mode practice: Move to any line, press 'i' to enter insert mode, and type your code!
// Remember to use ESC to go back to normal mode, and use your movement keys to navigate.

