const slides = document.querySelectorAll('.slide')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')

let currSlide = 0
const goToSlide = (slide) => slides.forEach((s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`))
goToSlide(0)

const nextSlide = () => {
  currSlide === slides.length - 1 ? (currSlide = 0) : currSlide++
  goToSlide(currSlide)
}

const prevSlide = () => {
  currSlide === 0 ? (currSlide = slides.length - 1) : currSlide--
  goToSlide(currSlide)
}

btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)
