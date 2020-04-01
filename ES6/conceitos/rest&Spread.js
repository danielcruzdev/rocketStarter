// REST 

function soma(...params) {
    return params.reduce((total, next) => total + next)
}

console.log(soma(1, 3, 5, 6, 7))

//SPREAD

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

const usuario = {
    nome: "Daniel",
    idade: 22,
    empresa: "Astor Brindes"
}

const usuario2 = { ...usuario, nome: "Renan" }

console.log(usuario2)