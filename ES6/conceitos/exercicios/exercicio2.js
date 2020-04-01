const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idades = usuarios.map(({idade}) => {
    return idade
})

console.log(idades)

const NomesMais18 = usuarios.filter(({idade, empresa}) => {
    return idade > 18 && empresa === 'Rocketseat'
})

console.log(NomesMais18)

const trabGoogle = usuarios.find(({empresa}) => {
    return empresa === "Google"
})

console.log(trabGoogle)

const idade2 = usuarios.map(({idade}) => {
    return idade * 2
})

console.log(idade2)

const idadeMenor50 = idade2.filter((idade) => {
    return idade <= 50
})

console.log(idadeMenor50)