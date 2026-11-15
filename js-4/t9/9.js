const result = document.getElementById("result");
const button = document.getElementById("start");
const calculation = document.getElementById("calculation");

button.addEventListener("click", function() {
    const calculation = document.getElementById("calculation");
    if (!calculation || !calculation.value) {
        return;
    }

    const calculationValue = calculation.value;
    let operation;
    const operations = ["+" , "-", "*", "/"];
    operations.forEach(element => {
         if (calculationValue.includes(element)) {
            operation = element;
            return;
        };
    });

    if(!operation) {
        return;
    }
    
    const calculationCharacters = calculationValue.split(operation);
    let num1 = Number(calculationCharacters[0]);
    let num2 = Number(calculationCharacters[1]);

    if(!num1 || !num2 || !operations.includes(operation)){
        return;
    }

    let answer;
    if(operation === "+") {
        answer = num1 + num2;
    } else if (operation === "-") {
        answer = num1 - num2;
    } else if (operation === "*") {
        answer = num1 * num2;
    } else if (operation === "/") {
        answer = num1 / num2;
    }

    result.textContent = answer;
});
