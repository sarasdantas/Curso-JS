function contar() {
    let ini = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let pas = document.querySelector('input#passo')
    let res = document.querySelector('div#res')
           
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar! Preencha todas as lacunas'
        //window.alert("Impossível contar, preencha todas as lacunas")
    } else {
        res.innerHTML = 'Contando: '  
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        // Caso passo seja <= 0
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        //Contagem Crescente
        if (i<f){
            for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem Regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}