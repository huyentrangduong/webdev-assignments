const target = document.getElementById("target");


const names = ["John", "Paul", "Jones"];
for (const name of names){
    // target.innerHTML += `<li>${name}</li>`;
    const li = document.createElement("li");
    li.innerHTML = name;
    target.appendChild(li);
}


