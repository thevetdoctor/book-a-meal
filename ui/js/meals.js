// meals.js

const display = document.querySelector('.display'),
     mealName = document.querySelector('#meal-name'),
    mealPrice = document.querySelector('#meal-price'),
   addMealBtn = document.querySelector('#addMeal'),
   mealsUrl = `${apiUrl}api/v1/meals`;


const update = () => {

    fetch(mealsUrl, {method: 'GET'})
    .then(res => res.json())
    .then((response) => {
        console.log(response);
    let meals = response.data;
    let output = `<div>`, count = 0;

    for(let meal of meals){
        count++;
        // output +=  `<div id="${count}" class="meal-class section">${count} - ${meal.name} N${meal.price} <button id="${meal.id}" class="edit">Edit</button> <button id="${meal.id}" class="delete">Delete</button></div>`;
        output +=  '<div id="' + count + '" class="meal-class">' + count +  
                   '-' + meal.name + ' ' + 'N' + meal.price + '<button id="' +
                   meal.id + '" class="edit">Edit</button> <button id="' + 
                   meal.id + '" class="delete">Delete</button></div>';
        console.log('id', count);
        }
        output += `</div>`;

        display.innerHTML = output;
    })
    .catch((error) => {
        console.log(error);
    });
}

update();


const addMeal = () => {
    let newMeal = {name: mealName.value, price: mealPrice.value};

    console.log(newMeal);

    if(newMeal.name === '' && newMeal.price === ''){
        return;
    } else {
        newMeal.price += '.00';
        // meals.push(newMeal);

        fetch(mealsUrl, {
            method: 'POST',
            body: JSON.stringify({name: newMeal.name,
                                    price: newMeal.price}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    update();
}



// const deleteMeal = () => {
//     getId = (e) => {
//         let target = e.target;
//     }
//     let id = 
// }


addMealBtn.addEventListener('click', addMeal);


