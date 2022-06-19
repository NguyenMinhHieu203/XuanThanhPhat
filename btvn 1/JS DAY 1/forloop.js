const arr = [2,1,3];
// const result = [];

// for (let i = 0; i < arr.length ; i++) {
//     result.push(arr[i] * 2)
// }

// arr.forEach(function(el) {
//     result.push(el * 2)
// })

// arrow function *suggest
// arr.forEach(el => {
//     result.push(el * 2);
// })

const result = arr.map(el => {
   return el;
})
console.log(result , arr)