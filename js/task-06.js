const inputElement = document.querySelector("#validation-input");

const counter = inputElement.dataset.length;

inputElement.addEventListener("change", onInputChange);

function onInputChange(event) {
  event.currentTarget.value.length === Number(counter)
    ? inputElement.classList.add("valid")
    : inputElement.classList.add("invalid");
}
