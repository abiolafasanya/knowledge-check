console.log("I'm Abiola Fasanya and this is my solution")
console.log("Beginning of solution")
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log()
// Assessent One ✅
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
const capWordsLetters = (input = "prof is doing well!") => {
  console.log("Your Input: ", input);
  const newWordArr = input.split(" ");
  const capitalizeEachArrItem = newWordArr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const result = capitalizeEachArrItem.join(" ");
  console.log("output result: ", result);
  return result;
};

capWordsLetters();

// Assessent Two ✅
// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
const findLongestWord = (word = "This is the second assessment implement") => {
  console.log("Input: ", word);
  const wordToArr = word.split(" ");
  const checkWord = wordToArr.map((word) => {
    return { word: word, length: word.length };
  });
  let longestWord = "";
  checkWord.forEach((item) => {
    if (item.length > longestWord.length) {
      longestWord = item.word;
    }
  });
  console.log("Longest word:", longestWord);
  return longestWord;
};

findLongestWord();

// ✅Assessent Three
// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.

const findPrimeNumber = (numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => {
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    const sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const primeNumbers = numberArr.filter((num) => isPrime(num));
  console.log("Prime Numbers: ", primeNumbers);
  return primeNumbers;
};

findPrimeNumber();

// Assessent Four ✅
// Write a JavaScript function that accepts an argument and returns the type.
const findArgType = (arg) => {
  const argType = typeof arg;
  console.log("Argument Type: ", argType);
  return argType;
};
findArgType();


// Assessent Five ✅
// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
const findLowestAndHighestValue = (arr = [1, 2, 3, 4, 5, 6, 7, 8]) => {
  if (arr.length === 0) {
    console.log("Array is empty.");
    return { lowest: undefined, highest: undefined };
  }

  let lowest = arr[0];
  let highest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  console.log("Lowest Value: ", lowest);
  console.log("Highest Value: ", highest);

  return { lowest, highest };
};

findLowestAndHighestValue();
console.log()
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log('Solution End!')
