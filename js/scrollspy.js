export function setScroll() {
    let aMenuItems = document.querySelectorAll("nav.tablet a")
    let aSections = document.querySelectorAll("section")
    let oOffsets = []

    prepareNavigation()
    window.addEventListener('scroll', changeMenuStyle)


    function prepareNavigation() {
        aSections.forEach(
            (item) => oOffsets['#' + item.id] = item.offsetTop
        )
    }

    function changeMenuStyle() {
        let pageOffset = window.pageYOffset
        let menuItem = 0
        if (pageOffset >= oOffsets['#home'] && pageOffset < oOffsets['#whoiam']) {
            menuItem = 0
        } else if (pageOffset >= oOffsets['#whoiam'] && pageOffset < oOffsets['#studies']) {
            menuItem = 1
        } else if (pageOffset >= oOffsets['#studies'] && pageOffset < oOffsets['#work']) {
            menuItem = 2
        } else if (pageOffset >= oOffsets['#work'] && pageOffset < oOffsets['#about']) {
            menuItem = 3
        } else if (pageOffset >= oOffsets['#about'] && pageOffset < oOffsets['#contact']) {
            menuItem = 4
        } else {
            menuItem = 5
        }

        aMenuItems.forEach(
            (item) => item.classList.remove('active')
        )
        aMenuItems[menuItem].classList.add('active')
    }
}