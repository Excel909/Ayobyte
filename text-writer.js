const sentences = ["Ayobyte", "Where Creativity meets functionality."];
const container = document.getElementById("text-container");

let currentSentenceIndex = 0;

function animateText() {
    let index = 0;
    const sentence = sentences[currentSentenceIndex];
    const interval = setInterval(() => {
        if (index <= sentence.length) {
            container.innerHTML = sentence.substring(0, index) + "<b>" + sentence.charAt(index) + "</b>";
            index++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                deleteText();
            }, 1000); // Delay before deleting
        }
    }, 50); // Speed of typing in milliseconds
}

function deleteText() {
    let index = sentences[currentSentenceIndex].length;
    const interval = setInterval(() => {
        if (index >= 0) {
            container.innerHTML = sentences[currentSentenceIndex].substring(0, index);
            index--;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length; // Move to the next sentence
                animateText(); // Start typing the next sentence
            }, 1000); // Delay before typing the next sentence
        }
    }, 50); // Speed of deleting in milliseconds
}

animateText(); // Start the animation
