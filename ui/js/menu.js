// menu.js

class MenuList {

    constructor ( element ) {
        this.menuHandle = element;
        this.mealList = [{
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
                        }];
    }

    static createMenuItem (mealObj) {
        let div = document.createElement('div');

        div.innerHTML = `<div class="section">
                        <img src="./images/meal.jpg" alt="Food Image">
                        <br> ${mealObj.name} N${mealObj.price} <br>
                        <span class="btn">Click to choose</span>
                        </div>`;
        return div;
    }

    update () {
        // remove existing div elements
        while(this.menuHandle.firstChild){
            this.menuHandle.removeChild(this.menuHandle.firstChild);
        }

        for(const mealObj of this.mealList){
            this.menuHandle.appendChild(MenuList.createMenuItem(mealObj))
        }
    }

    add (mealObj) {
        this.mealList.push(mealObj);
        this.update();
    }

    remove (item) {
        this.mealList.splice(item - 1, 1);
        this.update();
    }
}


const myMenuList = document.querySelector('.row-top');
const add = document.getElementById('add-meal');
const mealOption = document.getElementById('mealOption');
const displayId = document.getElementById('display');
const menuList = new MenuList(myMenuList);

let sampleMeal = {name:'Fufu', price: '25.00'};

add.addEventListener('click', (e) => {
        e.preventDefault();

        if(mealOption.value.name == 'undefined') {
        return;
        } else {

        return menuList.add(sampleMeal);
    }
});


mealOption.addEventListener('blur', () => {
return menuList.remove(mealOption.value) });


