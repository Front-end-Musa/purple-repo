let btns = document.querySelectorAll('.press-me'),
    counter = document.querySelector('.counter'),
    counterOutput = 0;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove('active');
        }
        btn.classList.add('active');
        counterOutput = counterOutput + 1;
        for (let i = 0; i < btns.length; i++) {
            if (btns[i].classList.contains('active')) {
                btns[i].innerHTML = 'Нажата!'
            } else {
                btns[i].innerHTML = 'Нажми меня!';
            }
        }
        counter.innerHTML = counterOutput;
    })
})
