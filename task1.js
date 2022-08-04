const categoryEl = document.querySelectorAll("li.item");
console.log("Number of categories:", categoryEl.length);

const itemElAll = document.querySelectorAll("h2");
const itemEl = [...itemElAll];
console.log("Category:", itemEl[0].textContent);

const categoryElAll = [...categoryEl];
const firstCategory = categoryElAll[0];
// console.log(categoryElAll);

// console.log(firstCategory);
const firstCategoryEl = firstCategory.lastElementChild;
console.log("Elements:", firstCategoryEl.children.length);

// console.log(itemEl.length);
console.log("Category:", itemEl[1].textContent);

const secondCategory = categoryElAll[1];
const secondCategoryEl = secondCategory.lastElementChild;
console.log("Elements:", secondCategoryEl.children.length);
// console.log(secondCategory);
// console.log(secondCategory.lastElementChild);

console.log("Category:", itemEl[2].textContent);

const thirdCategory = categoryElAll[2];
const thirdCategoryEl = thirdCategory.lastElementChild;
console.log("Elements:", thirdCategoryEl.children.length);
// console.log(thirdCategory);
// console.log(thirdCategory.lastElementChild);
