const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newElements = [];
// Create new elements
for (const ingredient of ingredients) {
  const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  newElement.classList.add("item");
  newElements.push(newElement);
}
// Insert the elements
const ingredientsList = document.querySelector("ul#ingredients");
ingredientsList.append(...newElements);
