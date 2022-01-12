var bars_btn = document.getElementById('bars')
var side_menu = document.getElementById('side-menu')
var close_btn = document.getElementById('close')

function translateX(element, perc){
    element.style.transform = `translateX(${perc}%)`
}

bars_btn.addEventListener('click', function(){
    translateX(side_menu, 0)
})
close_btn.addEventListener('click', function(){
    translateX(side_menu, 100)
})