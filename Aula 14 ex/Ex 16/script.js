function contar() {
    var txti = document.querySelector('input#inicio')
    var txtf = document.querySelector('input#fim')
    var txtp = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
    var ini = Number(txti.value)
    var fim = Number(txtf.value)
    var pas = Number(txtp.value)



    if (txti.length == 0 && txtf.length == 0 && txtp.length == 0) {
        window.alert("Impossível contar, preencha todas as lacunas")
    } else {
        while (ini <= fim) {
            res.innerHTML = ini
            ini += pas        
        }        
    }



}