const texts = [
    "Estudante de ADS",
    "Desenvolvedora Web",
    "Web Designer",
    "Desenvolvedora de Sistemas",
    "Desenvolvedora Front-end"
];
const typingSpan = document.querySelector(".typing-text span");
let textIndex = 0;

function typeText() {
    typingSpan.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
}

setInterval(typeText, 5000);

typeText();
