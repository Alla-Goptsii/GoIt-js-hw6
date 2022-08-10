const inputElement = document.querySelector("#validation-input");

const counter = inputElement.dataset.length;

inputElement.addEventListener("change", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.length === Number(counter)) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
    return;
  }
  inputElement.classList.remove("valid");
  inputElement.classList.add("invalid");
}
