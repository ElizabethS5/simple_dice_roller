const rollButton = document.querySelector("#roll-button");
const numberOfDiceInput = document.querySelector("#number-of-dice");
const diceContainer = document.querySelector("#dice-container");
const resetButton = document.querySelector("#reset-button");
const numberOfSidesInput = document.querySelector("#number-of-sides");
const numberClasses = [null, "one", "two", "three", "four", "five", "six"];
let rollValues = [];

rollButton.addEventListener("click", function () {
  let numberOfDice = numberOfDiceInput.value;
  let i = 0;
  while (i < numberOfDice) {
    i++;
    let rollValue = Math.ceil(Math.random() * numberOfSidesInput.value);
    rollValues.push(rollValue);
    diceContainer.innerHTML += `<div class='die ${numberClasses[rollValue]}'>${rollValue}</div>`;
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
