const inputEl = document.querySelector("#name-input");
const inputTextEl = document.querySelector("#name-output");
console.log(inputEl);

inputEl.addEventListener("input", (event) => {
  inputTextEl.textContent = event.currentTarget.value;
  console.log(inputTextEl);
});
