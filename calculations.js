//Defining the findsum function and ensuring the input is an array of numbers
function findSum(numbers) {
  if (!Array.isArray(numbers)) {
    return " Please provide an array of integers";
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

//subtract the second number from the first
function subtractNumbers(num1, num2) {
  return num2 - num1;
}

// multiply two numbers
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

// divide the first number by the second, handling division by zero
function divideNumbers(num1, num2) {
  if (num2 === 0) {
    return "Division by 0 is invalid";
  }
  return num1 / num2;
}

//Create an array with 3 integers
const numbersArray = [2, 1, 4];

//Call the findSum function and log its return
const sumOfArray = findSum(numbersArray);
console.log(`The sum of the array is ${sumOfArray}`);

// Call subtractNumbers using the first and second numbers from the array
const numberSubract = subtractNumbers(numbersArray[1], numbersArray[0]);
console.log(
  `The first number subracted from the second number is ${numberSubract}`
);

// Call multiplyNumbers using the third and first numbers from the array
const multiplacation = multiplyNumbers(numbersArray[2], numbersArray[0]);
console.log(`The first number multiplied number is ${multiplacation}`);

// Call divideNumbers using the sum of all three numbers and the third number from the array
const divisionResult = divideNumbers(sumOfArray, numbersArray[2]);
console.log(
  `The result of dividing the sum of the array by the third number is: ${divisionResult}`
);
