/*function getResult(numbs, callback) {
    console.log(callback(numbs));
}

function getSum(array) {
    return Math.round(array.reduce((n, m) => (n + m)));
}

function getMult(array) {
    return Math.round(array.reduce((n, m) => (n * m)));
}

getResult([4, 5, 3, 10], getSum);
getResult([4, 5, 3, 10], getMult);*/     // Задание 1


/*const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function compareFunction(a, b) {
	return a.age - b.age;
}

function getSortedArrObj(array) {
    console.log(array.sort(compareFunction));
}

getSortedArrObj(users);*/      // Задание 2


/*const each = (arr, callback) => {
    console.log(callback(arr));
}

function reversArr(array) {
    return array.reverse();
}

function toNumberArr(array) {
    return array.map((item) => Number(item)).filter((el) => !isNaN(el));
}

each([1, '4', 9, 'two'], reversArr);
each([1, '4', false, 9, 'two'], toNumberArr);*/    // Задание 3


/*const getTimer = (deadline) => {
	let time = deadline;
	const interval = setInterval(() => {
		time -= 3;
		console.log(new Date);
	}, 3000);

	setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло');
  }, deadline * 3000)
}

getTimer(10);*/      // Задание 4


/*function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...');
        callback();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);*/     // Задание 5