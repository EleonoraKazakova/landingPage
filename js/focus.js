const heightPage = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2

function focusElement() {
  const sections = document.querySelectorAll('.sectionStyle')
  for (let i = 0; i < sections.length; i++) {
    if (heightPage > sections[i].getBoundingClientRect().top && heightPage < sections[i].getBoundingClientRect().bottom){
      
      sections[i].classList.add('style')
    } else {
      sections[i].classList.remove('style')
    }
  }
}

window.onload = () => focusElement()