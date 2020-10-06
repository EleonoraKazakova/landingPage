function showMenuBar(){
    const myMenuBar = document.getElementById('menuBar')
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        myMenuBar.style.display = 'block'
    } else {
        myMenuBar.style.display = 'none'
    }
}


function scrollMenuBar() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function timeMenuBar(){
    const time = setTimeout(scrollMenuBar, 1000)
}

   /* function showMenuBar(){
        window.addEventListener( 'scroll', () => {
            if( window.scrollY > 50 ){
                return document.querySelector('.menuBar').classList.add('hide')
            } 
                return document.querySelector('.menuBar').classList.remove('hide')
            
        })
    }
    function timeMenuBar(){
        const time = setTimeout(showMenuBar, 3000)

    */

    /*function showMenuBar(){
    const currentMenuBar = window.pageYOffset

    if(currentMenuBar > 20){
        document.getElementById('menuBur').style.display = 'block' 
    } else {
        document.getElementById('menuBur').style.display = 'none'
    }
}
function timeMenuBar(){
    const time = setTimeout(showMenuBar, 3000)*/





