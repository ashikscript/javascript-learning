const arr1 = [4, 6, 10, 3, 29, 3, 23, 12];
const arr2 = [6, 11, 21, 32, 4, 3, 20, 10];

// let max = arr1[0];
// for (let v of arr1) {
//   if (v > max) {
//     max = v;
//   }
// }
// console.log(max);

// let max2 = arr2[0];
// for (let v of arr2) {
//   if (v > max2) {
//     max2 = v;
//   }
// }
// console.log(max2);

function findMax(arr) {
  let max = arr2[0];
  for (let v of arr2) {
    if (v > max) {
      max = v;
    }
  }
  return max;
}
console.log(findMax(arr1));
console.log(findMax(arr2));
