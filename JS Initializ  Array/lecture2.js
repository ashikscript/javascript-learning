// Constructor pattern vs fastory pattern

// constructor pattern

const a1 = new Array(); // []
console.log(a1, a1.length);

const a2 = new Array(5);
console.log(a2, a2.length);

const a3 = new Array(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5 ]
console.log(a3, a3.lenght);

// factory pattern

const v1 = Array(); // []
console.log(v1, v1.length);

const v2 = Array(5);
console.log(v2, v2.length);

const v3 = Array(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5 ]
console.log(v3, v3.lenght);

console.log(a1.__proto__.constructor);
console.log(v1.__proto__.constructor);
