const revealItems = document.querySelectorAll('.reveal')

const revealElement = () => {
  const innerHeight = window.innerHeight
  const revealPoint = 150
  revealItems.forEach((item) => {
    const top = item.getBoundingClientRect().top
    if (top < innerHeight - revealPoint) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', revealElement)
