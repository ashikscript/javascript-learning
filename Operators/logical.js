// logical operators

let k = 50, l = 100;

let operation = (k > 20) && (l < 150);
// true && true 
console.log("(" + k + " > 20) && (" + 1 + " < 150 ) == " + operation);

operation = (k > 20) || (l < 150);
console.log("(" + k + " > 20) || (" + 1 + " < 150) == " + operation);

console.log("operation = " + operation + " and not operation = " + !operation);


// solution final
/*
(50 > 20) && (1 < 150 ) == true
(50 > 20) || (1 < 150) == true
operation = true and not operation = false
*/


/* 
And operation
A     B     R
A     T     T
T     F     F
F     T     F
F     F     F

or operation

A     B     R
T     T     T
T     F     T
F     T     F
F     F     F
*/


