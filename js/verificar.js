let userInput = document.getElementById('user');
let userLabel = document.getElementById('label_user');

// Ao clicar enter verificar o campo de e-mail
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            verificarLogin();
        }
    });
});

// Para validar e-mail
function validarEmail(email) {
    // Verifica se o email está no formato correto usando uma expressão regular
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

document.getElementById('avancar').addEventListener('click', verificarLogin);

function verificarLogin(event) {
    // Pega o Valor do input
    let valorUserInput = document.getElementById('user').value;

    if (valorUserInput == '' || !valorUserInput.includes('@') || !validarEmail(valorUserInput)) {
        menssagemError();
        event.preventDefault(); // Evita que o formulário seja enviado
    } else {
        let Email = document.getElementById('user').value;
        window.localStorage.setItem('Email', Email);
        window.location.href('senha.html');
        return true;
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