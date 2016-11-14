// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

// Security
if (sessionStorage.getItem('user') === null) {
  location.href = 'index.html'
}

// Variables
window.prefixPath = location.href.includes('github') ? '/chirp-fall-2016' : ''
window.apiHost = 'https://fathomless-gorge-57039.herokuapp.com'
window.apiServer = window.apiHost + '/api'
window.apiUser = JSON.parse(sessionStorage.getItem('user'))
window.apiToken = apiUser.api_token

// Render
ReactDOM.render(<App />, document.getElementById('app'))
