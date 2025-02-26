function replace(s) {
    const regexp = /a|e|i|o|u|A|E|I|O|U/g;
    return s.replace(regexp, '!');

    // Other solutions:
    // return s.replace(/[aeoiu]/gi, '!');
    // return s.replace(/[aeiouAEIOU]/g,'!');
    // return s
    //     .split('')
    //     .map((e) => ('aeiou'.includes(e.toLowerCase()) ? '!' : e))
    //     .join('');
}

console.log(replace('abcde'));
console.log(replace(''));

// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// function replace(s) {
//     //coding and coding....
//       return '';
//   }
