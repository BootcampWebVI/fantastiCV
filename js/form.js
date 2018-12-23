export function setForm() {

    let form = document.querySelector('#contact')
    let oContact = {}
    form.addEventListener('submit', enviar)

    function enviar(oEv) {
        console.dir(oEv)
        oEv.preventDefault()
        oContact.name = document.querySelector('#name').value 
        oContact.email = document.querySelector('#email').value
        oContact.phone = document.querySelector('#phone').value
        oContact.message = document.querySelector('#message').value
        oContact.selection = getSelector(document.querySelector('#selection'))

        console.log(oContact)
    }

    function getSelector(nodo) {
        let i = nodo.selectedIndex
        return nodo[i].value
    }
}

export function showOtherField() {
    let selectElement = document.querySelector('#selection')
    let otherField = document.querySelector('#other-field')
    selectElement.addEventListener('change', function() {
        console.dir(selectElement)
        let index = selectElement.selectedIndex
        let valor = selectElement[index].value
        console.log(valor)

        if ( valor == "other"){
            console.log("llego")
            otherField.classList.remove('hidden-field')
        }else
        {
            console.log("llego 2")
            otherField.classList.add('hidden-field')
        }

        console.log("llego 3")
    })
}