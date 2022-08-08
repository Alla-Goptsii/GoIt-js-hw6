function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

btnEl.addEventListener("click", onChangeColorBtn);
function onChangeColorBtn(event) {
  const changeColor = getRandomHexColor();
  spanEl.textContent = changeColor;
  bodyEl.style.backgroundColor = changeColor;
}
