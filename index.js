// Write your code here...
//Fetch all the menu items from http://localhost:3000/menu. For each menu item create a span element that contains the name of the menu item, and add it to the #menu-items div.

let menus;
fetch('http://localhost:3000/menu')
.then(resp => resp.json())
.then(menuData => {
    menus = menuData;
    console.log(menuData)
    menuData.forEach(menuData => {
        addToMenu(menuData)
    })
})

function addToMenu (allItems) {

        let menuList = document.querySelector('#menu-items')
        let foodNames = document.createElement('span')
        foodNames.textContent = allItems.name
        menuList.append(foodNames);
}

