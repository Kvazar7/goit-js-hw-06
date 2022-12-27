const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', checkInput);

function checkInput(event, addInputClass) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.add('invalid');
    }
}