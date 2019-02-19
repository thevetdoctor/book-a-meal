// user.js
const userDisplay = document.querySelector('#user-display'),
        meals = document.querySelector('.row'),
        choice = document.querySelector('.btn');

const myOrders = [];

const menu = [{ name: ' White Rice / Chicken', price: '40.00' },
              { name: 'Jollof Rice', price: '25.00' },
              { name: 'Beans / Fried Plantain', price: '45:00' },
              { name: 'Boiled Yam/ Egg Sauce', price: '23.00' },
              { name: 'Toasted Bread / Egg Sauce', price: '43.00' },
              { name: 'Indomie Special', price: '30.00' },
              { name: 'Fufu/ Vegetable', price: '23.00' },
              { name: 'Amala / Ewedu', price: '40.00' },
              { name: 'Eba / Egusi', price: '25.00' },
              { name: 'Yam Porridge', price: '24.00' },
              { name: 'Fried Rice / Chicken', price: '32.00' },
              { name: 'Catfish Peppersoup', price: '34.00' }];

    if (meals) {
        menu.forEach((meal) => {
            meals.innerHTML += `<div class="section">
                                <img src="./images/meal2.jpg" alt="Food Image">
                                <br> ${meal.name} <br> N${meal.price} <br>
                                <span class="btn">Click to choose</span>
                                </div>`;
        });


        let count = 0;
const pickMeal = () => {
    let e = event.target;
    console.log(e);
    if (e.innerText !== 'Click to choose') {
        let innerText = e.innerText.split(' ');
        console.log(innerText);
        let value = innerText[innerText.length -1];
        console.log(parseInt(value , 10));
        e.innerText = `Added ${++value}`;
        console.log(e.parentNode);

        // myOrders.push({name: })
    } else {
        e.innerText = `Added ${++count }`;
    }
 }

    meals.addEventListener('click', pickMeal);
}
    
    
    

