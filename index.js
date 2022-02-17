// Write your code here...
//DONE --Fetch all the menu items from http://localhost:3000/menu. For each menu item create a span element that contains the name of the menu item, and add it to the #menu-items div.
//DONE-- When the page loads, display the first menu item. You should set the image, name, description, and price. All the correct elements to set are located in the #dish section element.
//DONE -- When the user clicks on the menu items on the left, they should see all the details for that specific menu item.
//The user should be able to add the menu items to their cart. When the user presses the 'Add to Cart' button, that number should be added to however many are currently in the cart.

let menus;
let currentItem;
let numberInCart = document.querySelector('#number-in-cart')


fetch('http://localhost:3000/menu')
.then(resp => resp.json())
.then(menuData => {
    menus = menuData;
    console.log(menuData)
    menuData.forEach(menuData => {
        addToMenu(menuData)
    })

    showMenuItem(menuData[0])
    addToCart()
})

function addToMenu (allItems) {
    let menuList = document.querySelector('#menu-items')
    let foodNames = document.createElement('span')
    foodNames.textContent = allItems.name
    menuList.append(foodNames);

    foodNames.addEventListener('click', e => {
        console.log('clicked')

        showMenuItem(allItems)
    })
}

function showMenuItem (dishItem) {
    currentItem = dishItem; 

    let dishImage = document.querySelector('#dish-image')
    dishImage.src = dishItem.image
    let dishName = document.querySelector('#dish-name')
    dishName.textContent = dishItem.name 
    let dishDescription = document.querySelector('#dish-description')
    dishDescription.textContent = dishItem.description
    let dishPrice = document.querySelector('#dish-price')
    dishPrice.textContent = `$${dishItem.price}`
    let numberInCart = document.querySelector('#number-in-cart')
    numberInCart.textContent = dishItem.number_in_bag
}

function addToCart () {
    let cartForm = document.querySelector('#cart-form')

    cartForm.addEventListener('submit', e => {
        e.preventDefault();
        currentItem.number_in_bag += parseInt(e.target['cart-amount'].value);

        showMenuItem(currentItem);

        e.target.reset();
    })
}
// numberInCart.textContent = cartAmount;

//need to work on for each, adding something to page and then when you click off it it stays, and parseint, and +=


