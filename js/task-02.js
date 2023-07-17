const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelectorAll('ul');
const listEl = ulEl.map(item => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = item;
  console.log(liEl);
});
