
const target = document.getElementById("target");
const p = document.createElement("p");

const li1 = document.createElement("li");
li1.innerHTML = "First item";
target.appendChild(li1);

const li2 = document.createElement("li");
li2.innerHTML = "Second item";
li2.classList.add("my-item");
target.appendChild(li2);

const li3 = document.createElement("li");
li3.innerHTML = "Third item";
target.appendChild(li3);

p.innerHTML = "This is a paragraph added to the target element.";
target.appendChild(p);
