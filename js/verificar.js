let userInput = document.getElementById('user');
let userLabel = document.getElementById('label_user');

// Para validar e-mail
function validarEmail(email) {
    // Verifica se o email está no formato correto usando uma expressão regular
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

document.getElementById('avancar').addEventListener('click', verificarLogin);
let form = document.getElementById('login');

function verificarLogin(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
    // Pega o Valor do input
    let valorUserInput = document.getElementById('user').value;

    if (valorUserInput == '' || !valorUserInput.includes('@') || !validarEmail(valorUserInput)) {
        menssagemError();
    } else {
        let Email = document.getElementById('user').value;
        window.localStorage.setItem('Email', Email);
        window.open('https://luiz0ph.github.io/clone_google/senha.html', '_self');

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

// Ao clicar enter verificar o campo de e-mail
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            verificarLogin(event);
        }
    });
});