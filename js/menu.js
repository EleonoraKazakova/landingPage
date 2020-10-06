function menu(){
    const elementList  = document.querySelectorAll('h1')
    const item = document.createDocumentFragment()
        
    for(let el of elementList) {
        const elementItem = document.createElement('p')
        const elementLink = document.createElement('a')

        elementLink.addEventListener('click', (event) => {
            event.preventDefault()
            el.scrollIntoView({block: "center", behavior: "smooth"})
        })

        elementLink.textContent = el.innerText
        elementLink.href = '#' + el.id

        elementItem.appendChild(elementLink)
        item.appendChild(elementItem).classList.add('menuText')
    }

    document.getElementById('fixMenu').appendChild(item)
   /* document.getElementById('menuBar').appendChild(item)*/
}



window.addEventListener('load', menu)


