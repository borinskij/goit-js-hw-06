const buttonDescrementRef = document.querySelector('#value');
let buttonDecRed = Number(buttonDescrementRef.textContent);

const decrementRef = document.querySelector('[data-action="decrement"]');
decrementRef.addEventListener('click', onDecrementClick);

function onDecrementClick() {  
    buttonDecRed -=1;
buttonDescrementRef.innerText = buttonDecRed
};
    
const incrementRef = document.querySelector('[data-action="increment"]');
incrementRef.addEventListener('click', onIncrementClick);

function onIncrementClick() {  
    buttonDecRed += 1;
    buttonDescrementRef.innerText = buttonDecRed
}