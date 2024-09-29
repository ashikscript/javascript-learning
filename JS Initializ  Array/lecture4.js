/**
 * @title update array elements and fil;l away
 */

// Array fill manual away
const arr1 = new Array(10); // console.log(arr1);
for (let i = 0; i < arr1.length; i++) {
  arr1[i] = false;
}
console.log(arr1);

// Array fill
const arr2 = new Array(10);
arr2.fill(0);
// console.log(arr2);

const names = ['Ashik', 'Shihab', 'Hasan'];
names[1] = true;
console.log(names);

// Fill arry and update

const response = new Array(9);
response.fill(false);
for (let i = 0; i < response.length; i++) {
  const rand = Math.floor(Math.random() * 10 + 1);
  response[i] = rand > 5 ? 'x' : '0';
}
console.log(response);

// Array is mutable

function update(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = '${i + 1}. ${arr[i]}';
  }
  return arr;
}

const updatedNames = update(names);
console.log(names);
console.log(updatedNames);
