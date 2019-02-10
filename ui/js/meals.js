// meals.js

const display = document.querySelector('.display'),
     mealName = document.querySelector('#meal-name'),
    mealPrice = document.querySelector('#meal-price'),
   addMealBtn = document.querySelector('#addMeal');


const meals = [{
                name: 'Rice',
                price: '30.00'
            },
            {
                name: 'Beans',
                price: '40.00'
            },
            {
                name: 'Boiled Yam',
                price: '10.00'
            }
        ];

const update = () => {
    
    let output = `<div>`, count = 0;

    for(let meal of meals){
        count++;

        output +=  `<div id="${count}" class="meal-class">${count} - ${meal.name} N${meal.price.toString()} <button class="edit">Edit</button> <button class="delete">Delete</button></div>`;
        console.log('id', count);
        }
        output += `</div>`;

        display.innerHTML = output;
    }

    update();

    const addMeal = (name, price) => {

        let newMeal = {name, price};

        console.log(newMeal);

        if(newMeal !== undefined){
            meals.push(newMeal);

        }

        console.log(meals);

        update();
    }


addMealBtn.addEventListener('click', addMeal(mealName.value, mealPrice.value));


