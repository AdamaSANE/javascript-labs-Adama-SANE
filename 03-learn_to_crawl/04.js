/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 *
 * After creating the variables, do the
 * following without typing any more numbers.
 *
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 *
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up
 * with clear and descriptive names.
 */

// Trois nombres (au moins 4 chiffres) et le "luckyNumber"
let n1 = 3874;
let n2 = 2398;
let n3 = 4821;
let luckyNumber = 7;

// Calculs demandés (aucun nouveau nombre littéral utilisé)
let sumAll = n1 + n2 + n3 + luckyNumber;
let sumThree = n1 + n2 + n3;

let largest = Math.max(n1, n2, n3);
let smallest = Math.min(n1, n2, n3);
let sumSmallestTwo = sumThree - largest;
let subtractTwoFromLargest = largest - sumSmallestTwo;

let productAll = n1 * n2 * n3 * luckyNumber;

let middle = sumThree - largest - smallest;
let differenceBetweenSmaller = Math.abs(middle - smallest);
let divisionResult = largest / differenceBetweenSmaller;

let moduloResult = sumThree % luckyNumber;

// Affichage avec étiquettes claires
console.log("Sum of all numbers:", sumAll);
console.log("Largest minus two smallest:", subtractTwoFromLargest);
console.log("Product of all numbers:", productAll);
console.log(
  "Largest divided by difference between smaller ones:",
  divisionResult,
);
console.log("Sum of the three numbers modulo luckyNumber:", moduloResult);
