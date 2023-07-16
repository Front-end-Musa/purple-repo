const newYearDate = new Date("January 1, " + (new Date().getFullYear() + 1) + " 00:00:00").getTime();

function getMonthsRemainingToNewYear(date) {
    return 12 - (date.getMonth() + 1);
}

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
    if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    }
    return year % 4 === 0;
}

function getDaysRemainingToNextMonth(date) {
    let daysInMonth = DAYS_IN_MONTH[date.getMonth()];
    if (date.getMonth() === 1 /* February */ && isLeapYear(date.getFullYear())) {
        daysInMonth += 1;
    }
    return daysInMonth - date.getDate();
}

// Обновление таймера каждую секунду
let timer = setInterval(function() {
    let now = new Date().getTime();
    let timeRemaining = newYearDate - now;
    const date = new Date();
    const months = getMonthsRemainingToNewYear(date);
    const days = getDaysRemainingToNextMonth(date);
    
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Форматирование вывода времени
    const output = months + " month(s), " + days + " day(s), " + hours + " hour(s), " + minutes + " minute(s), " + seconds + " second(s)";

    // Вывод времени
    document.querySelector('.timer').innerHTML = output;

    // Проверка, достигнуто ли время Нового года
    if (timeRemaining < 0) {
        clearInterval(timer);
    }
}, 1000);
