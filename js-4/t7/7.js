const target = document.getElementById("target");
const trigger = document.getElementById("trigger");

target.src = "picA.jpg";

trigger.addEventListener("mouseover", function() {
    target.src = "picB.jpg";
});

trigger.addEventListener("mouseout", function() {
    target.src = "picA.jpg";
});