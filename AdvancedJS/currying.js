
// for bind
let multiply = function (x, y) {
    console.log(x * y);
}

// uncomment for closures
// let multiply = function(x) {
//     return function(y) {
//         console.log(x * y);
//     }
// }

//currying using bind
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);


// currying using closures
// let multiplyByTwo = multiply(2);
// multiplyByTwo(6);