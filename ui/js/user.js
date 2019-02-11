// user.js
const userDisplay = document.querySelector('#user-display'),
        meals = document.querySelector('.row');

let choices = document.querySelectorAll('.btn');


const pickMeal = () => {

    choices.innerText = 'Added'
    console.log(choices.parentElement);
}

choices.forEach((choice) => {
    choice.addEventListener('click', pickMeal);
});

