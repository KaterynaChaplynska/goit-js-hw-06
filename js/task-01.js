const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((elem) => {
    console.log(`Category: ${elem.firstElementChild.innerHTML}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});

