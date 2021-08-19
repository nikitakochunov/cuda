document.addEventListener('click', (event) => {
  event.preventDefault()

})

function itemActive(menuSelector, menuItemsSelector, activeClass) {
  const menuItems = document.querySelectorAll(menuItemsSelector)
  const menu = document.querySelector(menuSelector)

  menu.addEventListener('click', (event) => {
    if ((event.target.closest('li')) && (!(event.target.closest('li').classList.contains(activeClass)))) {
      menuItems.forEach((item) => {
        if (item.classList.contains(activeClass)) {
          item.classList.remove(activeClass)
        }
      })
      event.target.closest('li').classList.add(activeClass)
    }
  })
}

itemActive('.menu__list', '.menu__item', 'menu__item--active')

itemActive('.categories__list', '.categories__item', 'categories__item--active')

