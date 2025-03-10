function vowel2index(str) {
    console.log(str.split(''));
    return str
        .split('')
        .map((letter, i) => {
            return 'aeiou'.split('').includes(letter.toLowerCase()) ? i + 1 : letter;
        })
        .join('');
}

console.log(vowel2index('this is my string'));

// Others solutions:
// function vowel2index(str) {
//     return str.replace(/[aeiou]/ig, (m, i) => i + 1);
//  }

// const vowel2index = str => str.replace(/[aeiou]/gi,(_,i) => i+1);

// function vowel2index(str) {
//     return str.replace(/[aeiou]/ig, function(match, idx) { return idx + 1; });
// }

// function vowel2index(str) {
//     return str.replace(/[aeiou]/gi, (_, i) => i + 1);
// }

// The old switcheroo

// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

// function vowel2index(str) {
//     //code me
//  }
