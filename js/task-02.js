const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

let list = ingredients.map((item) => {
  let itemList = document.createElement("li");
      itemList.classList.add("item");
      itemList.textContent = item;
  return itemList;
});

ingredientsList.after(...list);