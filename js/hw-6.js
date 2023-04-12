/*const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) break;   // Задание 1
}*/


/*const numb = [1, 5, 4, 10, 0, 3];
console.log(numb.indexOf(4));*/    // Задание 2


/*const numbrs = [1, 3, 5, 10, 20];
console.log(numbrs.join(' '));*/    // Задание 3


/*const arr = [];

for (let subArr = 0; subArr < 3; subArr++) {
    arr[subArr] = [];
    
    for (let numb = 0; numb < 3; numb++) {
        arr[subArr].push(1);
    }
}

console.log(arr);*/         // Задание 4


/*const numbs = [1, 1, 1];
numbs.push(2, 2, 2);

console.log(numbs);*/    // Задание 5


/*const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
arr.pop();

console.log(arr);*/     // Задание 6


/*const numbers = [9, 8, 7, 6, 5];
const userNumb = Number(prompt('Введите число от 1 до 10'));

if (userNumb >= 1 && userNumb <=10) {
   
    if (numbers.includes(userNumb)) {
        console.log('Такое число есть в массиве');
    } else {
        console.log('Такого числа нет в массиве');
    }

} else {
    console.log('Число введено неверно');     // Задание 7
}*/


/*let line = 'abcdef';
line = line.split('');
line = line.reverse();
line = line.join('')

console.log(line);*/     // Задание 8


/*const numb = [
    [1, 2 ,3],
    [4, 5, 6]
];

console.log(numb[0].concat(numb[1]));*/    // Задание 9


/*const numbs = [4, 7, 1, 5, 9, 8];

for (let n = 0; n < numbs.length - 1; n++) {
    console.log(numbs[n] + numbs[n + 1]);    // Задание 10
}*/


/*const numb = [4, 7, 5, 8];

function getSqrNum() {
    return numb.map((getSqr) => getSqr ** 2);
}

// const sqrNumb = numb.map((getSqr) => getSqr ** 2);

console.log(numb);
console.log(getSqrNum());*/    // Задание 11


/*const strng = ['JavaScript', 'не', 'так', '', 'прост', 'как', 'хотелось', 'бы'];

function getlengthWord() {
    return lengthWord = strng.map((el) => el.length);
}

console.log(strng);
console.log(getlengthWord());*/    // Задание 12


/*const int = [1, -3, -5, 4, 8, -3];

function getNegativInt() {
    negativeNum = int.filter((el) => el < 0);
    return negativeNum;
}

console.log(int);
console.log(getNegativInt());*/      // Задание 13


/*const random = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (let subRandom = 0; subRandom < 10; subRandom++) {
    random.push(getRandomInt(0, 11));
}

const evenNumb = random.filter(
    function getEvenNumber(num) {
        if (num % 2 === 0) {
            return true;
        } 
    }
)

console.log(random);
console.log(evenNumb);*/     // Задание 14


/*const randomInt = [];

function getRndmInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (let numb = 0; numb < 6; numb++) {
    randomInt.push(getRndmInt(1, 11));
    
}

function getArithMean() {
    let sum = randomInt.reduce((n, m) => (n + m));
    return result = sum / randomInt.length;
}

console.log(randomInt);
console.log(getArithMean());*/     // Задание 15