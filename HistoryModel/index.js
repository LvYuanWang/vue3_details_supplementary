document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content')

  const renderPage = (path) => {
    console.log(path)
    switch (path) {
      case '/':
      case '/index.html':
        content.innerHTML = '<h1>Home</h1><p>Welcome to the home page!</p>'
        break

      case '/about':
        content.innerHTML = '<h1>About</h1><p>This is the about page.</p>'
        break

      case '/contact':
        content.innerHTML = '<h1>Contact</h1><p>Get in touch with us.</p>'
        break

      default:
        content.innerHTML =
          '<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>'
        break
    }
  }

  document.querySelectorAll('a[data-item]').forEach((link) => {
    link.addEventListener('click', (e) => {
      // 阻止默认事件
      e.preventDefault()
      const path = e.target.getAttribute('href')
      // 推入到浏览器历史记录中
      history.pushState({}, '', path)

      renderPage(path)
    })
  })

  // Initial render
  renderPage(window.location.pathname || '/home')
})
