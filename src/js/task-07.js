const inputEl = document.querySelector("#font-size-control");
console.log(inputEl);
const textEl = document.querySelector("#text");
console.log(textEl);

inputEl.addEventListener("input", onInputText);

function onInputText(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
