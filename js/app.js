const userName = 'foysal'
const passWord = '66445500'

const form = document.querySelector('.form')
const loginSection = document.querySelector('.login__section')
const blogSection = document.querySelector('.blog__section')
const userField = document.querySelector('.username')
const passField = document.querySelector('.password')

const logOutBtn = document.querySelector('.btn')

const logout = () => {
  blogSection.classList.add('hide')
  loginSection.classList.remove('hide')
}

logOutBtn.addEventListener('click', logout)

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const userValue = userField.value
  const passValue = passField.value
  console.log(passValue)
  if (userValue === userName && passValue === passWord) {
    loginSection.classList.add('hide')
    blogSection.classList.remove('hide')
    form.reset()
  } else {
    alert('UserName or Password Wrong')
    form.reset()
  }
})
