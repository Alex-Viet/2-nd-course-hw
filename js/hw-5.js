/*function getMinorityNumb(a, b) {
    if (a <= b) {
        return(a);
    } else {
        return(b);
    }
}

console.log(getMinorityNumb(1, 2));*/    // Задание 1


/*let getEven = (x) => {
    if (x % 2 == 0) {
        return console.log('Число четное');
    } else {
        return console.log('Число нечетное');
    }
}

getEven(Number(0));*/    // Задание 2


/*function calcSqrt(n) {
    console.log(n**2);
}

calcSqrt(10);      // Задание 3.1


function calcSqrt(n) {
    return n**2;
}

console.log(calcSqrt(13));*/   // Задание 3.2


/*let findAge = () => {
    const userAge = Number(prompt('Сколько вам лет?'));
    if (userAge < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (userAge >= 0 && userAge <=12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}

findAge();*/    // Задание 4


/*function isNumb(a, b) {return !isNaN(a) && !isNaN(b) ? a * b : console.log('Одно или оба значения не являются числом');}

console.log(isNumb(5, 11));*/    // Задание 5


/*let cube = (n, result) => {
    n = Number(prompt('Введите число'));
    if (!isNaN(n)) {
        result = n ** 3;
        return console.log(`Число ${n} в кубе равняется ${result}`);
    } else {
        return console.log('Переданный параметр не является числом');
    }
}

cube();*/    // Задание 6


/*function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 2,
    getArea: getArea,
    getPerimeter: getPerimeter
}

const circle2 = {
    radius: 7,
    getArea: getArea,
    getPerimeter: getPerimeter
}

console.log(`Площадь первого круга ${circle1.getArea()}, периметр первого круга ${circle1.getPerimeter()}`);
console.log(`Площадь второго круга ${circle2.getArea()}, периметр второго круга ${circle2.getPerimeter()}`);*/   // Задание 7