const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

//create document element
let p = document.createElement('p');
let words = document.querySelector('.output');
words.appendChild(p);

//Display transcript on webapp
recognition.addEventListener("result", e => {
    const statement = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

        p.textContent = statement;

        if(e.results[0].isFinal) {
            p = document.createElement('p');
            words = document.querySelector('.output');
            words.appendChild(p);
        } 
})

let btn = document.querySelector('button');

//Add function to clear text
let clearText = () => {
    while(words.hasChildNodes()) {
       words.removeChild(words.lastChild)
    }
   }

//initialise recognition
recognition.start();

//Add Event listeners
recognition.addEventListener('end', recognition.start)
btn.addEventListener('click', clearText)