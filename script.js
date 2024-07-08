
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const minimizeBtn = document.getElementById('minimize-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
});

minimizeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
});


function toggleDescription(id) {
    const descricao = document.getElementById(id);
    descricao.classList.toggle('hidden');
}

const text = document.getElementById('typed-text');

function toggleEffect() {
    text.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00f, 0 0 70px #00f, 0 0 80px #00f, 0 0 100px #00f, 0 0 150px #00f";
}

setInterval(() => {
    toggleEffect();
    setTimeout(() => {
        text.style.textShadow = "none";
    }, 500);
}, 1000);

