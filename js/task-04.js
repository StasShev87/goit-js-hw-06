const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterValueText = document.querySelector("#value");

var counterValue = 0;

function incCounter() {
  counterValue += 1;
  counterValueText.textContent = counterValue;
}

function decCounter() {
  counterValue -= 1;
  counterValueText.textContent = counterValue;
}

incrementBtn.addEventListener("click", incCounter);
decrementBtn.addEventListener("click", decCounter);
