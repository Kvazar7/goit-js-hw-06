function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const textColorValue = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  textColorValue.textContent = randomColor;
}
