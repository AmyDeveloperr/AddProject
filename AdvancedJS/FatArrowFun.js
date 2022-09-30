"use strict";

// let getA = a => a;
// console.log(getA(1));


var x  = function() {
    console.log(arguments[0]);
}

//x(2,3,5);

//using fat arrow
//we have to use spread operator.

var x = (...n) => {
    console.log(n[0]);
}

//x(2,3,5);

//program using fat Arrow function

class Student {

    static count = 0;

    constructor(name, age, phone, board_marks) {

        this. name = name;

        this.age = age;

        this.phone = phone;

        this.marks = board_marks;

        Student.studentsCreated();       

    }

    static studentsCreated() {

        return(Student.count++);

    }

    isEligibleForPlacements(minAge) {

        return (minMarks) => {

        if (this.marks > minMarks && this.age > minAge) {

            console.log(`${this.name} is eligible for placement`);

        }

        else {

            console.log(`${this.name} is not eligible for placement`);

        }

    }

    }

}



const student1 = new Student("Amar", 30, 8989898989, 80);

const student2 = new Student("Anu", 29,  9898988045, 50);

const student3 = new Student("Rohit", 40, 8989897854, 60);

const student4 = new Student("Nikita", 35, 8984215451, 70);

const student5 = new Student("Bandu", 30, 8989891989, 20);

student1.isEligibleForPlacements(21)(40);

console.log("Students created " + "" + Student.studentsCreated());

