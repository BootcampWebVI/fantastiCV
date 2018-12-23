export function displayMenu(){
    let aMenuItems = document.querySelector("nav.tablet")
    let aOpenMenuIcon = document.querySelector('#open-menu')
    let aCloseMenuIcon = document.querySelector('#close-menu')

    aOpenMenuIcon.addEventListener('click', OpenMenu)
    aCloseMenuIcon.addEventListener('click', OpenMenu)
    
    function OpenMenu() {
        aMenuItems.classList.toggle('hide')
        aCloseMenuIcon.classList.toggle('hide')
        aOpenMenuIcon.classList.toggle('hide')
    }
}

