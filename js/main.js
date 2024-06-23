function abrirLogin() {
    window.location.href = 'login.html';
}

// Função para pesquisar no google
function pesquisarNoGoogle() {
    let query = document.getElementById('pesquisa').value;
    if (query == '') {
        return;
    } else {
        let url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        window.open(url, '_blank');
    }
}

// Pressionar enter pesquisa
document.addEventListener('DOMContentLoaded', () => {
    const pesquisa = document.getElementById('pesquisa');
    pesquisa.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            pesquisarNoGoogle(); 
        }
    });
});