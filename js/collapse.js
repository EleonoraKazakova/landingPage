const collapse = () => {
  const headerList = document.querySelectorAll('.sectionStyle')

  for(let header of headerList){
    const headerH = header.querySelector('h1')

    headerH.addEventListener('click', () => { 
      const text = headerH.nextElementSibling

      if(text.style.display === 'none'){
          text.style.display = 'block'
      } else {
          text.style.display = 'none'
      }
    })
  }
}