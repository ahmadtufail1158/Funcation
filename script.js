// function addNumbers(num1, num2) {
//       return num1 + num2;
//   }
  
//   console.log(addNumbers(2, 3)); // Output: 5
//   console.log(addNumbers(5, 1)); // Output: 6






// function toUpper(str) {
//     if (typeof str !== 'string') {
//       return null;
//     } else {
//       return str.toUpperCase();
//     }
//   }
  
//   console.log(toUpper("hello")); // Output: HELLO
//   console.log(toUpper("world")); // Output: WORLD







// function averageArray(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//       return null;
//     }
    
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] !== 'number') {
//         return null;
//       }
//       sum += arr[i];
//     }
    
//     return sum / arr.length;
//   }
  
//   console.log(averageArray([1, 2, 3])); // Output: 2
//   console.log(averageArray([5, 5, 5])); // Output: 5








// function removeVowels(str) {
//     if (typeof str !== 'string') {
//       return null;
//     }
    
//     return str.replace(/[aeiouAEIOU]/g, '');
//   }
  
//   console.log(removeVowels("hello world")); // Output: hll wrld
//   console.log(removeVowels("javascript")); // Output: jvscrpt







// function factorial(n) {
//     if (typeof n !== 'number' || n < 0 || n % 1 !== 0) {
//       return null;
//     }
    
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
    
//     return result;
//   }
  
//   console.log(factorial(5)); // Output: 120
//   console.log(factorial(3)); // Output: 6







// function reverseString(str) {
//     if (typeof str !== 'string') {
//       return null;
//     }
    
//     if (str.length === 0) {
//       return '';
//     } else {
//       return reverseString(str.slice(1)) + str[0];
//     }
//   }
  
//   console.log(reverseString("hello")); // Output: olleh
//   console.log(reverseString("world")); // Output: dlrow
// }