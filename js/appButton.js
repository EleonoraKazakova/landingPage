const showButton = () => {
  const myButton = document.getElementById('topBtn')
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    myButton.style.display = 'flex'
  } else {
    myButton.style.display = 'none'
  }
}

const scrollToTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
