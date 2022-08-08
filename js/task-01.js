const categoriesEl = document.querySelector("#categories");

console.log("Number of categories:", categoriesEl.children.length);

const listEl = document.querySelectorAll("li.item");
listEl.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);

  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
