let counterValue = 0;

const removeCounterBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const addCounterBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const targetText = document.querySelector("#value");

addCounterBtnEl.addEventListener("click", () => {
  counterValue += 1;
  return (targetText.textContent = counterValue);
});

removeCounterBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  return (targetText.textContent = counterValue);
});
