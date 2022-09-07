const ref = {
  button: document.querySelector('.change-color'),
  body: document.body,
  spanColor: document.querySelector('.color'),
}

ref.button.addEventListener('click', RandomColor);

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

function RandomColor() {
  ref.body.style.backgroundColor = getRandomHexColor();
  ref.spanColor.textContent = getRandomHexColor();
}