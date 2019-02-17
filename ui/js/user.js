// user.js
const userDisplay = document.querySelector('#user-display'),
        meals = document.querySelector('.row'),
        choice = document.querySelector('.btn');

        let count = 0;
const pickMeal = () => {
    let e = event.target;
    console.log(e);
    let innerText = e.innerText.split(' ');
    console.log(innerText);
    e.innerText = `Added ${++count}`;
    console.log(e.parentNode);
}

    meals.addEventListener('click', pickMeal);

    const menu = [' White Rice / Chicken', 'Jollof Rice', 'Beans / Fried Plantain', 'Boiled Yam/ Egg Sauce', 'Toasted Bread / Egg Sauce', 'Indomie Special', 'Fufu/ Vegetable', 'Amala / Ewedu', 'Eba / Egusi', 'Yam Porridge', 'Fried Rice / Chicken', 'Catfish Peppersoup'];
    
    menu.forEach((meal) => {

    meals.innerHTML += `<div class="section">
                        <img src="./images/meal2.jpg" alt="Food Image">
                        <br>${meal}<br>
                        <span class="btn">Click to choose</span>
                        </div>`;
});
