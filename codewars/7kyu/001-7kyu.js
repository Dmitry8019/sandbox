// 97 - 122
// 65-90
// 48-57

function countLettersAndDigits(input) {
    // const result = input.split('').reduce((result, _, i) => {
    //     const letter = input.charCodeAt(i);
    //     if (
    //         (letter > 47 && letter < 58) ||
    //         (letter > 64 && letter < 91) ||
    //         (letter > 96 && letter < 123)
    //     ) {
    //         return (result += 1);
    //     }
    //     return result;
    // }, 0);

    // return result;

    return typeof input === 'string' && input ? input.match(/[a-z0-9]/gi)?.join('').length || 0 : 0;
}

console.log(countLettersAndDigits('hel2!loO'));
console.log(countLettersAndDigits([]));

// Other solutions:
// function countLettersAndDigits(s) {
//     return s.replace(/[^a-z\d]/gi,"").length;
//   }

// function countLettersAndDigits(input) {
//     return (input.match(/[a-z0-9]/gi) || []).length
//   }

// function countLettersAndDigits(input) {
//     return input.replace(/[\W_]/g, '').length;
// }

// Help Bob count letters and digits.

// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

// function countLettersAndDigits(input) {
//     return 0;
//   }
