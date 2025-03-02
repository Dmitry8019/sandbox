function findAverage(array) {
    const length = array.length;
    return length > 0 ? array.reduce((sum, number) => sum + number, 0) / length : 0;

    // Other solutions:
    // return array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;
}

console.log(findAverage([1, 2, 3, 4]));
// console.log(findAverage([]));

// Calculate average

// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// function findAverage(array) {
//     // your code here
//     return 0;
//   }
