const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const minimizeBtn = document.getElementById('minimize-btn');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu .menu-link');
const textElement = document.getElementById('typed-text');
const texts = ["Filipe Lopes", "Desenvolvedor Front-End"];
let textIndex = 0;
let charIndex = 0;


function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 500);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    typeWriter();
});


menuBtn.addEventListener('click', () => {
    menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    menu.classList.add('animate__animated', 'animate__fadeOutUp');
    setTimeout(() => {
        menu.classList.remove('animate__animated', 'animate__fadeOutUp');
    }, 500);
});

minimizeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
    });
});

function toggleDescription(id) {
    const descricao = document.getElementById(id);
    descricao.classList.toggle('hidden');
}


function toggleEffect() {
    textElement.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00f, 0 0 70px #00f, 0 0 80px #00f, 0 0 100px #00f, 0 0 150px #00f";
}


setInterval(() => {
    toggleEffect();
    setTimeout(() => {
        textElement.style.textShadow = "none";
    }, 500);
}, 1000);
