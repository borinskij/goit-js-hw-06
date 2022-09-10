// function getRandomHexColor() {
//   return console.log( `#${Math.floor(Math.random() * 16777215).toString(16)}`);
// }
// console.log(getRandomHexColor())

// const refs = {
//   input: document.querySelector('[type="number"]'),
//   btnCreat: document.querySelector('[data-create]'),
//   div: document.querySelector('#controls'),
//   divBox: document.querySelector("#boxes"),
// }

// refs.btnCreat.addEventListener('click', onBtnCreatClic)

// function onBtnCreatClic() {
//   let size = 30;
//   const countInput = refs.input.value;
//   for (let i = 0; i < countInput; i ++) {
//     const box = document.createElement("div");
//     box.style.width = size + 'px';
//     box.style.height = size + 'px';
//     box.style.backgroundColor = getRandomHexColor();
//     refs.divBox.append(box);
//     size += 10;
//   }
// }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("[type='number']"),
  btnCreate: document.querySelector("[data-create]"),
  div: document.querySelector("#controls"),
  divBoxes: document.querySelector("#boxes"),
  btnDestroy: document.querySelector('[data-destroy]')
};
refs.btnCreate.addEventListener("click", onBtnCreateClick);
refs.btnDestroy.addEventListener('click', onBtnDestroyClick)

function onBtnCreateClick(event) {
  const { value } =refs.input
  const countInput = refs.input.value;
  cfeatBoxes(countInput)
  refs.input.value = "";
}
function onBtnDestroyClick() {
  const countInput = refs.input.value;
  if (!countInput || countInput < 0) {
    refs.divBoxes.innerHTML = '';
    refs.input.value = "";

    return
  }
  const quantity = refs.divBoxes.childElementCount;

  for (let i = 0; i < countInput; i++) {
    if (i > quantity - 1) { refs.input.value = "";  return };
    refs.divBoxes.lastElementChild.remove();    
  }
  refs.input.value = "";
}
function cfeatBoxes(amout) {
  let size = 30;
  for (let i = 0; i < amout; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    refs.divBoxes.append(box);
    size += 10;
  }
 }