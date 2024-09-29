const arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[99] = 100;

console.log(arr.length);
console.log(arr);

// length = last index + 1
// last index = length - 1

const names = [
  'Ashikur Rahman',
  'stack Hasan',
  'Badhol bhai',
  'Mahmudul Islam',
  'Sujon khan',
  'Hasnat abdullah',
];
// names[5] = 'Asad khan';
names[names.length] = 'Asif Nazrul';

console.log(names.length);
console.log(names);

// (arr.length) arry er length check korar way
// arr[2] = 3;  (data type off array)
// javascript array are dynamic
