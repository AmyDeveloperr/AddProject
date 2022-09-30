'use strict';
// //this keyword

// // this inside function

this.table = "window table";

// this inside class

class CreateRoom {
    constructor(name) {
        this.table = `${name}s table`
    }
    cleanTable(soap) {
        console.log(`cleaning ${this.table} using ${soap}`);
    }    
}

const AmarsRoom = new CreateRoom("Amar");
const anusRoom = new CreateRoom("Anu");

AmarsRoom.cleanTable("some soap");
anusRoom.cleanTable("some soap");



// const outer = function(soap) {
    
    
//     const inner = (medium) =>  {
        
//     console.log(`cleaning ${this.table} using ${medium}`);

//     }

//     inner(soap);
// };

//outer.call(this, 'some soap');


//this inside constructor
// let createRoom = function (name) {
//     this.table = `${name}s table`
// }

// createRoom.prototype.cleanTable = function(soap) {
//     console.log(`cleaning ${this.table} using ${soap}`);
// }

// const AmarsRoom = new createRoom("Amar");
// const anusRoom = new createRoom("Anu");


// AmarsRoom.cleanTable("some soap");
// anusRoom.cleanTable("some soap");


// const b = cleanTable("soap");
//outer();


//this inside inner function



// this.garage = {
//     table: "garage table",
//     cleanTable() {
//         console.log(`cleaning ${this.table}`)
//     }
// }

// console.log(this.garage.table);

// this inside an object

// let johnsRoom = {
//     table: "john's table"
// }

//console.log(johnsRoom.table);

// this inside a method

// let johnsRoom = {
//     table: "john's table",
//     cleanTable() {
//         console.log(`cleaning ${this.table}`)
//     }
// }
// johnsRoom.cleanTable();
// this.garage.cleanTable();