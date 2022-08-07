const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const listEl = document.querySelector(".gallery");
listEl.classList.add("image__list");
console.log(listEl);

const imagesEl = images
  .map(
    (image) =>
      `<li class="image__item"><img src ="${image.url} alt="${image.alt}" class="image__style"/></li>`
  )
  .join("");
console.log(imagesEl);
listEl.insertAdjacentHTML("beforeend", imagesEl);

// --------------------
// старий варіант

// console.log(firstIitemListEl);!!!!
// console.log(firstImgEl);

// firstImgEl.src =
//   "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260";
// firstImgEl.alt = "White and Black Long Fur Cat";
// firstImgEl.width = 640;

// const secondItemListEl = document.createElement("li");
// const secondImgEl = document.createElement("img");
// // console.log(secondItemListEl);!!!!
// // console.log(secondImgEl);
// (secondImgEl.src =
//   "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260"),
//   (secondImgEl.alt = "Orange and White Koi Fish Near Yellow Koi Fish");
// secondImgEl.width = 640;

// const thirdIitemListEl = document.createElement("li");
// const thirdImgEl = document.createElement("img");
// // console.log(thirdIitemListEl);!!!!!
// // console.log(thirdImgEl);
// (thirdImgEl.src =
//   "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260"),
//   (thirdImgEl.alt = "Group of Horses Running");
// thirdImgEl.width = 640;

// .insertAdjacentHTML(afterend, itemListEl);

// listEl.insertAdjacentHTML("afterbegin", "<li>${firstImgEl}</li>");
// listEl.insertAdjacentHTML("afterbegin", secondItemListEl);

// listEl.append(firstIitemListEl, secondItemListEl, thirdIitemListEl);

// firstIitemListEl.appendChild(firstImgEl);
// secondItemListEl.appendChild(secondImgEl);
// thirdIitemListEl.appendChild(thirdImgEl);

// console.log(listEl);!!!!!
