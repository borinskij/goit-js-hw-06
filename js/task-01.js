//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).


const liRef = document.querySelector('#categories').children;
// console.log('liRef', liRef);

console.log('Number of categories', liRef.length);

[...liRef].forEach((li) => {
    const title = li.querySelector('h2').textContent;
    console.log('Category', title);

    const innerList = li.querySelectorAll('li').length;
    console.log('Elements', innerList);

});
