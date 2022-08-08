let counterValue = 0;

const removeCounterBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const addCounterBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const targetText = document.querySelector("#value");
// targetText.textContent = counterValue;

console.log(addCounterBtnEl);
console.log(removeCounterBtnEl);
console.log(targetText);

addCounterBtnEl.addEventListener("click", () => {
  counterValue += 1;
  console.log("збільшити на 1");
  console.log("counter:", counterValue);
  targetText.innerHTML = counterValue;
});

removeCounterBtnEl.addEventListener("click", () => {
  counterValue -= 1;

  console.log("зменшити на 1");
  console.log("counter:", counterValue);
  targetText.innerHTML = counterValue;
});
