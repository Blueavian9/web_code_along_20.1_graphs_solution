/* 
PLAN: 

1. if denominator is 0 return 0.

2. else return numerator / denominator

3. 

*/

// function solution(numerator, denominator) {
//   if (denominator == 0) {
//     return 0;
//   } else {
//     return numerator / denominator;
//   }
// }

// console.log(solution(12, 0)); // Output: 0

/* Description 1
Normally, dividing by zero is a bad thing that will cause programs to crash.
Write a safer division function that returns the division of two numbers
(the numerator divided by the denominator) unless the denominator is 0,
in which case it should return 0 instead of crashing.

Example
Input:

numerator = 1
denominator = 2
Output:

0.5
Input:


numerator = 12
denominator = 0
Output:

0
*/
// --------------------------------------------------------

// function solution(letter, s) {
//   let count = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (letter == s[i]) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(solution("b", "bacab")); // Output: 2

/* 
PLAN: 
1.Initialize count of 0.
2.loop through a string
3. if letter  == s[i] also increment count
4. Return a count 
*/

/*
Description 2
Count the number of occurrences of a letter in a string.

Example
Input:

s == "bacab"
letter = "b"
Output:

2
Input:

s == "abbb"
letter == "a"
Output:

1
*/

// ----------------------------------------------------------

/*
Description 3
This function accepts an array. 
It should return the sum of all elements in the array.

If the input array is empty, return 0.

Example
Input:

a == [0, 1, 2, 3]
Output:

6
Input/Output

*/
