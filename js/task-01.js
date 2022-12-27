const categories = document.querySelector(`#categories`);

console.log(`Number of categories: ${categories.children.length}`)
for (let category of categories.children) {
    console.log(`Category: ${category.firstElementChild.textContent}`)
    console.log(`Elements: ${category.lastElementChild.children.length}`)
}

// const categories = document.querySelectorAll(`.item`);

// // const firstCategory = categories[0];
// // const secondCategory = categories[1];
// // const therdCategory = categories[2];

// // const firstCategoryTitle = firstCategory.querySelector("h2");
// // const secondtCategoryTitle = secondCategory.querySelector("h2");
// // const therdCategoryTitle = therdCategory.querySelector("h2");

// // const firstCategoryEl = firstCategory.querySelectorAll("li");
// // const secondtCategoryEl = secondCategory.querySelectorAll("li");
// // const therdCategoryEl = therdCategory.querySelectorAll("li");

// console.log(`Number of categories: ${categories.length}`);

// console.log(`Category: ${firstCategoryTitle.textContent}`);
// console.log(`Elements: ${firstCategoryEl.length}`)

// console.log(`Category: ${secondtCategoryTitle.textContent}`);
// console.log(`Elements: ${secondtCategoryEl.length}`)

// console.log(`Category: ${therdCategoryTitle.textContent}`);
// console.log(`Elements: ${therdCategoryEl.length}`);