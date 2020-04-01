const usuario = {
    nome: 'Daniel',
    idade: 22,
    endereco: {
        rua: 'Rua Francisco Lapierre',
        numero: '489',
        bairro: 'Jd. São Pedro',
        cidade: 'Americana',
        estado: 'SP',
        cep: '13466-510'
    },
};

function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario)

const { nome, idade, endereco: {rua, cidade} } = usuario

console.log(nome, idade, rua, cidade)