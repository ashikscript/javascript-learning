/*
 * @title = Traverse Array elements
 */

// const arr = [1, 2, 3, 4, 5];
const arr = [563435, 54646, 65464, 654654, 5645646];
// console.log(arr);
const n = arr[3];
const m = arr[2];
const x = 1,
  y = 0;
// console.log(m, n, arr[x], arr[y], arr[x] + arr[y], arr[x + y + 1]);

// console.log(arr[3]);

/**
 * 1 2 3 4 5
 * 0 1 2 3 4
 *
 * 'A' 'b' 'c' 'd'
 *  0   1   2   3
 *
 * 1 b 3 5 f 0 truee
 * 0 1 2 3 4 5 6 0
 */

// main algorithom is index number always 0 theke start

// Simple Traverse

for (let i = 0; i < arr.length; i++) {
  //  console.log(arr[i]);
}

// console.log(arr[i]);

// Array Sum & avg

/*
 * sum = 0
 * sum = 0 + 1 = 1
 * sum = 1 + 2 = 3
 * sum = 3 + 3 = 6
 * sum = 6 + 4 = 10
 */

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);
console.log(sum / arr.length);

// find large number

let largestNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largestNumber) {
    largestNumber = arr[i];
  }
}
console.log(largestNumber);

/*
arr[0]
arr[1]
arr[2]

arr data ber korar WebAssembly
*/
