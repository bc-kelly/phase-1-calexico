// Write your code here...
// DONE--Fetch all the menu items from http://localhost:3000/menu. For each menu item create a span element that contains the name of the menu item, and add it to the #menu-items div.
//DONE-- When the page loads, display the first menu item. You should set the image, name, description, and price. All the correct elements to set are located in the #dish section element.
// DONE-- When the user clicks on the menu items on the left, they should see all the details for that specific menu item.
//The user should be able to add the menu items to their cart. When the user presses the 'Add to Cart' button, that number should be added to however many are currently in the cart.
let currentMeal;

fetch('http://localhost:3000/menu')
.then(resp => resp.json())
.then(menuData => {
    console.log(menuData)
    
    menuData.forEach(menuData => {
        itemToMenu(menuData)
    })
    displayMeal(menuData[0])
    itemsToCart()
})

function itemToMenu (meal) {
    let menuList = document.querySelector('#menu-items')
    let menuItems = document.createElement('span')
    menuItems.textContent = meal.name
    menuList.append(menuItems)

    menuItems.addEventListener('click', e => {
        displayMeal(meal)
    })
}

function displayMeal (dish) {
    currentMeal = dish;

    let detailImage = document.querySelector('#dish-image')
    detailImage.src = dish.image
    let detailName = document.querySelector('#dish-name')
    detailName.textContent= dish.name
    let detailDescription = document.querySelector('#dish-description')
    detailDescription.textContent = dish.description 
    let detailPrice = document.querySelector('#dish-price')
    detailPrice.textContent = `$${dish.price}`
    let numberInCart = document.querySelector('#number-in-cart')
    numberInCart.textContent = dish.number_in_bag
}

function itemsToCart () {
    let cartForm = document.querySelector('#cart-form')
    cartForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log('submitted')
        currentMeal.number_in_bag += parseInt(e.target['cart-amount'].value)

        displayMeal(currentMeal);
        e.target.reset();
    })
}
















// let currentItem;

// fetch('http://localhost:3000/menu')
// .then(resp => resp.json())
// .then(menuData => {
//     console.log(menuData)

//     menuData.forEach(menuData => {
//       itemToMenu(menuData)
//     })
//     displayItem(menuData[0])
//     addToCart()
// })
// function itemToMenu (item) {
//     let menuList = document.querySelector('#menu-items')
//     let menuItem = document.createElement('span')
//     menuItem.textContent = item.name
//     menuList.append(menuItem);

//     menuItem.addEventListener('click', e => {
//         displayItem(item)
//     })
// }
// function displayItem (food) {
//     currentItem = food;

//     let dishImage = document.querySelector('#dish-image')
//     dishImage.src = food.image
//     let dishName = document.querySelector('#dish-name')
//     dishName.textContent = food.name
//     let dishDescription = document.querySelector('#dish-description')
//     dishDescription.textContent = food.description 
//     let dishPrice = document.querySelector('#dish-price')
//     dishPrice.textContent = `$${food.price}`
//     let numberInBag = document.querySelector('#number-in-cart')
//     numberInBag.textContent = food.number_in_bag
// }

// function addToCart () {
//     let form = document.querySelector('#cart-form')
//     form.addEventListener('submit', e => {
//         e.preventDefault();
//         console.log('submit')

//         currentItem.number_in_bag += parseInt(e.target['cart-amount'].value)

//         displayItem(currentItem)
//         e.target.reset()
//     })
// }











// let currentItem;

// fetch('http://localhost:3000/menu')
// .then(resp => resp.json())
// .then(menuData => {
//     console.log(menuData)

//     menuData.forEach(menuData => {
//         itemToMenu(menuData)
//     })
//     showMenuItem(menuData[0])
//     addToCart()
// })

// function itemToMenu (items) {
//     let menuList = document.querySelector('#menu-items')
//     let menuNames = document.createElement('span')
//     menuNames.textContent = items.name
//     menuList.append(menuNames)

//     menuNames.addEventListener('click', e => {
//         console.log('clicked')
//         showMenuItem(items)
//     })
// }

// function showMenuItem (item) {
//     currentItem = item;

//     let dishImage = document.querySelector('#dish-image')
//     dishImage.src = item.image
//     let dishName = document.querySelector('#dish-name')
//     dishName.textContent = item.name
//     let dishDescription = document.querySelector('#dish-description')
//     dishDescription.textContent = item.description
//     let dishPrice = document.querySelector('#dish-price')
//     dishPrice.textContent = `$${item.price}`
//     let numberInBag = document.querySelector('#number-in-cart')
//     numberInBag.textContent = item.number_in_bag
// }

// // function addToCart () {
// //     let cartForm = document.querySelector('#cart-form')
// //     cartForm.addEventListener('submit', e => {
// //         e.preventDefault();

// //         currentItem.number_in_bag += parseInt(e.target['cart-amount'].value)

// //         showMenuItem(currentItem)
// //         e.target.reset()
// //     })
// // }

// // function addToCart () {
// //     let form = document.querySelector('#cart-form')
// //     form.addEventListener('submit', e => {
// //         e.preventDefault();

// //         currentItem.number_in_bag += parseInt(e.target['cart-amount'].value)

// //         showMenuItem(currentItem)

// //         e.target.reset()
// //     })
// // }

// function addToCart () {
//     let newForm = document.querySelector('#cart-form')
//     newForm.addEventListener('submit', e => {
//         e.preventDefault();
//         currentItem.number_in_bag += parseInt(e.target['cart-amount'].value)
//         showMenuItem(currentItem)
//         e.target.reset()
//     })
// }


















// let menus;
// let currentItem;
// let numberInCart = document.querySelector('#number-in-cart')


// fetch('http://localhost:3000/menu')
// .then(resp => resp.json())
// .then(menuData => {
//     menus = menuData;
//     console.log(menuData)
//     menuData.forEach(menuData => {
//         addToMenu(menuData)
//     })

//     showMenuItem(menuData[0])
//     addToCart()
// })

// function addToMenu (allItems) {
//     let menuList = document.querySelector('#menu-items')
//     let foodNames = document.createElement('span')
//     foodNames.textContent = allItems.name
//     menuList.append(foodNames);

//     foodNames.addEventListener('click', e => {
//         console.log('clicked')

//         showMenuItem(allItems)
//     })
// }

// function showMenuItem (dishItem) {
//     currentItem = dishItem; 

//     let dishImage = document.querySelector('#dish-image')
//     dishImage.src = dishItem.image
//     let dishName = document.querySelector('#dish-name')
//     dishName.textContent = dishItem.name 
//     let dishDescription = document.querySelector('#dish-description')
//     dishDescription.textContent = dishItem.description
//     let dishPrice = document.querySelector('#dish-price')
//     dishPrice.textContent = `$${dishItem.price}`
//     let numberInCart = document.querySelector('#number-in-cart')
//     numberInCart.textContent = dishItem.number_in_bag
// }

// function addToCart () {
//     let cartForm = document.querySelector('#cart-form')

//     cartForm.addEventListener('submit', e => {
//         e.preventDefault();
//         currentItem.number_in_bag += parseInt(e.target['cart-amount'].value);

//         showMenuItem(currentItem);

//         e.target.reset();
//     })
// }
// numberInCart.textContent = cartAmount;

//need to work on for each, adding something to page and then when you click off it it stays, and parseint, and +=


