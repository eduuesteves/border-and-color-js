let borderTopLeft = document.getElementById('topLeft')
let borderTopRight = document.getElementById('topRight')
let borderBottomLeft = document.getElementById('bottomLeft')
let borderBottomRight = document.getElementById('bottomRight')
let color = document.getElementById('bg')
let painel = document.getElementById('painel')

console.log(`${color.value}`)

function aplicar() {
    painel.style.borderTopLeftRadius = borderTopLeft.value+'px'
    painel.style.borderTopRightRadius = borderTopRight.value+'px'
    painel.style.borderBottomLeftRadius = borderBottomLeft.value+'px'
    painel.style.borderBottomRightRadius = borderBottomRight.value+'px'
    painel.style.backgroundColor = color.value
}
