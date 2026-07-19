function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */

let number = 5;

while (number <= 1000) {
  console.log(number);
  number += 5;
}

let countDown = 100;

while (countDown >= -100) {
  console.log(countDown);
  countDown -= 1;
}

let sequence = 0;
let step = 3;

while (sequence < 5000) {
  console.log(step);

  if (step % 2 === 1) {
    step -= 1;
  } else {
    step += 3;
  }

  sequence += 1;
}

let randomNumber = getRandomNumber();

while (randomNumber % 11 !== 0) {
  randomNumber = getRandomNumber();
}

console.log(randomNumber);
