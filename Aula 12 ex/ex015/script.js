function verificar() {
    var data = new Date() // Data atual
    var ano = data.getFullYear() // o new Date() será para ano
    var fano = document.getElementById('txtano') // Definindo variável
    var res = document.getElementById('res') // Definindo variável
    if (fano.value.length == 0 /* Se não preencher o ano (length é a quantidade de caracteres)*/|| Number(fano.value > ano)) /* Se o ano preenchido for maior que o ano atual */ {
        window.alert('[ERRO] Verifique os dados e tente novamente!') // Irá aparecer esse alerta
    } else { // Se não, segue as configurações abaixo normalmente
        var fsex = document.getElementsByName('radsex') // definindo variável
        var idade = ano - Number(fano.value) // definindo variável
        var genero = ''
        var img = document.createElement('img') // Definindo variável e criando uma tag <img> no HTML
        img.setAttribute('id', 'foto') // Irá atribuir um id="foto" à tag <img> (<img id="foto">)
        if (fsex[0].checked) { //if else para a var genero
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // CRIANÇA
                img.setAttribute('src', 'img/foto-criança-homem 1.png')// Atribuindo à tag <img> essa foto
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'img/foto-jovem-homem 1.png')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'img/foto-adulto-homem 1.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'img/foto-idoso-homem 1.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // CRIANÇA
                img.setAttribute('src', 'img/foto-criança-mulher 1.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src','img/foto-jovem-mulher 1.png')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src','img/foto-adulto-mulher 1.png')
            } else {
                // IDOSO
                img.setAttribute('src','img/foto-idoso-mulher 1.png')
            }
        }
        res.style.textAlign = 'center' // Centralizando o texto
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // Mensagem que irá aparecer
        res.appendChild(img)// Aparecer na div res, as imagens
    }
}