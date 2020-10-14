const heightPage = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 3

const focusElement = () => {
  const sections = document.querySelectorAll('.sectionStyle')
  for (let i = 0; i < sections.length; i++) {
    const sectionId = sections[i].id
    const linkId = `link-${sectionId}`
    const link = document.getElementById(linkId)

    const rect = sections[i].getBoundingClientRect()

    if (link === null){
      return
    }

    if (heightPage > rect.top && heightPage < rect.bottom) {
      sections[i].classList.add('style')
      link.classList.add('activeBackground')
    } else {
      sections[i].classList.remove('style')
      link.classList.remove('activeBackground')
    }
  }
}