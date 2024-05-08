// Collections

// Selectors
const $body = document.querySelector('body');
const $button = document.getElementById('button');
const $display = document.getElementById('display');

// Events
$button.addEventListener('click', () => {
    const color = genHexNumber();
    $body.style.backgroundColor = color;
    $display.innerHTML = color;
    console.log(color);
})

// Functions
function genRandomNumber() {
    const hex = 16;
    let number = Math.floor(Math.random() * hex);
    return number;
}
function genHexNumber() {
    const characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    const hex = genRandomNumber();
    const rr = `${characters[genRandomNumber()]}${characters[genRandomNumber()]}`;  // red
    const gg = `${characters[genRandomNumber()]}${characters[genRandomNumber()]}`;  // green
    const bb = `${characters[genRandomNumber()]}${characters[genRandomNumber()]}`;  // blue
    const rbg = `#${rr}${gg}${bb}`
    return rbg;
}