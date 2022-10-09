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


// CARDÁPIO

//Setei a classe do meu botao de adicionar
const plus = document.querySelectorAll('.plus');
const cart = document.querySelector('.cart');


// Função que vai ser disparada ao clicar no botao de adicionar
// Setei o id do meu Li que tem a imagem do carrinho 'cartvalue'
// peguei o atributo 'data-value' e toda vez que o usuário clicar no botão de adicionar
// o meu contador vai adicionar +1 ao meu atributo data-value que está no html
// que eu coloquei como 0
var cartValor = document.querySelector('#cartvalue');
let contador = 0
function ativarCarrinho(event) {
    if(event.type === 'touchstart') event.preventDefault()
    cartValor.setAttribute('data-value', ++contador)
    cart.classList.add('ativo');
}

// Como são vários botões adicionei um loop para interagir com cada um deles
// e adicionei um evento de click, que ao clicar em qualquer botao de adicionar
// a função será disparada
plus.forEach((item) => {
    item.addEventListener('click', ativarCarrinho);
    item.addEventListener('touchstart', ativarCarrinho);
})



//  VALIDAR FOMULÁRIO


function validador() {
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let texto = document.getElementById('validador-texto');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add('valido')
        texto.innerHTML = 'Email válido!';
        texto.style.color = "#4caf50";
    }
    else {
        form.classList.remove('valido');
        texto.innerHTML = 'Email inválido!'
        texto.style.color = "#f44336";
    }
}

// BOTÃO DE ENVIAR QUE DISPARA UM ALERTA AO CLICK OU TOUCH

const formEnviar = document.querySelector('.form-btn');
const sucess = document.querySelector('.form-sucesso');

function formEnviado(event) {
    if (event.type === 'touchstart') event.preventDefault();
    sucess.innerHTML = 'Enviado com sucesso!'
    sucess.style.color = "#4caf50";
}

formEnviar.addEventListener('click', formEnviado);
formEnviar.addEventListener('touchstart', formEnviado);
