export function wordCount() {
    let maxWords = 150
    let wordsInserted
    let textArea = document.querySelector('#message')
    let textMessage = document.querySelector('#message').value
    let textWordLeft = document.querySelector('#wordsLeft')
 
    textArea.addEventListener('keyup', wordInserted)
    textArea.addEventListener('keydown', writeCharacter)

    function wordInserted() {
        wordsInserted = textMessage.trim().split(/\s+/).length
        textMessage = document.querySelector('#message').value
        textWordLeft.innerHTML = maxWords-wordsInserted
    }

    function writeCharacter() {
        if (wordsInserted > maxWords-1) {
            if (event.keyCode == 46 || event.keyCode == 8) {
            } else if (event.keyCode < 48 || event.keyCode > 57) {
                event.preventDefault();
            }
        }
    }
}