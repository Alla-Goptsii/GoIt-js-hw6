const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map((option) => {
  const ingrItemEl = document.createElement("li");
  ingrItemEl.classList.add("item");
  ingrItemEl.textContent = option;

  return ingrItemEl;
});
console.log(elements);
ingredientsEl.prepend(...elements);
