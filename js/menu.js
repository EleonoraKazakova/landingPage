const menu = () => {
  const elementList = document.querySelectorAll('h1')
  const item = document.createDocumentFragment()

  for (const el of elementList) {
    const elementLink = document.createElement('a')

    elementLink.addEventListener('click', (event) => {
      event.preventDefault()
      el.scrollIntoView({ block: 'start', behavior: 'smooth' })
    })

    elementLink.textContent = el.innerText
    elementLink.href = `#${el.id}`
    item.appendChild(elementLink)
  }

  document.getElementById('sidebar').appendChild(item)
}

window.addEventListener('load', menu)
