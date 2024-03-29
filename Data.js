// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
//console.log(n1, n2, n3, n4);

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
//console.log(issSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
//console.log(isTwoOdd);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
//console.log(isOver25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
//console.log(isUnique);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
//console.log(isValid);
//console.log(`is Valid ${isValid}`)

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

 //*comparisons and operations*/
 //Check if all numbers are divisible by 5
 //Check if the first number is larger than the last
 //Cache the result in a variable
 let allDivisibleBy5 = true;
 //console(allDivisibleBy5);
 let firstNumberisLargerthanLast = true;
 //console.log(firstNumberisLargerthanLast);
 let resultisVariable = true;
 //console.log(resultisVariable);


  //The distance of the trip, in total, is 1,500 miles.
//Your car’s fuel efficiency is as follows:
//At 55 miles per hour, you get 30 miles per gallon.
//At 60 miles per hour, you get 28 miles per gallon.
//At 75 miles per hour, you get 23 miles per gallon.
//You have a fuel budget of $175.
//The average cost of fuel is $3 per gallon.

//How many gallons of fuel will you need for the entire trip?


// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. 
//Which makes the most sense for the trip?
// At 55 miles per hour, you get 30 miles per gallon.
// let gallons = A / 30;
// console.log(gallons);
// 50//
// let budget = B * gallons;
// console.log(budget);
// //150//
// let trip = A / 55;
// console.log(trip);
// 27.272727272727273
//At 60 miles per hour, you get 28 miles per gallon.
//At 75 miles per hour, you get 23 miles per gallon.