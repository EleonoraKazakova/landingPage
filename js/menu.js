const menu = () => {
  const elementList = document.querySelectorAll('.sectionStyle')
  const item = document.createDocumentFragment()

  for (const el of elementList) {
    const elementLink = document.createElement('a')
    const elH = el.querySelector('h1')

    elementLink.addEventListener('click', (event) => {
      event.preventDefault()
      el.scrollIntoView({ block: 'start', behavior: 'smooth' })
    })
   
    elementLink.classList.add('link')
    elementLink.textContent = `${elH.innerText}`
    elementLink.href = `#${el.id}`
    elementLink.id = `link-${el.id}`
    item.appendChild(elementLink)
  }

  document.getElementById('sidebar').appendChild(item)
}