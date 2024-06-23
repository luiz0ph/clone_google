let Email = localStorage.getItem('Email');
let localEmail = document.getElementById('e-mail');
localEmail.innerHTML = Email;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('user').focus();
}) 

function voltar() {
    window.history.back();
}

let userInput = document.getElementById('user');
let userLabel = document.getElementById('label_user');
let btnEnviar = document.getElementById('avancar');

btnEnviar.addEventListener('click', enviarSenha);

function enviarSenha(event) {
    event.preventDefault();
    let valorUserInput = document.getElementById('user').value;
    if (valorUserInput.trim() == '') {
        // Se não tiver nada no input
        menssagemError();
        return false;
    } else {
        window.open('index.html', '_self');
    }
}

function menssagemError() {
    document.getElementById('menssagem_error').style.display = 'block'
    userLabel.classList.add('campo-invalido_label');
    userInput.classList.add('campo-invalido');
}

document.getElementById('user').addEventListener('input', function () {
    userInput.classList.remove('campo-invalido');
    userLabel.classList.remove('campo-invalido_label');
})

// Mostrar Senha
function mostrarSenha() {
    let mostrar = document.getElementById('mostrar');

    if (mostrar.checked) {
        userInput.type = 'text'; // Para mostrar a senha
    } else {
        userInput.type = 'password'; // Ocultar a senha
    }
}

// Ao clicar enter verificar o campo de senha
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            enviarSenha(event);
        }
    });
});