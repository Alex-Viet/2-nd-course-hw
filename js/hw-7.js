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


/*function getRandomArrNumb(integer) {
    let numbers = [];
    for (let i = 0; i < integer; i++) {
        numbers[i] = Math.floor(Math.random() * (integer + 1));
        numbers.length = Math.floor(integer / 2);
    }
    return numbers;
}

console.log(getRandomArrNumb(11));*/   // Задание 6 - очень сложное было!:)


/*function getRandNumb(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

console.log(getRandNumb(4, 9));*/   // Задание 7


/*let curDate = new Date();
console.log(curDate);*/     // Задание 8


/*let currentDate = new Date();
console.log(currentDate);
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);*/    // Задание 9


/*const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function showDate(day, month, year) {
    let userDate = new Date(year, month - 1, day);
    let fullDate = day + " " + months[month - 1] + " " + year;
    let timeDate = new Date();
    let hours = timeDate.getHours();
    let minutes = timeDate.getMinutes();
    let seconds = timeDate.getSeconds();

    resDay = days[userDate.getDay()];
    month = userDate.getMonth();
    year = userDate.getFullYear();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    return `Дата: ${fullDate} - это ${resDay}.\nВремя: ${hours}:${minutes}:${seconds}`
}

console.log(showDate(13, 4, 2023));*/     // Задание 10