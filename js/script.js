document.addEventListener('click', (event) => {
  event.preventDefault()

})

function itemActive(menuSelector, menuItemsSelector, activeClass) {
  const menuItems = document.querySelectorAll(menuItemsSelector)
  const menu = document.querySelector(menuSelector)

  console.log('menu', menu);
  console.log('menu items', menuItems);

  menu.addEventListener('click', (event) => {
    console.log(event.target);
    if ((event.target.closest('li')) && (!(event.target.closest('li').classList.contains(activeClass)))) {
      console.log(1);
      menuItems.forEach((item) => {
        console.log(2)
        if (item.classList.contains(activeClass)) {
          item.classList.remove(activeClass)
        }
      })
      event.target.closest('li').classList.add(activeClass)
    }
  })
}

itemActive('.menu__list', '.menu__item', 'menu__item--active')
