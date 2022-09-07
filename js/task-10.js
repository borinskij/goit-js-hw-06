function getRandomHexColor() {
  return console.log( `#${Math.floor(Math.random() * 16777215).toString(16)}`);
}
console.log( getRandomHexColor())