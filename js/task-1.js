const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);
listItem.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const listLength = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${listLength}`);
});
