
const button = document.getElementById("start");
const result = document.getElementById("result");

button.addEventListener("click", function() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    let answer;

    if (operation === "add") {
        answer = num1 + num2;
    } else if (operation === "sub") {
        answer = num1 - num2;
    } else if (operation === "multi") {
        answer = num1 * num2;
    } else if (operation === "div") {
        answer = num1 / num2;
    }

    result.textContent = answer;
});
