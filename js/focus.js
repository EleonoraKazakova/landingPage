const heightPage = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2

const focusElement = () => {
  const sections = document.querySelectorAll('.sectionStyle')
  for (let i = 0; i < sections.length; i++) {
    const rect = sections[i].getBoundingClientRect()
    if (heightPage > rect.top && heightPage < rect.bottom) {
      sections[i].classList.add('style')
    } else {
      sections[i].classList.remove('style')
    }
  }
}

window.onload = focusElement
