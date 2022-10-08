// HEADER MOBILE

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault()
    const menu = document.querySelector('.menu-items');
    menu.classList.toggle('active');
    const btn = document.querySelector('#hamburguer')
    btn.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu); // touchstart está simulando o touch do celular, mas tem um problema, quando eu ativo o touchstart logo em seguida ele ativa a função de click... resolvi isso fazendo uma verificação do tipo de evento, prevenindo o padrão do touchstart
