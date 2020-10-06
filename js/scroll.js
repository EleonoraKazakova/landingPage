//const firstPosition = 0


function itemScroll(){
    
    const elementHref = document.querySelector('.sectionStile')
    elementHref.scrollIntoView({block: "center", behavior: "smooth"})

    //elementLinkent.preventDefault()
    //elementLink.addEventListener('click', event => event.target.href = elementLink.toDataURL())
}

function bindLinkEvents(){
    const links = document.querySelectorAll('a')
    for (let link of links){
        link.addEventListener('click', itemScroll)
    }
}




