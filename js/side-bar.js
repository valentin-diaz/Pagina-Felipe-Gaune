var bars_btn = document.getElementById('bars')
var side_menu = document.getElementById('side-menu')
var close_btn = document.getElementById('close')

bars_btn.addEventListener('click', function(){
    // side_menu.style.visibility = 'visible'
    // side_menu.style.width = '100%'
    side_menu.style.transform = 'translateX(0)'
})

close_btn.addEventListener('click', function(){
    // side_menu.style.width = '0'
    // side_menu.style.visibility = 'hidden'
    side_menu.style.transform = 'translateX(100%)'
})