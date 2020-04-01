const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome, endereco: {cidade, estado}} = empresa

console.log(nome)
console.log(cidade)
console.log(estado)

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
   
function mostraInfo(usuario) {
    const [{nome, idade}] = usuarios
    return `${nome} tem ${idade} anos.`
   }

console.log(mostraInfo())
   