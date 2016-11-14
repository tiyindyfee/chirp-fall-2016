// Variables
var prefixPath = location.href.includes('github') ? '/chirp' : ''
var apiServer = 'https://fathomless-gorge-57039.herokuapp.com/api'
var apiSignup = apiServer + '/signup'
var apiSignin = apiServer + '/login'

// Events
document.getElementById('signup').addEventListener('click', signup)
document.getElementById('signin').addEventListener('click', signin)

// Function
function signup() {
  var formData = new FormData()
  formData.append('name', document.querySelector('#name').value)
  formData.append('email', document.querySelector('#email').value)
  formData.append('password', document.querySelector('#password').value)
  formData.append('file', document.querySelector('#file').files[0])

  fetch(apiSignup, {
    body: formData,
    method: 'POST'
  })
  .then(res => res.json())
  .then(handleApiResponse)
}

function signin() {
  var formData = new FormData()
  formData.append('email', document.querySelector('#email').value)
  formData.append('password', document.querySelector('#password').value)

  fetch(apiSignin, {
    body: formData,
    method: 'POST'
  })
  .then(res => res.json())
  .then(handleApiResponse)
}

function handleApiResponse(res) {
  if (typeof res.user !== 'undefined') {
    sessionStorage.setItem('user', JSON.stringify(res.user))
    location.href = 'chirp.html'
  }
  else {
    alert('Invalid or missing information.')
  }
}
