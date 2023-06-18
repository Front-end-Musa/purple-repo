// Установка даты Нового года
let newYearDate = new Date("January 1, " + (new Date().getFullYear() + 1) + " 00:00:00").getTime();

// Обновление таймера каждую секунду
let timer = setInterval(function() {
    // Получение текущей даты и времени
    let now = new Date().getTime();

    // Расчет времени, оставшегося до Нового года
    let timeRemaining = newYearDate - now;

    // Вычисление количества месяцев, дней, часов, минут и секунд
    let months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30.44));
    let days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Форматирование вывода времени
    let output = months + " month(s), " + days + " day(s), " + hours + " hour(s), " + minutes + " minute(s), " + seconds + " second(s)";

    // Вывод времени
    document.querySelector('.timer').innerHTML = output;

    // Проверка, достигнуто ли время Нового года
    if (timeRemaining < 0) {
        clearInterval(timer);
    }
}, 1000);
