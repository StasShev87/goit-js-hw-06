const categories = document.querySelector("ul#categories");
console.log("Number of categories:", categories.children.length);

for (const category of categories.children) {
  const title = category.firstElementChild;
  console.log("Category:", title.textContent);
  const elements = category.lastElementChild;
  console.log("Elements:", elements.children.length);
}
