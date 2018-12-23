import { displayMenu } from './menu.js'
import { setForm } from './form.js'
import { selectionChange } from './form.js'
import { wordCount } from './wordCounter.js'
import { setScroll } from './scrollspy.js'
import { showMoreWork } from './showMore.js'

function app(){
    displayMenu()
    setForm()
    selectionChange()
    wordCount()
    setScroll()
    showMoreWork()
}

document.addEventListener('DOMContentLoaded', app)