let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    // funtion que vai verificar se o número está dentro dos padrões abaixo, retornando com true or false
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    // function que vai verificar se o número já tem um índice, retornando com true or false
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
    // vai fazer a conferência das duas funções (isNumero e inLista), sendo true, segue as configurações abaixo
        valores.push(Number(num.value))
        // vai acrescentar o número de num no array valores
        let item = document.createElement('option')
        // criando uma tag option no HTML
        item.text = `O valor ${num.value} foi adicionado` 
        // criando texto no let item
        lista.appendChild(item)
        // mostrar no let lista o texto do let item
        res.innerHTML = ''
        // quando adcionar mais um número após finalizar, deixar a div#res vazia
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    // deixar vazio assim que clicar no botão
    num.focus()
    // deixar selecionado para continuar digitando
}

function finalizar(){
    valores.sort()
    if(valores == 0){
        window.alert('Adcione valores antes de finalizar')
    } else {
        valores.sort()
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.<p>`
        res.innerHTML += `<p>O menor número informado foi ${valores[0]}<p>`
        valores.sort()
        res.innerHTML += `<p>O maior número informado é ${valores[valores.length - 1]}<p>`
        valores.sort()
        
        //FAZER DO JEITO DELE APAGUE
    }
}