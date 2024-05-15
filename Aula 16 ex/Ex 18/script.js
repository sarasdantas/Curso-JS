let num = document.getElementById('txtn')
let lista = document.getElementById('txtl')
let res = document.getElementsByClassName('res')
let valores = []

function oNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(n, 1) {
    if(1.indexOf(Number(n)) != -1)
}

function adicionar() {
    
    if(oNumero(num.value) && !naLista(num.value, valores)) {
        alert('tudo ok!')
    } else {
        alert('valor inválido ou já encontrado na lista')
    }

}