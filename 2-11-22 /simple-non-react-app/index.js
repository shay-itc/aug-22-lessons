const counterElement = document.getElementById("counter");
const counter2Element = document.getElementById("counter2");
const increaseCounterButton = document.getElementById("increase-count-button");
const increaseCounterButton2 = document.getElementById("increase-count-button-2");
let counter = 0;
let counter2 = 0;

increaseCounterButton.addEventListener('click', () => {
    counter++;
    console.log(counter);
    //counterElement.innerHTML = counter++;
});


increaseCounterButton2.addEventListener('click', () => {
    counter2Element.innerHTML = counter2++;
});