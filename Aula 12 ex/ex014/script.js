function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 6){
        img.src = "fotomadrugada 1.png"
        document.body.style.background = "#3E3E4A"
    } else if (hora >= 6 && hora < 12){
        img.src = "fotomanha 1.png"
        document.body.style.background = "#C2CDCF"
    } else if (hora >= 12 && hora < 18) {
        img.src = "fototarde 1.png"
        document.body.style.background = "#FABA95"
    } else {
        img.src = "fotonoite 1.png"
        document.body.style.background = "#013B52"
    }


}
