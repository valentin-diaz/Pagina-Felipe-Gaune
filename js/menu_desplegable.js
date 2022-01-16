var li_banda = document.getElementById('li-banda')
var menu_desplegable = document.querySelector('.menu-desplegable')

function mostrar_menu() {
    menu_desplegable.style.display = 'block'
}

function ocultar_menu() {
    menu_desplegable.style.display = 'none'
}

li_banda.addEventListener('mouseover', mostrar_menu)
li_banda.addEventListener('mouseout', ocultar_menu)