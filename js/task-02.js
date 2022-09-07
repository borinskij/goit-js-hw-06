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
// console.log(lastRef)


const liEl = ingredients.map(element => {
  // console.log(element)
  const liRef = document.createElement('li');
  // console.log(liRef)
  liRef.textContent = element;
  lastRef.classList.add('item');
  return liRef
}); 
// console.log(...liEl)
lastRef.append(...liEl);


