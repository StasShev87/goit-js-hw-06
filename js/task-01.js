const categories = document.querySelector("ul#categories");
console.log("Number of categories:", categories.children.length);

for (const category of categories.children) {
  const title = category.querySelector("h2");
  console.log("Category:", title.textContent);
  const elements = category.querySelectorAll("li");
  console.log("Elements:", elements.length);
}
