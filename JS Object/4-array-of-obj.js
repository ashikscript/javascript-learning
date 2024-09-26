// const p1 = {
//   name: 'Ashikur Rahman',
//   email: 'xashikx170@gmail.com',
// };

// const p2 = {
//   name: 'Sheikh Hasina',
//   email: 'sheikhhasina@gmail.com',
// };

// const p3 = {
//   name: 'Khaleda Zia',
//   email: 'khaledazia@gmail.com',
// };

const people = [p1, p2, p3];
// console.log(people);

// console.log(people[1].email);

const person = [
  {
    name: 'Ashikur Rahman',
    email: 'xashikx170@gmail.com',
  },
  {
    name: 'Sheikh Hasina',
    email: 'sheikhhasina@gmail.com',
  },
  {
    name: 'Khaleda Zia',
    email: 'khaledazia@gmail.com',
  },
];

// console.log(people[0].name);
// console.log(people[1].email);

for (let p of people) {
  console.log(`${p.name} (${p.email})`);
}
