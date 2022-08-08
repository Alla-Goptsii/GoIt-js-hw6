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

// const ingredient = ingredients[0];

const elements = ingredients.map((option) => {
  const ingrItemEl = document.createElement("li");
  ingrItemEl.classList.add("item");
  ingrItemEl.textContent = option;

  console.log(ingrItemEl);
  return ingrItemEl;
});
console.log(elements);
ingredientsEl.prepend(...elements);
