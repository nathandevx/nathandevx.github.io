function bigger() {
    let textArea = document.getElementById('text');
    textArea.style.fontSize = '4em';
}

function makeItFancy() {
    let textArea = document.getElementById('text');
    textArea.style.fontWeight = 'bold';
    textArea.style.color = 'blue';
    textArea.style.textDecoration = 'underline'
}

function makeItBoring() {
    let fancyShmancy = document.getElementById('FancyShmancy')
    let textArea = document.getElementById('text');
    if (fancyShmancy.checked) {
        textArea.style.fontSize = "initial";
        textArea.style.fontWeight = 'normal';
        textArea.style.color = 'black';
        textArea.style.textDecoration = 'none'
    } else {
    }
}

function moo() {
    let textArea = document.getElementById('text');
    textArea.value = textArea.value.toUpperCase();  // make words uppercase
    // Logic for adding -Moo at the end of the last word of each sentence.
    if (textArea.value.includes('.')) {  // is it a sentence?
        sentences = textArea.value.split('.')
        sentences.forEach(function(value, index) {
            if (value != '') {  // so it doesn't add -Moo at the end of the last period "hello this is a sentence-Moo.-Moo
                sentences[index] = value + "-Moo"
            }
        });
        textArea.value = sentences.join('.')
    }
}
