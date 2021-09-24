// opens and closes the menu by clicking on the icon
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// hide the menu when clicking on a menu item
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// swiper
const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  slidesPerView: '1.5',
  loop: true,
  // if we need pagination
  pagination: {
    el: '.swiper-pagination'
  }
})
