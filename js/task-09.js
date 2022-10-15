function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const chColorBtn = document.querySelector("button.change-color");
const output = document.querySelector("span.color");
const body = document.querySelector("body");

chColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  output.textContent = randomColor;
});
