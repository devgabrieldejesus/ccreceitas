/* =============================================================  MENU ============================================================= */

// Função de adicionar e tirar class com largura fixa
function menuToogle() {
    // salvado o id do menu area em uma variavel
    let  menuArea = document.getElementById("menu-area");

    // verificando se a class menu-opened está presente:
    if(menuArea.classList.contains('menu-opened') == true) { 
        menuArea.classList.remove('menu-opened'); // se tiver então quer dizer que o menu está aberto então eu tiro a class menu-opened
    }

    // caso contrário então significa que o menu está fechado então adiciono a class para abrir o menu
    else { 
        menuArea.classList.add('menu-opened');
    }
}