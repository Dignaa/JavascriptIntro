import { Car } from '../Classes/Car.js';
import { Cat } from '../Classes/Cat.js';
import { Student } from '../Classes/Student.js';

//EXERCISE 1
console.log("******EXERCISE 1 - FUNCTIONS AND OBJECTS*******")
function getName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}

getName("Digna", "Bringule");


function rectangleArea(side1, side2) {
    return side1 * side2;
}

console.log("The rectangle are is:" + rectangleArea(123, 456));

function calculateDistance(speed, time) {
    console.log(`You have travelled ${speed * time} km`);
}

calculateDistance(1234, 567);

let calculator = { ownerName: "Digna", getName, rectangleArea, calculateDistance }

calculator.getName("test", "teeest");
calculator.rectangleArea(12, 12);
calculator.calculateDistance(12, 15);

//EXERCISE2 - CLASSES

console.log("*****EXERCISE 2 - CLASSES*****")

let cat1 = new Cat("Catty", "Red", "Mixed")

console.log(cat1.getData());
cat1.changeName("Milly");
console.log(cat1.getData());

console.log("*****EXERCISE 3 - CAR EXERCISE*****")

let car1 = new Car("Test", "Teest", 2015);
let car2 = new Car("Test1", "Teest1", 2020);

console.log(car1.getCarInfo());
console.log(car2.start());
console.log(car1.stop());

//EXERCISE - ARRAYS

console.log("*****EXERCISE 4 - ARRAYS*****")

let array1 = ["Red", "Blue", "Gray", "Black", "Purple"]

console.log(array1[0]);
console.log(array1.indexOf("Blue"));
console.log("Green");

array1.push("White");

console.log(array1);

let newArray = array1.slice(0, 3);
console.log(newArray);

array1.push({ firstName: "Digna", lastName: "Bringule", email: "dbringule@gmail.com" });
array1.push({ firstName: "test", lastName: "tesssstt", email: "test@gmail.com" });

console.log(array1);
console.log(array1[6].email);

//EXERCIDE ARRAYS AND OBJECTS

console.log("*****EXERCISE 5 - ARRAYS AND OBJECTS*****")

function addGrades(student, grade) {
    student.grades.push(grade);
}

function updateStudentName(student, name) {
    student.name = name;
}

let student1 = new Student("Digna", 1, [12, 12, 12])

console.log(student1);

addGrades(student1, 13);
updateStudentName(student1, "Digna Bringule")

console.log(student1);

