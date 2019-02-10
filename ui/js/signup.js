// app.js

const submit = document.querySelector('#submit'),
     display = document.querySelector('.display'),
     greeting = document.querySelector('#greeting'),
        form = document.querySelector('form');



const signUp = (e) => {
    e.preventDefault();

    greeting.style.display = 'none';
    form.style.display = 'none';
    display.innerHTML = `<h3> Sign Up Form Submitted </h3>`;
}


submit.addEventListener('click', signUp);