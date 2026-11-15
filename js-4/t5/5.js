
const target = document.getElementById("target");

const picArray = 
[
    {
        title: "picture",
        image: {
            medium: "https://images.unsplash.com/photo-1767257147772-a16a5b57fa66?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        },
        caption: "holiday",
        description: "beautiful"
    }
];

for (const pic of picArray) {
    const article = document.createElement("article");
    article.classList.add("card");

    const heading = document.createElement("h2");
    heading.innerHTML = pic.title;

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
