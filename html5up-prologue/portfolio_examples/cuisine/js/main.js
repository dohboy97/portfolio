

document.querySelector('.hamburger').addEventListener('click', hamMenu)

const nav = document.querySelector('.real-nav-menu')

function hamMenu (){
    nav.classList.toggle('hideAndSeek')
    
}
