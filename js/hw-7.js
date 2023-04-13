/*let str = 'js';
str = str.toUpperCase();
console.log(str);*/     // Задание 1


/*const arrayStr = ['которая', 'в', 'качестве', 'параметров', 'принимает', 'массив', 'строк'];
let searchWord = 'пАР';

function searchBeginString(array, search) {
    const resultArrStr = array.filter((el) => el.toLowerCase().startsWith(search.toLowerCase()));
    return resultArrStr;
}

console.log(searchBeginString(arrayStr, searchWord));*/      // Задание 2


/*const n = 32.58884;
const a = Math.floor(n);
const b = Math.ceil(n);
const c = Math.round(n);

console.log(a, b, c);*/      // Задание 3


/*const minNum = Math.min(52, 53, 49, 77, 21, 32);
const maxNum = Math.max(52, 53, 49, 77, 21, 32);
console.log(minNum, maxNum);*/                  // Задание 4


/*function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); 
}

console.log(getRandomInt(1, 11));*/     // Задание 5


let int;

function getRandomArrNumbers(integer) {
    const array = [];
    array.length = Math.floor(integer / 2);

    for (let i = 0; i < array.length; i++) {
        array.fill(Math.floor(Math.random() * (integer + 1)));
        
        return array;
    }
}

// array.fill(Math.floor(Math.random() * (integer + 1)));
// getRandomArrNumbers(int);
console.log(getRandomArrNumbers(10));