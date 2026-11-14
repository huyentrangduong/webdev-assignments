const target = document.getElementById("target");

const students = [
    {id: "2345768",name: "John"},
    {id: "2134657",name: "Paul"},
    {id: "5423679",name: "Jones"}
];

for (const student of students){
    const option = document.createElement("option");
    option.value = student.id;
    option.innerHTML = student.name;
    target.appendChild(option);
}   
