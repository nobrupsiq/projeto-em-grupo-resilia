// VALIDADOR DE FORMULÁRIO

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

// BOTÃO DE ENVIAR QUE DISPARA UMA MENSAGEM DE FORMULÁRIO ENVIADO

const formEnviar = document.querySelector('.form-btn');
const sucess = document.querySelector('.form-sucesso');

function formEnviado(event) {
    if (event.type === 'touchstart') event.preventDefault();
    sucess.innerHTML = 'Enviado com sucesso!'
    sucess.style.color = "#4caf50";

}

formEnviar.addEventListener('click', formEnviado);
formEnviar.addEventListener('touchstart', formEnviado);
