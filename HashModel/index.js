document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content')

  const renderPage = (hash) => {
    switch (hash) {
      case '#/home':
        content.innerHTML = '<h1>Home</h1><p>Welcome to the home page!</p>'
        break

      case '#/about':
        content.innerHTML = '<h1>About</h1><p>This is the about page.</p>'
        break

      case '#/contact':
        content.innerHTML = '<h1>Contact</h1><p>Get in touch with us.</p>'
        break

      default:
        content.innerHTML =
          '<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>'
        break
    }
  }

  window.addEventListener('hashchange', () => {
    renderPage(window.location.hash)
  })

  // Initial render
  renderPage(window.location.hash || '#/home')
})
