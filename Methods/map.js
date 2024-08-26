
// Para dar o dobro de cada número
const numbers = [2, 4, 5, 7, 15, 22, 33]

const doubleNumbers = numbers.map( num => num * 2 )

console.log(doubleNumbers)

// Para aplicar uma transformação a um array de 7 nomes. Adicionando uma saudação a cada nome.

const names = [ "Cloves", "Junior", "Alice", "Gabriel", "Arthur"];

const saudacoes = names.map((name) => {
    return `Olá, ${name}! Seja bem-vindo!`
})

console.log(saudacoes)