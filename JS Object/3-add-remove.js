// const 0 = {}  bracket nmanei object

// const o = {};
// console.log(typeof o);

const person1 = {};
person1.firstName = 'Ashikur';
person1.lastName = 'Rahman';
person1.email = 'xashikx170@gmail.com';
console.log(person1);
console.log(person1.email);

const person2 = {
  firstname: 'Shah',
  lastname: 'Alam',
  email: 'shahalam@gmail.com',
};
person2.id = '1234'; //New object add
person2.age = 15;
person2.phone = '555-1234';

console.log(person2);

delete person2.age; //delete korar way js e
