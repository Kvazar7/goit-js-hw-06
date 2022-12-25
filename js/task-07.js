const inputEl = document.querySelector('#font-size-control');
const outputEl = document.querySelector('#text');

inputEl.addEventListener('input', checkInput);

function checkInput(event, changeTextSize) {
    outputEl.style.fontSize = this.value + 'px';
    console.log(this.value)
};