//import { setMenu } from './menu.js'
import { displayMenu } from './menu.js'
import { setForm } from './form.js'
import { showOtherField } from './form.js'

function app(){
    //setMenu()
    displayMenu()
    setForm()
    showOtherField()
}

document.addEventListener('DOMContentLoaded', app)