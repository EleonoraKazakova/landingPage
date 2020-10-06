function showButton(){
    const myButton = document.getElementById('topBtn')
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        myButton.style.display = 'block'
    } else {
        myButton.style.display = 'none'
    }
}

function scrollToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}