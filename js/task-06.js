const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  const expectedLength = Number(event.currentTarget.dataset.length);

  const valid = event.currentTarget.value.length === expectedLength;
  if (valid) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
