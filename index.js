const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;


let p = document.createElement('p');
let words = document.querySelector('.output');
words.appendChild(p);

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

recognition.start();
recognition.addEventListener('click', recognition.start)