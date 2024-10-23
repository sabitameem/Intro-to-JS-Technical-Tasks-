// 1. Variables Naming Convention
// Declaring variables and printing them
let firstName = "Kabir";
let lastName = "Safir";
let age = 25;
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);


// 2. Sum, Difference, and Product of two numbers
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);


// 3. Data Types: String, Number, Boolean
let myString = "Hello";
let myNumber = 100;
let myBoolean = true;
console.log("String:", myString, "Type:", typeof myString);
console.log("Number:", myNumber, "Type:", typeof myNumber);
console.log("Boolean:", myBoolean, "Type:", typeof myBoolean);


// 4. If-Else Condition: Check if a number is even or odd
let checkNumber = 7;
if (checkNumber % 2 === 0) {
    console.log(checkNumber + " is even");
} else {
    console.log(checkNumber + " is odd");
}


// 5. Change Background Color of Webpage
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}


// 6. Run JS in Browser: Print "Hello, World!" to console
console.log("Hello, World!");


// 7. let Keyword: Declare inside block
if (true) {
    let blockScoped = "I'm inside the block";
    console.log(blockScoped); // Works fine
}
// console.log(blockScoped); // Uncaught ReferenceError: blockScoped is not defined


// 8. Difference Between Variable Declaration & Initialization
let uninitializedVar;
console.log("Before initialization:", uninitializedVar); // undefined
uninitializedVar = 10;
console.log("After initialization:", uninitializedVar); // 10


// 9. Equal vs Strict Equal Operator
let equalTest1 = 5 == '5'; // true, because == allowstype conversion
let strictEqualTest1 = 5 === '5'; // false, because === checks both value and type
console.log("5 == '5':", equalTest1);
console.log("5 === '5':", strictEqualTest1);


// 10. Find the Data Type of a Variable
let randomVar = "Hello";
console.log("Data type of randomVar:", typeof randomVar);


// 11. Temperature Check
let temperature = 30;
if (temperature > 35) {
    console.log("It's Hot");
} else if (temperature > 20) {
    console.log("It's Warm");
} else {
    console.log("It's Cold");
}


// 12. Comparison Operators
let number1 = 15;
let number2 = 10;
if (number1 > number2) {
    console.log(number1 + " is greater than " + number2);
} else if (number1 < number2) {
    console.log(number1 + " is less than " + number2);
} else {
    console.log(number1 + " is equal to " + number2);
}


// 13. Check if Number is Positive, Negative, or Zero
let checkNum = -10;
if (checkNum > 0) {
    console.log(checkNum + " is positive");
} else if (checkNum < 0) {
    console.log(checkNum + " is negative");
} else {
    console.log(checkNum + " is zero");
}


// 14. let in a Loop
for (let i = 0; i < 3; i++) {
    console.log("Inside loop:", i);
}
// console.log(i); // Uncaught ReferenceError: i is not defined (since let is block scoped)


// 15. const Keyword
const PI = 3.14159;
console.log("PI value:", PI);
// PI = 3.14; // Uncaught TypeError: Assignment to constant variable.


// 16. Find Data Type of a Boolean Variable
let isBoolean = false;
console.log("Data type of isBoolean:", typeof isBoolean);


// 17. Positive, Negative or Zero with Function
function checkNumberType(num) {
    if (num > 0) {
        return num + " is positive";
    } else if (num < 0) {
        return num + " is negative";
    } else {
        return num + " is zero";
    }
}
console.log(checkNumberType(15));
console.log(checkNumberType(-5));
console.log(checkNumberType(0));


// 18. Exam Score Grading
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


// 19. Strict Not Equal To Operator
let strictNotEqual1 = (5 !== '5'); // true, because !== checks both value and type
let strictNotEqual2 = (5 !== 5);   // false, both are same value and type
console.log("5 !== '5':", strictNotEqual1);
console.log("5 !== 5:", strictNotEqual2);


// 20. Age Check
let personAge = 16;
if (personAge < 13) {
    console.log("Child");
} else if (personAge >= 13 && personAge < 20) {
    console.log("Teenager");
} else {
    console.log("Adult");
}
