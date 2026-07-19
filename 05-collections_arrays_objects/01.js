/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */

let roomItems = ["chair", "keyboard", "monitor", "mouse", "notebook"];

let drawerOne = ["pen", "paper", "stapler", "clips", "tape"];
let drawerTwo = ["cable", "charger", "headphones", "adapter", "flash drive"];
let drawerThree = ["book", "lamp", "water bottle", "sunglasses", "snacks"];

let storage = [drawerOne, drawerTwo, drawerThree];

console.log(storage[0][0]);
console.log(storage[0][4]);
console.log(storage[1][2]);
console.log(storage[2][1]);
console.log(storage[2][4]);

let numbers = [];

for (let number = 1; number <= 100; number += 1) {
  numbers.push(number);
}

let sumOfNumbers = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sumOfNumbers += numbers[i];
}

console.log(sumOfNumbers);

let randomNumbers = [];

for (let i = 0; i < 100; i += 1) {
  randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}

let oddNumbers = [];
let evenNumbers = [];

for (let i = 0; i < randomNumbers.length; i += 1) {
  let randomNumber = randomNumbers[i];

  if (randomNumber % 2 === 0) {
    evenNumbers.push(randomNumber);
  } else {
    oddNumbers.push(randomNumber);
  }
}

function sumArray(numbersToAdd) {
  let total = 0;

  for (let i = 0; i < numbersToAdd.length; i += 1) {
    total += numbersToAdd[i];
  }

  return total;
}

console.log(sumArray(oddNumbers));
console.log(sumArray(evenNumbers));
