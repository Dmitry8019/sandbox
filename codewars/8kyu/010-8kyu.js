function correctPolishLetters(string) {
    const replacementMap = {
        ą: 'a',
        ć: 'c',
        ę: 'e',
        ł: 'l',
        ń: 'n',
        ó: 'o',
        ś: 's',
        ź: 'z',
        ż: 'z',
    };
    return string
        .split('')
        .reduce((result, letter) => (result += replacementMap[letter] || letter), '');

    // Another solution
    // let newString = '';
    // for (let i = 0; i < string.length; i++) {
    //     newString += replacementMap[string[i]] || string[i];
    // }
    // return newString;
}

// Other solutions
// function correctPolishLetters(string) {
//     var dict = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' };
//     return string.replace(/[ąćęłńóśźż]/g, (match) => dict[match]);
// }

// function correctPolishLetters(s) {
//     return s.replace(/[ąćęłńóśźż]/g, (c) => 'acelnoszz'['ąćęłńóśźż'.indexOf(c)]);
// }

console.log(correctPolishLetters('Jędrzej Błądziński'));
// console.log(correctPolishLetters('ćą'));

// Polish alphabet

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// function correctPolishLetters (string) {
//     // your code
//   }
