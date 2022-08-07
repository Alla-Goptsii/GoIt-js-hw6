// Яка кількість смиволів повинна бути в інпуті,
//     зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то
//  border інпуту стає зеленим, якщо неправильна
// кількість - червоним.

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
