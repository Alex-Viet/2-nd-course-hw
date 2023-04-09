function guessSeason(monthNumber) {
    monthNumber = Number(prompt('Введите номер месяца (от 1 до 12)'));

    if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
        return console.log('Зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        return console.log('Весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        return console.log('Лето');
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        return console.log('Осень');
    }
    else {
        return console.log('В году всего 12 месяцев! Попробуйте еще раз');
    }
}