// Create an array of 5 numbers. Write a program to find the sum of all numbers using a loop.

// let arr = [1,2,3,4,5]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }

// console.log(sum)

// Create an array of fruits like ["apple", "banana", "mango"].
// Add "orange" at the end and "grapes" at the start.
// Then print the final array.

// let frous = ['apple','banana', 'grapes']

// frous.push('orange')
// frous.unshift('gava')

// console.log(frous)

// Write a program that finds the largest number in an array.
// Example: [2, 10, 4, 8, 6] → Output: 10

// let arr =  [2, 10, 4, 8, 6]
// let largest = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i]
//     }
// }

// console.log(largest)

// Create an object person with properties:
// name, age, city.
// Then print all keys and values using a for...in loop.

// let obj = {
//     name : "zubi",
//     age : '20',
//     city : "attock"
// }

// for (const key in obj) {
//     console.log(key + ":", obj[key]);
// }

// Create an object car with keys brand, model, and price.
// Add a new property "color" to it after creation and display the updated object.

// let obj = {
//     brand : 'toyota',
//     model : 'pakistan',
//     price : 2000
// }

// obj.color = 'green';

// console.log(obj)

// let students = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 19 },
//   { name: "Zain", age: 22 }
// ];

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name);
// }

// let arr = [10,10,20,30,10]

// function getAverage(val) {
//     let sum = 0;
//     for (let i = 0; i < val.length; i++) {
//         sum += val[i]
//     }

//     let Average = sum/val.length;
//     return Average
// }

// console.log((getAverage([1,2,3,4,5])))

// let numbers = [1, 2, 3, 4, 5];

// let result = numbers.map((val)=>{
//    return val * 2
// })

// console.log(result)

// let students = [
//   { name: "Ali", marks: 82 },
//   { name: "Sara", marks: 67 },
//   { name: "Zain", marks: 90 },
//   { name: "Hira", marks: 49 }
// ];

// let pass = students.filter((val)=>{
//     return val.marks >= 50
// })

// console.log(pass)

// let fail = students.filter((val)=>{
//     return val.marks <= 50
// })

// console.log(fail)

// Print all products that cost less than 10,000, and also calculate the total price of those filtered products.

// let products = [
//   { name: "Laptop", price: 80000 },
//   { name: "Mouse", price: 1500 },
//   { name: "Keyboard", price: 4000 },
//   { name: "Monitor", price: 25000 }
// ];

//     let affordableProducts = products.filter(val => val.price < 10000)

//     console.log(affordableProducts)

//     // Calculate and print the total price of filtered products
//     let total = affordableProducts.reduce((sum, product) => sum + product.price, 0);
//     console.log("Total price of filtered products:", total);

// Find the city with the highest population and print its name.

// let cities = [
//   { name: "Lahore", population: 12000000 },
//   { name: "Karachi", population: 16000000 },
//   { name: "Islamabad", population: 2000000 }
// ];

// let sum = 0;
// let newcity = ''

// for (let i = 0; i < cities.length; i++) {
//     if (cities[i].population > sum) {
//         sum = cities[i].population
//         newcity = cities[i].name
//     }
// }

// console.log(sum,newcity)

// Write a function searchBook(title) that returns the book object if the title matches (case-insensitive).

// let library = [
//   { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
//   { title: "Atomic Habits", author: "James Clear" },
//   { title: "Ikigai", author: "Hector Garcia" }
// ];

// function searchBook(title) {
//     let lowerTitle = title.toLowerCase();

//     for (let i = 0; i < library.length; i++) {
//         if (library[i].title.toLowerCase() === lowerTitle) {
//             return library[i];
//         }
//     }
//     return null; // Return null if not found for clarity
// }

// console.log(searchBook('ikigai')); // Corrected spelling and added console.log to see the result

// If an employee has worked 3 or more years, they get a 10% bonus.
// Calculate and print each employee’s new salary.

// const employees = [
//   { name: "Ahmed", salary: 40000, years: 2 },
//   { name: "Bilal", salary: 60000, years: 5 },
//   { name: "Sana", salary: 35000, years: 3 }
// ];

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].years >= 3) {
//         employees[i].salary = employees[i].salary + (employees[i].salary * 0.10);
//     }
//     console.log(`${employees[i].name}'s new salary: ${employees[i].salary}`);
// }

// Write code to reduce stock by 1 every time an item is sold (e.g., "Notebook" sold once).
// Then print the updated inventory

// let inventory = [
//   { item: "Pen", stock: 30 },
//   { item: "Notebook", stock: 10 },
//   { item: "Pencil", stock: 50 }
// ];

// // Reduce stock by 1 for "Notebook"
// for (let i = 0; i < inventory.length; i++) {
//   if (inventory[i].item === "Notebook") {
//     inventory[i].stock -= 1;
//     break;
//   }
// }

// console.log(inventory);

// Write a program to calculate the average rating of all movies.

// let movies = [
//   { title: "Inception", rating: 9 },
//   { title: "Avengers", rating: 8 },
//   { title: "Joker", rating: 8.5 }
// ];

// let sum = 0;
// for (let i = 0; i < movies.length; i++) {
//     sum += movies[i].rating;
// }

// let average = sum / movies.length;
// console.log(average);

// Write a function that returns the total cost of all items in the cart.

// let cart = [
//   { item: "Shoes", price: 2500, quantity: 2 },
//   { item: "Shirt", price: 1200, quantity: 1 },
//   { item: "Watch", price: 3000, quantity: 1 }
// ];

// let totalCost = 0;
// for (let i = 0; i < cart.length; i++) {
//     totalCost += cart[i].price
// }

// console.log(totalCost)

// Write a function that takes "Pakistan" and returns "PK" — i.e., the key for a given value.

// let countryCodes = { PK: "Pakistan", IN: "India", US: "United States" };

// function cn(val) {
//     for (const key in countryCodes) {
//         if (countryCodes[key].toLowerCase() === val.toLowerCase()) {
//             return key;
//         }
//     }
//     return null;
// }

// console.log(cn("India"));

// let arr1 = [{ id: 1, name: "Ali" }, { id: 2, name: "Sara" }];
// let arr2 = [{ id: 1, age: 20 }, { id: 2, age: 22 }]

// Combine them into:
// [
//   { id: 1, name: "Ali", age: 20 },
//   { id: 2, name: "Sara", age: 22 }
// ]

// let result = [];
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i].id === arr2[j].id) {
//             result.push({ ...arr1[i], ...arr2[j] });
//        }
//     }
// }
// console.log(result);

// let unit =  Number(prompt("Enter a number: ")); //700
// let amount = 0;
// if (unit >= 400) {
//     amount = (unit - 400) * 13;
//     unit = 400
// }
// if (unit >= 200 && unit <= 400) {
//     amount += (unit - 200) * 8;
//     unit = 200;
// }
// if (unit >= 100 && unit <= 200) {
//     amount += (unit - 100) * 6;
//     unit = 100;
// }
// amount += unit*4

// console.log(amount)

// let amount = 3245;

// if (amount >= 5000) {
//    console.log('5000', Math.floor((amount/5000)));
//    amount = amount % 1000
// }
// if (amount >=1000) {
//    console.log('1000', Math.floor((amount/1000)));
//    amount = amount % 500;
// }
// if (amount >=500) {
//    console.log('500', Math.floor((amount/500)));
//    amount = amount % 100;
// }
// if (amount >=100) {
//    console.log('100', Math.floor((amount/100)));
//    amount = amount % 50;
// }
// if (amount >= 50) {
//    console.log('50', Math.floor((amount/50)));
//    amount = amount % 10;
// }
// if (amount >= 10) {
//    console.log('10', Math.floor((amount/10)));
//    amount = amount % 10;
// }
// if (amount >= 1) {
//    console.log('1', Math.floor((amount/1)));
// }

// let num = Number((0.1 + 0.2).toFixed(2));

// switch(num){
//     case 0.3 : console.log('hey3');
//     break;
//     case 0.4 : console.log('hey5');
//     break;

//     default: console.log('Hello World')

// }

// let n = Number(prompt("Enter a number: "));

// if (n === null) {
//     console.log('please enter in the input field')
// }
// else {
//     var num = Number(n)

//     if (isNaN(num)) {
//         console.log('User Input is Invalid')
//     }

//     if (num < 0) {
//         console.log('Number Should be positive')
//     } else {
//         if (num > 0) {
//             var sum = 0;
//             for (let i = 0; i <= num; i++) {
//                 sum += i
//             }
//             console.log(sum)
//         }
//     }
// }

// let n = Number(prompt("Enter a number: "));

// if (n === null) {
//   console.log("please enter in the input field");
// } else {
//   var num = Number(n);

//   if (isNaN(num)) {
//     console.log("User Input is Invalid");
//   }

//   if (num < 0) {
//     console.log("Number Should be positive");
//   } else {
//     if (num > 0) {
//       for (let i = 1; i <= Math.floor(num / 2); i++) {
//         if (num % i === 0) {
//           console.log(i);
//         }
//       }
//       console.log(num);
//     }
//   }
// }

// if (n === null) {
//   console.log("please enter in the input field");
// } else {
//   var num = Number(n);

//   if (isNaN(num)) {
//     console.log("User Input is Invalid");
//   }

//   if (num < 0) {
//     console.log("Number Should be positive");
//   } else {
//     if (num > 0) {
//     //     let isPrime = true;
//     //   for (let i = 2; i <= Math.floor(num / 2); i++) {
//     //     if (num % i === 0) {
//     //       isPrime = false;
//     //       break;
//     //     }
//     //   }
//     //   console.log(isPrime);
//          console.log((isPrime(n)))
//     }
//   }
// }

// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n == 2) return true;
//     if (n % 2 == 0) return false;
//     for (let i = 3; i < Math.floor(Math.sqrt(n)); i+=2) {
//          if (n%i===0) return false
//     }
//     return true;
// }

// let n = Number(prompt("Enter a number: "));

// if (n === null) {
//   console.log("please enter in the input field");
// } else {
//   var num = Number(n);

//   if (isNaN(num)) {
//     console.log("User Input is Invalid");
//   }

//   if (num < 0) {
//     console.log("Number Should be positive");
//   } else {
//     if (num > 0) {
//         let sum = 0;
//       while (num > 0) {
//         let rem = num % 10;
//         sum += rem;
//         num = Math.floor(num/10)
//       }
//       console.log(sum)
//     }
//   }
// }

// let n = Number(prompt("Enter a number: "));

// if (n === null) {
//   console.log("please enter in the input field");
// } else {
//   var num = Number(n);

//   if (isNaN(num)) {
//     console.log("User Input is Invalid");
//   }

//   if (num < 0) {
//     console.log("Number Should be positive");
//   } else {
//     if (num > 0) {
//       let rev = 0;
//       while (num > 0) {
//         let rem = num % 10;
//         rev = rev * 10 + rem;
//         num = Math.floor(num / 10);
//       }
//       console.log(rev);
//     }
//   }
// }

// let n = Number(prompt("Enter a number: "));

// if (n === null) {
//   console.log("please enter in the input field");
// } else {
//   var num = Number(n);

//   if (isNaN(num)) {
//     console.log("User Input is Invalid");
//   }

//   if (num < 0) {
//     console.log("Number Should be positive");
//   } else {
//     if (num > 0) {
//        let sum = 0;
//        let copy = num;
//       while (num > 0) {
//         let rem = num % 10;
//         let fact = 1;
//         for (let i = 1; i <= rem; i++) {
//             fact *= i;
//         }
//         sum += fact;
//         num = Math.floor(num / 10);
//       }
      
//       if (copy === sum) {
//         console.log('strong');
//       } else {
//         console.log('not');
//       }
//     }
//   }
// }
// let n;
// do {
//    n = Number(prompt("Enter a number: "));
// } while (n !== 0);


// let randomNum = 23;

// let user;
// let attempt = 0;
// while (user !== randomNum) {
//     user = Number(prompt('Enter a number'));
//     attempt++
//     if (attempt === 5) {
//         console.log('over')
//         break;
//     }
//     if (isNaN(user) || user < 0 || user > 100) {
//         console.log('try again');
//         continue;
//     } 
//     if (user > randomNum){
//     console.log('too High')
//     } else if (user < randomNum){
//     console.log('too low')
//     } else {
//         console.log('Won')
//     }
// }

