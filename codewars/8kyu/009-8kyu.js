function whatday(num) {
    if (num < 1 || num > 7) {
        return 'Wrong, please enter a number between 1 and 7';
    }
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(`2024-12-${num}`));
}

console.log(whatday(0));

// Other solutions:
// function whatday(num) {
//     switch(num) {
//       case 1:
//         return "Sunday";
//       case 2:
//         return "Monday";
//       case 3:
//         return "Tuesday";
//       case 4:
//         return "Wednesday";
//       case 5:
//         return "Thursday";
//       case 6:
//         return "Friday";
//       case 7:
//         return "Saturday";
//       default:
//         return 'Wrong, please enter a number between 1 and 7';
//     }
//   }

// function whatday(num) {
//     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
//   }

// whatday = n => {
//     switch (n) {
//       case 1: return 'Sunday';
//       case 2: return 'Monday';
//       case 3: return 'Tuesday';
//       case 4: return 'Wednesday';
//       case 5: return 'Thursday';
//       case 6: return 'Friday';
//       case 7: return 'Saturday';
//       default: return 'Wrong, please enter a number between 1 and 7';
//     }
//   }

// whatday=n=>[,'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][n]||'Wrong, please enter a number between 1 and 7'

// function whatday(num) {
//     return num && num < 8 ? new Date(0, 0, num-1).toLocaleString('en',{weekday:'long'}) :
//     'Wrong, please enter a number between 1 and 7';
//   }

// Return the day

// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

// function whatday(num) {
//     // put your code here
//   }
