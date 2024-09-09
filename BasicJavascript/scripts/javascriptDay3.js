import { Book } from '../Classes/Book.js';

console.log("******EXERCISE - LOOOOOOPPPSS*******")

const loopArray = ["Peter", 7, 'Marianne', true, 'Helle', 8];

loopArray.forEach((item) => {
    console.log(`${item} is a ${typeof (item)}`)
})

console.log("******EXERCISE - LOOPS AND OBJECTS*******")

const books = [new Book("author1", "title1"), new Book("author2", "title2"), new Book("author3", "title3"), new Book("author4", "title4"), new Book("author5", "title5")];


const bookList = document.getElementById("bookList");

books.forEach((book) => {
    const newLi = document.createElement("li");
    newLi.textContent = `${book.author}: ${book.title}`;

    bookList.appendChild(newLi);
})

//EXERCISE - IF/ELSE
console.log("******EXERCISE - IF/ELSE*******")

const findLargest = (num1, num2, num3, num4) => {

    let largest = num1 > num2 ? num1 : num2;
    largest = largest > num3 ? largest : num3;
    largest = largest > num4 ? largest : num4;
    return largest;
}

const isInRange = (num, rangeFrom, rangeTo) => {

    return num >= rangeFrom && num <= rangeTo ? true : false;
}

console.log(`Largest number - ${findLargest(100, 2, 30, 4)} nr is in range: ${isInRange(1, 2, 12)}`)


// HIGHER OR LOWER
console.log("HIGHER OR LOWER GAME")

const number = Math.floor(Math.random() * 100) + 1; //Returns a number between 0 and 100

let attempts = 0;
let guessed = false;

while (guessed === false) {
    attempts++;
    let guess = prompt("GUESS THAT NUMBER NOOWWWWW!!!!!!!!!!!!");


    if (number > guess) {
        console.log("THATS TOO LOW!!! TRY AGAIN!!!")
    }
    else if (number < guess) {
        console.log("THATS TOO HIGH!!! TRY AGAIN!!!")
    }
    else if (number == guess) {
        console.log(`YOU ACTUALLY DID IT, TOOK ONLY ${attempts} attempts!!!!!`)
        guessed = true;
    }
}

