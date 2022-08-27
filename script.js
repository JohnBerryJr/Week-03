//   1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3,9,23,64,2,8,28,93];
console.log(ages);  // To show the array in on the console

//  a. Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

const firstMinusLast = (ageArray) => {  // Function to easily call.
    let firstAge = ageArray.shift();  // Returns the first number and shifts the array by 1.
    let lastAge = ageArray.pop();  // Returns the last number and removes it from the array.
    console.log(firstAge - lastAge);  // Console Logs the First Age minus the Last Age.
}

firstMinusLast(ages);  // Calls the function to minus the first age and the last age.

//  b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(100,22,69,11,12);  // Adds numbers to the end of the ages array.
console.log(ages);  // Checks to see if push added to the array. Returned [9, 23, 64, 2, 8, 28, 100, 22, 69, 11, 12]
firstMinusLast(ages);  // Calls the function to see if it works with the new array changes.
console.log(ages)  // Checks to see if function worked.  Returned [23, 64, 2, 8, 28, 100, 22, 69, 11]

//  c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let sumOfArray = 0;

for (let i = 0; i < ages.length; i++) {  // For loop to loops through the ages array.
    sumOfArray += ages[i];  // Added the value of each number in the array to sumOfArray per loop.
} 

console.log(Math.floor(sumOfArray / ages.length)); // Logged the average of the array


//  2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

//  a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

let namesLetterCountArray = [];

for (let i = 0; i < names.length; i++) {
    namesLetterCountArray.push(names[i].length);
}
console.log(namesLetterCountArray);  // Checked to see if for loop added name lengths so namesLetterCountArray.

let sumOfNamesLetters = namesLetterCountArray.reduce((total, current) => total + current);  // Reduced to one number to easily calculate average and assigned it.

console.log(Math.floor(sumOfNamesLetters / names.length));  // Logged average of letters per name.

//  b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let concatNames = '';  // Created variable to store concatinated names.

for (let i = 0; i < names.length; i++) {  // Loop to loop through the names array.
    concatNames += names[i] + ' ';  // Added the names to concatNames per loop.
}

console.log(concatNames);  // Logged the concatinated names.

// 3. How do you access the last element of any array?
// Answer:  array.pop

// 4. How do you access the first element of any array?
// Answer:  array[0] or array.shift

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);  // adds the length of each iteration on names to the nameLength's array.
}

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let nameLengthsSum = 0;

for (let i = 0; i < nameLengths.length; i++) {    
    nameLengthsSum += nameLengths[i];  // Adds each iteration of namesLengths to nameLengthsSum.
}

console.log(nameLengthsSum);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

let repeatString = (word, n) => {
   return  word.repeat(n);  // Used .return to repeat the word n amount of times.
}

console.log(repeatString('Hello ', 10))

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

let fullName = (firstName, lastName) => {
    return console.log(`${firstName} ${lastName}`);  // Template literal to combine first and last names
}

fullName('John','Berry');

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let arrayOfNumbers = [1,2,3,4,5];
let greaterThan100 = array => {
    array.reduce((total,current) => total + current);  // .reduce() method to get the sum of the array.
    return console.log(array > 100 ? true : false);  // if statement to return if it's true or false if greater than 100.
}
greaterThan100(arrayOfNumbers);  //  Called function

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

let averageOfArrayElemenets = array => {
    let reduce
    let arrayLength = array.length  // Assigned to the amount of elements in the parameter's array.
    reduce = array.reduce((total,current) => total + current);  // Assigned the sum of array to reduce.
    return console.log(reduce / arrayLength)  // Returned the result of dividing reduce from arrayLength.
}

averageOfArrayElemenets(arrayOfNumbers)  //  Called function

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let firstArray = [34,1,34,66,7,4,7,86,544,3,3,4,6,767,5,6,45,43,7,777];
let secondArray = [45,234,34,34,66,767,44,2,34];

let firstConparedToSecondArray = (array1, array2) => {
    array1 = averageOfArrayElemenets(array1);
    array2 = averageOfArrayElemenets(array2);
    return console.log(array1 > array2 ? true : false);
}

firstConparedToSecondArray(firstArray,secondArray);

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let willBuyDrink = (isHotOutside = true, moneyInPocket = 0) => {
    return console.log(isHotOutside === true && moneyInPocket > 10.50 ? true : false);
}

willBuyDrink(false,11);

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//  ==> Remove an element in the array then create a new array with the returned values.

const originalArray = [2,3,44,1,5,75,1,7,43,1,2,23,55,1,6,,2,4,5,35,454,345,33,,54,4,1,77,8];

const checkElement = (n) => n !== 1;

const removeElement = (a,checkElement) => {
    console.log(a.filter(checkElement));   
}

removeElement(originalArray,checkElement);