function pessoa (nome, idade){
    if(idade >= 18) {
        return `${nome} é de maior e tem ${idade} anos.`
    } else {
        return `${nome} é de menor e tem ${idade} anos.`
    }
}

console.log(pessoa("Gabriela", 23))
console.log(pessoa("Lopes", 15))
console.log(pessoa("Henrique", 30))
console.log(pessoa("Leticia", 17))