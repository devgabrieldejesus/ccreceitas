/* =============================================================  MENU ============================================================= */

// Função para abrir o menu
function openMenu() {
    // salvado o id do menu area em uma variavel
    let abrirMenu = document.getElementById("menu-area");
    // abrir menu adicionando a class com uma largura de 150px;
    abrirMenu.classList.add('menu-opened');
}

// Função para fechar o menu
function closeMenu() {
    // salvando o id do menu
    let fechar = document.getElementById("menu-area");

    // fechando o menu removendo a class que tem a largura de 150px;
    fechar.classList.remove('menu-opened');

}