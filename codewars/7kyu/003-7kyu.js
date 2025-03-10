function evenLast(numbers) {
    const sum = numbers.reduce((result, val, i) => {
        return (result += Number.isInteger(val) && i % 2 === 0 ? val : 0);
    }, 0);
    return sum * numbers[numbers.length - 1] || 0;
}

console.log(evenLast([2, 3, 4, 5]));
console.log(evenLast([0]));

// Other solutions:
// function evenLast(numbers) {
//     if (numbers.length === 0) return 0;
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i += 2) {
//       sum += numbers[i];
//     }
//     return sum * numbers[numbers.length - 1];
//   }

// const evenLast = (n) => n.reduce((p, c, i) => (i % 2 ? p : p + c), 0) * n[n.length - 1] || 0;

// const evenLast = (arr) =>
//     arr.filter((e, i) => i % 2 === 0).reduce((a, b) => a + b, 0) * arr[arr.length - 1] || 0;

// Evens times last

// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL),
// multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// function evenLast(numbers) {
//     // Good luck
//   }
