export const initNavigationMenu = (el = document.querySelector('.nav')) => {
  if (el) {
    const items = [...el.querySelectorAll('.nav__item')]
    let activeItem = items.find((item) => item.matches('.active'))

    items.forEach((item) => {
      item.addEventListener('click', function() {
        if (this != activeItem) {
          activeItem.classList.remove('active')
          this.classList.add('active')
          activeItem = this
        }
      })
    })
  }
}
