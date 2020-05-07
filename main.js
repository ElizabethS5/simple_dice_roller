const rollButton = document.querySelector("#roll-button");
const numberOfDiceInput = document.querySelector("#number-of-dice");
const diceContainer = document.querySelector("#dice-container");
const resetButton = document.querySelector("#reset-button");
const numberOfSidesInput = document.querySelector("#number-of-sides");
let rollValues = [];

rollButton.addEventListener("click", function () {
  if (numberOfSidesInput.value < 2) {
    numberOfSidesInput.value = 2;
  }
  let numberOfDice = numberOfDiceInput.value;
  let i = 0;
  while (i < numberOfDice) {
    i++;
    let rollValue = Math.ceil(Math.random() * numberOfSidesInput.value);
    rollValues.push(rollValue);
    diceContainer.innerHTML += `<div class='die die${rollValue}'>${rollValue}</div>`;
  }
  //   i = 0;
  //   while (i < rollValues.length) {
  //     diceContainer.innerHTML += `<div class='die ${
  //       numberClasses[rollValues[i]]
  //     }'></div>`;
  //     i++;
  //   }
  numberOfDiceInput.value = "";
});

resetButton.addEventListener("click", function () {
  diceContainer.innerHTML = "";
  rollValues = [];
});
