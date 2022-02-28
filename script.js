const header = document.getElementById('header');
const text = document.getElementById('text');
const colorText = document.getElementById('colorText');
const width = document.getElementById('width');
const height = document.getElementById('height');
const borderTopLeft = document.getElementById('topLeft');
const borderTopRight = document.getElementById('topRight');
const borderBottomLeft = document.getElementById('bottomLeft');
const borderBottomRight = document.getElementById('bottomRight');
const padding = document.getElementById('padding');
const borderPainel = document.getElementById('borderPainel');
const color = document.getElementById('bg');
const painel = document.getElementById('painel');

function go() {
    painel.innerHTML = text.value
    painel.style.color = colorText.value
    borderPainel.style.width = width.value + 'px';
    borderPainel.style.height = height.value + 'px';
    borderPainel.style.borderTopLeftRadius = borderTopLeft.value + 'px';
    borderPainel.style.borderTopRightRadius = borderTopRight.value + 'px';
    borderPainel.style.borderBottomLeftRadius = borderBottomLeft.value + 'px';
    borderPainel.style.borderBottomRightRadius = borderBottomRight.value + 'px';
    painel.style.borderTopLeftRadius = borderTopLeft.value + 'px';
    painel.style.borderTopRightRadius = borderTopRight.value + 'px';
    painel.style.borderBottomLeftRadius = borderBottomLeft.value + 'px';
    painel.style.borderBottomRightRadius = borderBottomRight.value + 'px';
    borderPainel.style.padding = padding.value + 'px';
    borderPainel.style.borderColor = color.value;
    painel.style.backgroundColor = color.value;
    header.style.backgroundColor = color.value;
}