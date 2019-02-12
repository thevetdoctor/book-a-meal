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


    // setInterval(() => {
    //     display.style.color == '#000' ?  display.style.color = '#fff' : display.style.color = '#000';
    //     display.innerHTML == `` ? display.innerHTML = `<h3> Sign Up Form Submitted </h3>` : display.innerHTML = ``;

    //     // console.log(display.parentNode);
    // }, 1000);

    setTimeout(() => {
        window.location.href = './user.html';
    }, 2000);

}


submit.addEventListener('click', signUp);