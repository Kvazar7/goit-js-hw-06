const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let list = document.querySelector("#ingredients");

for (let ingredient of ingredients) {
    let itemList = document.createElement("li");
    itemList.classList.add("item");
    itemList.textContent = ingredient;
    list.after(itemList);
}