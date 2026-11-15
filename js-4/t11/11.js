
const target = document.getElementById("target");

const dialog = document.querySelector("dialog");
const dialogImage = dialog.querySelector("img");
dialog.querySelector('span').addEventListener('click', () => {
    dialog.close();
});

const picArray = 
[
    {
        title: "picture1",
        image: {
            medium: "https://images.unsplash.com/photo-1767257147772-a16a5b57fa66?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            large: "https://images.unsplash.com/photo-1767257147772-a16a5b57fa66?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        },
        caption: "art",
        description: "art"
    },
    {
        title: "picture2",
        image: {
            medium: "https://images.unsplash.com/photo-1794597432306-d759994459c0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            large: "https://images.unsplash.com/photo-1794597432306-d759994459c0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        },
        caption: "italia",
        description: "italia"
    },
      {
        title: "picture3",
        image: {
            medium: "https://images.unsplash.com/photo-1788886989861-5f8c5868f587?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            large: "https://images.unsplash.com/photo-1788886989861-5f8c5868f587?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        },
        caption: "girl",
        description: "girl"
    }
];

for (const pic of picArray) {
    const article = document.createElement("article");
    article.classList.add("card");
    article.addEventListener('click', (event) => {
        dialogImage.src = pic.image.large;
        dialogImage.alt = pic.title;
        dialogImage.width = 500;
        dialogImage.height = 500;
        dialog.showModal();
    });

    const heading = document.createElement("h2");
    heading.innerHTML = pic.title;

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = pic.image.medium;
    img.alt = pic.title;
    img.width = 100;
    img.height = 100;

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
