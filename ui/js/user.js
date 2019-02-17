// user.js
const userDisplay = document.querySelector('#user-display'),
        meals = document.querySelector('.row');

let choice = document.querySelector('.btn');
// let choices = document.querySelectorAll('.btn');


const pickMeal = () => {
    // console.log(event.target);

    choice.innerText = 'Added';
    console.log(choice.parentNode.parentNode);
}

// choices.forEach((choice) => {
    choice.addEventListener('click', pickMeal);
// });

// console.log(choices.parentNode);