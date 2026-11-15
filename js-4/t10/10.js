const target = document.getElementById("target");
const firstname = document.querySelector('input[name=firstname]');
const lastname = document.querySelector('input[name=lastname]');
const form = document.querySelector('form');

firstname.addEventListener('change', getName);
lastname.addEventListener('change', getName);


form.addEventListener('submit', (event) => {
  event.preventDefault();
});

function getName() {
    const fistNameVal = firstname.value;
    const lastNameVal = lastname.value;
    const fullName = 'Your name is ' + fistNameVal + ' ' + lastNameVal;
    target.textContent = fullName;
}

