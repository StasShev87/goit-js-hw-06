function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls");
const boxesCount = controls.querySelector("input");
const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");

createBtn.addEventListener("click", () => {
  const boxesCountValue = Number(boxesCount.value);
  const minValue = Number(boxesCount.min);
  const maxValue = Number(boxesCount.max);
  if (boxesCountValue < minValue) {
    return;
  }
  if (boxesCountValue > maxValue) {
    return;
  }
  createBoxes(boxesCountValue);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

const boxes = document.querySelector("#boxes");

let totalBoxesAmount = 0;

function createBoxes(amount) {
  const initialSize = 30;
  const deltaSize = 10;
  const newBoxes = [];
  for (let i = totalBoxesAmount; i < totalBoxesAmount + amount; i += 1) {
    const box = document.createElement("div");
    const currentSize = initialSize + deltaSize * i;
    box.style.width = `${currentSize}px`;
    box.style.height = `${currentSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBoxes.push(box);
  }

  totalBoxesAmount += amount;
  boxes.append(...newBoxes);
}

function destroyBoxes() {
  totalBoxesAmount = 0;
  boxes.innerHTML = "";
}
