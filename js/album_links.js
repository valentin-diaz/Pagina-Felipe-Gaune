var caratulas = document.querySelectorAll('.img-container .link-container')
// console.log(caratulas)

function mover(element){
    element.style.opacity = '1'
    var a_tag = element.children[0]
    a_tag.style.transform = 'translateY(0%)'
}

function mout(element){
    element.style.opacity = '0'
    var a_tag = element.children[0]
    a_tag.style.transform = 'translateY(150%)'
}

caratulas.forEach(element => element.addEventListener('mouseover', function() {
    mover(element)
}))

caratulas.forEach(element => element.addEventListener('mouseout', function () {
    mout(element)
}))