// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і
// виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість
// елементів в категорії(усіх < li >, вкладених в нього).

const categoriesEl = document.querySelector("#categories");
console.log(categoriesEl);

console.log("Number of categories:", categoriesEl.children.length);

const listEl = document.querySelectorAll("li.item");
listEl.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);

  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});

// const listItemEl = listEl.lastChild;

// const categoryEl = document.querySelectorAll("li.item");
// console.log("Number of categories:", categoryEl.length);

// const itemElAll = document.querySelectorAll("h2");
// const itemEl = [...itemElAll];
// console.log("Category:", itemEl[0].textContent);

// const categoryElAll = [...categoryEl];
// const firstCategory = categoryElAll[0];
// // console.log(categoryElAll);

// // console.log(firstCategory);
// const firstCategoryEl = firstCategory.lastElementChild;
// console.log("Elements:", firstCategoryEl.children.length);

// // console.log(itemEl.length);
// console.log("Category:", itemEl[1].textContent);

// const secondCategory = categoryElAll[1];
// const secondCategoryEl = secondCategory.lastElementChild;
// console.log("Elements:", secondCategoryEl.children.length);
// // console.log(secondCategory);
// // console.log(secondCategory.lastElementChild);

// console.log("Category:", itemEl[2].textContent);

// const thirdCategory = categoryElAll[2];
// const thirdCategoryEl = thirdCategory.lastElementChild;
// console.log("Elements:", thirdCategoryEl.children.length);
// // console.log(thirdCategory);
// // console.log(thirdCategory.lastElementChild);
