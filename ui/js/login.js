// login.js

const login  = document.querySelector('#login'),
     display = document.querySelector('.display'),
     greeting = document.querySelector('#greeting'),
        form = document.querySelector('form');



const logIn = (e) => {
    e.preventDefault();
    
    greeting.style.display = 'none';
    form.style.display = 'none';
    display.innerHTML = `<h3> Login Successful! </h3>`;
}


login.addEventListener('click', logIn);