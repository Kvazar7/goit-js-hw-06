const inputText = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputText.addEventListener("input", changeName);

function changeName(event, writeName) {
  if (event.currentTarget.value != '') {
      output.textContent = event.currentTarget.value
  }
  else if (event.currentTarget.value === '') {
      output.textContent = 'Anonymous'
  }
}