export function setForm() {

    let form = document.querySelector('#contact')
    let oContact = {}
    form.addEventListener('submit', enviar)

    function enviar(oEv) {
        oEv.preventDefault()
        oContact.name = document.querySelector('#name').value 
        oContact.email = document.querySelector('#email').value
        oContact.phone = document.querySelector('#phone').value
        oContact.message = document.querySelector('#message').value
        oContact.selection = getSelector(document.querySelector('#selection'))
        
        console.log("Formulario enviado!")
        console.log(oContact)
    }

    function getSelector(nodo) {
        let i = nodo.selectedIndex
        if (nodo[i].value == "other"){
            let otherFieldValue = document.querySelector('#other-field').value
            return otherFieldValue
        }else{
            return nodo[i].value
        }
    }
}

export function selectionChange() {
    let selectElement = document.querySelector('#selection')
    let otherField = document.querySelector('#other-field')
    selectElement.addEventListener('change', showOtherField)

    function showOtherField() {
        let index = selectElement.selectedIndex
        let fieldValue = selectElement[index].value

        if ( fieldValue == "other"){
            otherField.classList.remove('hidden-field')
        }else
        {
            otherField.classList.add('hidden-field')
        }
    }
}