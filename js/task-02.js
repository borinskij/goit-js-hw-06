// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const lastRef = document.querySelector('#ingredients');


const liEl = ingredients.map(element => {
const liRef = document.createElement('li');
  liRef.textContent = element;
  lastRef.classList.add('item');
  return liRef
}); 

lastRef.append(...liEl);


