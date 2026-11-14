
const target = document.getElementById("target");

const picArray = [];

for (const pic of picArray) {
    const article = document.createElement("article");
    article.classList.add("card");

    const heading = document.createElement("h2");
    heading.textContent = pic.title;

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = pic.image.medium;
    img.alt = pic.title;

    const caption = document.createElement("figcaption");
    caption.textContent = pic.caption;

    const description = document.createElement("p");
    description.textContent = pic.description;

    figure.appendChild(img);
    figure.appendChild(caption);

    article.appendChild(heading);
    article.appendChild(figure);
    article.appendChild(description);

    target.appendChild(article);
}
