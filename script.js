var tela = document.querySelector('p.texto-tela')
var botao = document.querySelectorAll('input.botao')

function buttonClick() {
    for (let i = 0; i < botao.values.length; i++) {
        console.log(botao[i])
    }
}