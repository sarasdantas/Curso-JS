function tabuada() {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')
    // Se não houver escrito o número
    if (num.value.length == 0) {
        alert('Por favor! Digite um número.')
    } else {
        // Altera o valor da variável para Number
        let n = Number(num.value)
        // Valor de c começa em 1
        let c = 1
        // Vai limpar o select antes de receber uma nova tabuada
        tab.innerHTML = ''
        // Tabuada
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            // Irá fazer o let item aparecer no select
            tab.appendChild(item)
            c++
        }
    }
}