const submitButton = document.querySelector('.submit'),
    birthDateInput = document.querySelector('.date-input'),
    messageElement = document.querySelector('.if-input-null');

submitButton.addEventListener('click', handleButtonClick);

function handleButtonClick() {
    const birthDate = birthDateInput.value;

    if (isBirthDateValid(birthDate)) {
        console.log('Valid birth date');
    } else {
        displayErrorMessage('Please choose a valid birth date!');
    }
}

function isBirthDateValid(dateString) {
    if (dateString === '') {
        return false;
    }

    const birthDate = new Date(dateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age > 14;
}

function displayErrorMessage(message) {
    messageElement.textContent = message;
}