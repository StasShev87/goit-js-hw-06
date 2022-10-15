const fontSizeControl = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

fontSizeControl.addEventListener("input", (event) => {
  const fontSize = event.currentTarget.value;
  text.style.fontSize = `${fontSize}px`;
});

// Set initial font value
const fontSize = fontSizeControl.value;
text.style.fontSize = `${fontSize}px`;
