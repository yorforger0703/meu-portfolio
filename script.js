let texts = [];
if (window.innerWidth <= 600) {
    texts = [
        "Estudante de ADS",
        "Dev Web",
        "Web Designer",
        "Dev de Sistemas",
        "Dev Front-end"
    ];
} else {
    texts = [
        "Estudante de ADS",
        "Desenvolvedora Web",
        "Web Designer",
        "Dev de Sistemas",
        "Dev Front-end"
    ];
}


const typingSpan = document.querySelector(".typing-text span");
let textIndex = 0;

function typeText() {
    typingSpan.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
}

setInterval(typeText, 5000);

typeText();

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
