function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const elements = {
//   divControls: document.querySelector("#controls"),
//   input: document.querySelector("input"),
//   buttonCreate: document.querySelector("button[data-create]"),
//   buttonDestroy: document.querySelector("button[data-destroy]"),
//   container: document.querySelector("#boxes"),
// };

const inputRef = document.querySelector("input");
const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyeRef = document.querySelector("[data-destroy]");

console.dir(inputRef);
console.log(btnCreateRef);
console.log(btnDestroyeRef);

const elements = {
  divEl: document.querySelector("#controls"),
  inputRef: document.querySelector("input"),
  btnCreateRef: document.querySelector("button[data-create]"),
  btnDestroyeRef: document.querySelector("button[data-destroy]"),
  boxRef: document.querySelector("#boxes"),
};

elements.btnCreateRef.addEventListener("click", createBoxes);

let size = 30;

function createBoxes() {
  let boxArr = [];
  let amount = elements.inputRef.value;

  for (let i = 0; i < amount; i += 1) {
    let color = getRandomHexColor();

    let divEl = `<div style = "width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    size += 10;
    boxArr.push(divEl);
    console.log(boxArr);
  }

  elements.boxRef.insertAdjacentHTML("beforeend", boxArr.join(""));
}

elements.btnDestroyeRef.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  elements.boxRef.innerHTML = "";
  size = 30;
}
