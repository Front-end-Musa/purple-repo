const dices = document.querySelectorAll('.dice');
let btn = document.querySelector('.roll-btn'),
    diceNumber;

btn.innerHTML = 'ROLL';

function diceNumberChanger() {
    dices.forEach(dicesItem => {
        if (dicesItem.classList.contains("active")) {
            diceNumber = Math.round(Math.random() * dicesItem.value)
        };
    });
}

btn.addEventListener('click', () => {
    for (value of dices) {
        if (value.selected) {
            dices.forEach(dicesItem => dicesItem.classList.remove('active'));
            value.classList.add('active');
        };
    };

    diceNumberChanger();
    document.querySelector('.number').innerHTML = diceNumber;
});
