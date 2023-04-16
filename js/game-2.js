function memorizeWords() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    words = words.sort(() => Math.random() - 0.5);
    words = words.join(', ');

    alert(words);

    words = words.split(', ');
    
    userFirstEl = prompt("Какое слово было первым?");
    userLastEl = prompt("Какое слово было последним?");
    
    if (words[0].toLowerCase().includes(userFirstEl.toLowerCase()) && words[words.length - 1].toLowerCase().includes(userLastEl.toLowerCase())) {
        console.log("Наши поздравления! Все слова угаданы верно!");
    } else if (words[0].toLowerCase().includes(userFirstEl.toLowerCase()) || words[words.length - 1].toLowerCase().includes(userLastEl.toLowerCase())) {
        console.log("Вы были близки к победе!");
    } else {
        console.log("К сожалению, вы ответили неверно!");
    }
}

