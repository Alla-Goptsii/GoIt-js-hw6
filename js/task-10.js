function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const inputRef = document.querySelector("input");
// const btnCreateRef = document.querySelector("[data-create]");
// const btnDestroyeRef = document.querySelector("[data-destroy]");

// console.log(inputRef);
// console.log(btnCreateRef);
// console.log(btnDestroyeRef);

// const boxRef = document.querySelector("#boxes");
// console.log(boxRef);

const elements = {
  divEl: document.querySelector("#controls"),
  inputRef: document.querySelector("input"),
  btnCreateRef: document.querySelector("button[data-create]"),
  btnDestroyeRef: document.querySelector("button[data-destroy]"),
  boxRef: document.querySelector("#boxes"),
};

// inputRef.addEventListener("input", xxx);
elements.btnCreateRef.addEventListener("click", createBoxes);
// btnDestroyeRef.addEventListener("click", yyy);

let size = 30;

function createBoxes() {
  let boxArr = [];
  let amount = elements.inputRef.value;
  console.log(amount);

  for (let i = 0; i <= amount; i = +1) {
    const createEl = document.createElement("div");
    createEl.classList.add("styles-box");
    boxRef.append(createEl);
    return boxArr.push(createEl);
  }
}

// function xxx() {}
// function yyy() {}
