const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const itemsEl = ingredients.map((elem) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.textContent = elem;
  return itemRef;
});

listRef.append(...itemsEl);
