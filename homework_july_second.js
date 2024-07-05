// Exercise: Convert Temperatures
// You have an array of temperatures in Celsius, and you need to convert each temperature to Fahrenheit.
// The formula to convert Celsius to Fahrenheit is:
// Here's the array of temperatures in Celsius:
// const temperaturesInCelsius = [0, 10, 20, 30, 40, 50];
// For the given input, the output should be: [32, 50, 68, 86, 104, 122]
// Fahrenheit = (Celsius * 9/5) + 32

const temperaturesInCelsius = [0, 10, 20, 30, 40, 50];
const expectedOutput = [32, 50, 68, 86, 104, 122];

const convertCelsiusToFahrenheitUsingForLoop = (celsius) => {
  const result = [];

  for (let i = 0; i < celsius.length; i++) {
    const fahrenheit = (celsius[i] * 9) / 5 + 32;
    result.push(fahrenheit);
  }

  return result;
};
console.log(convertCelsiusToFahrenheitUsingForLoop(temperaturesInCelsius));

const convertCelsiusToFahrenheitUsingForEach = (celsius) => {
  const result = [];

  celsius.forEach(function (temp) {
    const fahrenheit = (temp * 9) / 5 + 32;
    result.push(fahrenheit);
  });

  return result;
};

console.log(convertCelsiusToFahrenheitUsingForEach(temperaturesInCelsius));

const convertCelsiusToFahrenheitUsingMap = (celsius) =>
  celsius.map(function (temp) {
    return (temp * 9) / 5 + 32;
  });

console.log(convertCelsiusToFahrenheitUsingMap(temperaturesInCelsius));

// Exercise: Filter Even Numbers
// You have an array of numbers, and you need to filter out the odd numbers, leaving only the even numbers.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected Output: [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const expectedOutputEvenNumbers = [2, 4, 6, 8, 10];

const filterEvenNumbersUsingForLoop = (numbers) => {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }

  return result;
};

console.log(filterEvenNumbersUsingForLoop(numbers));

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers);

// Exercise: Processing Student Scores
// You have an array of student objects. Each student object contains the name of the student and their score. You need to:
// Filter out the students who scored below 60 (passing score).
// Create a new array of strings with the names of the students who passed and their scores, formatted as "Student Name: Score".

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 58 },
  { name: "Charlie", score: 92 },
  { name: "David", score: 45 },
  { name: "Eve", score: 70 },
  { name: "Frank", score: 55 },
  { name: "Grace", score: 60 },
];

const expectedStudentsOutput = [
  "Alice: 85",
  "Charlie: 92",
  "Eve: 70",
  "Grace: 60",
];

console.log(
  students
    .filter((student) => student.score >= 60)
    .map((student) => `${student.name}: ${student.score}`)
);
