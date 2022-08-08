const inputElement = document.querySelector("#validation-input");
console.log(inputElement);
// const inputLength = document.querySelector('input[data-length="6"]');

const counter = inputElement.dataset.length;
console.log("Введіть символів:", counter);

inputElement.addEventListener("change", onInputChange);
// inputElement.addEventListener("blur", onInputBlur);

function onInputChange(event) {
  event.currentTarget.value.length === Number(counter)
    ? inputElement.classList.add("valid")
    : inputElement.classList.add("invalid");

  console.log("Введено:", event.currentTarget.value);
  console.log("Ви ввели символів:", event.currentTarget.value.length);
}
