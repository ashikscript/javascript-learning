/**
 * Arry of anything
 */

const arr = [10, 'Ten', true, getTen, { ten: 10 }, [10, 10]];
// console.log(arr);

function getTen() {
  return 10;
}

// Array of object
const favChannels = [
  {
    name: 'Stack Learner',
    url: 'https://youtu.be/Ky1_8cdIQBw?si=F6uvJFL-gf7DYMlM',
  },
  {
    name: 'Procoder Bd',
    url: 'https://www.youtube.com/@ProcoderBD',
  },
  {
    name: 'Learn With Sumit',
    url: 'https://youtu.be/tGOk5uR6QIk?si=yZodyMHAFsFDh5Vr',
  },
  {
    name: 'Pograming Hero',
    url: 'https://youtu.be/ElAqHJk0-2Q?si=RbCqy1S2vl06rVKI',
  },
];

// Array of functions
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const funcs = [sum, sub, times, div, mod];
const a = 10,
  b = 20;
for (let i = 0; i < funcs.length; i++) {
  const result = funcs[i](a, b);
  console.log(`[${funcs[i].name}] result = ${result}`);
}
// for (let i = 0; i < funcs.length; i++) {
//   const result = funcs[i](a, b);
//   console.log(`[${funcs[i].name}] Result = ${result}`);
// }

// loop and call all function from array
// array of array - multi dimensonal array

const pointable = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
