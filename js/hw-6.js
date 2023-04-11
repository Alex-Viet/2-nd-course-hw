/*const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) break;
    console.log(numbers[i]);      // Задание 1
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

const sqrNumb = numb.map((getSqr) => getSqr ** 2);

console.log(numb);
console.log(sqrNumb);*/    // Задание 11


/*const strng = ['JavaScript', 'не', 'так', '', 'прост', 'как', 'хотелось', 'бы'];

const lengthWord = strng.map((getlengthWord) => getlengthWord.length);

console.log(strng);
console.log(lengthWord);*/    // Задание 12


/*const int = [1, -3, -5, 4, 8, -3];
// const negativeInt = int.filter((getNegativInt) => getNegativInt < 0); // 1 способ

const negativeInt = int.filter(
    function getNegativInt(el) {
        if (el < 0) {
            return true;  // 2 способ
        }
    } 
);

console.log(int);
console.log(negativeInt);*/      // Задание 13