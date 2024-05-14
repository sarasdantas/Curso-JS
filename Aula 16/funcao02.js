function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2)) // NaN  

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(7)) // 7