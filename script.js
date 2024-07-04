// Funções para controlar os controles do menu
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

