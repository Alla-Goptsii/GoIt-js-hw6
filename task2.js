const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
console.log(ingredientsEl);
const itemFirstEl = document.createElement("li");
itemFirstEl.textContent = "Potatoes";
console.log(itemFirstEl);
itemFirstEl.classList.add("item");

const itemSecondEl = document.createElement("li");
itemSecondEl.textContent = "Mushrooms";
itemSecondEl.classList.add("item");
console.log(itemSecondEl);

const itemThirdEl = document.createElement("li");
itemThirdEl.textContent = "Garlic";
console.log(itemThirdEl);
itemThirdEl.classList.add("item");

const itemFourthEl = document.createElement("li");
itemFourthEl.textContent = "Tomatos";
console.log(itemFourthEl);
itemFourthEl.classList.add("item");

const itemFifthEl = document.createElement("li");
itemFifthEl.textContent = "Herbs";
console.log(itemFifthEl);
itemFifthEl.classList.add("item");

const itemSixthEl = document.createElement("li");
itemSixthEl.textContent = "Condiments";
console.log(itemSixthEl);
itemSixthEl.classList.add("item");

ingredientsEl.append(
  itemFifthEl,
  itemSecondEl,
  itemThirdEl,
  itemFourthEl,
  itemFifthEl,
  itemSixthEl
);
console.log(ingredientsEl);
