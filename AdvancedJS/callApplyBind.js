// var obj = {num:5};
// var obj2 = {num:4};

// var addToThis = function(a, b, c) {
//     return this.num + a + b + c; 
// }
// // call which takes arguments
// //console.log(addToThis.call(obj, 5, 6, 7));

// // apply which takes array instead of arguments  
// var arr = [1, 2, 3];
// //console.log(addToThis.apply(obj, arr));

// //use of bind 
// var bound = addToThis.bind(obj2);

// console.log(bound(2,2,2));

// creating the new object and applying bind

var student = {age: 20};

var ageOfStudent = function() {
    return this.age;
}

var bound = ageOfStudent.bind(student);
console.log(bound());