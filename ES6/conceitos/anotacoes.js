// WRITE WITH EXTENSION BETTER COMMENTS - VS CODE! 

/** BABEL
 *  !! BABEL - Serve para que o navegador reconheça todas as atualizações do JavaScrip - Dependencia da aplicação
 *  Cria a partir do arquivo de script uma outro aquivo bundle, que modifica todo o nosso arquivo para que seja entendivel para todos os browsers.
 *  @babel/core
 *  @babel/preset-env
 *  @babel/cli
 */

/** YARN
  * !! YARN - Gerenciador de pacotes e dependencias
  */

/** MAP
 * O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado
 *  !! MAP - Mapeia o vetor - recebe uma função como paramentro com o parametro item, que poderá ser manipulado dentro da função
 * const newArray = arr.map(function(item, index){
 * return item + index
 * })
 */

/* REDUCE
  !! O método reduce()executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.
*/

/** FILTER
   * !! FILTER - Faz um filtro na lista conforme passsado na função dentro do paramentro.
   * const filter = arr.filter(function(item){
   * return item % 2 === 0})
   * console.log(filter)
   * Deve retornar True ou false
   * Como retorno desse filter ele ira retornar um array com todos os numeros pares.
*/

/** FIND
 * !! O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
 * const find = arr.find(function(item){
 * return item === 4
 * })
 * Nessa caso o find ira procurar em um array o valor 4 e ira retornar true se achar e false se não achar.
 */

/** ARROW FUNCTION
 *  !! Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e 
 *  !! não tem seu próprio this, arguments, super ou new.target. 
 *  !! Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).
 *  () => {} <- Arrow Function
 */

/** VALORES PADRÕES
 *  !! No JavaScript ES6 podemos definir valores padrões para as variaveis para que não fique undefined
 *  const soma = (a = 3, b = 6) => a + b     
 *  a variavel A recebeu 3 como valor padrão e a variavel B recebeu 6 como valor padrão
 */

/** DESESTRUTURAÇÃO
 *  !! A desestruturaçã permite desestruturar um objeto, para ser mais fácil a obtenção de determinados elementos dentro do objeto.
 *  const usuario = {
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

  const { nome, idade, endereco: {rua, cidade} } = usuario

  Como nos exemplos acima podemos obter valores de formas diferentes, até mesmo fazendo a desestruturação dentro de uma função.
 */

/** REST
 *  !! REST - Serve para pegar o resto das propriedades. 
 *  const usuario = {
 * nome: "Daniel",
 * idade: 22,
 * empresa: "Astor Brindes"
 * };
 * const { nome, ...resto} = usuario
 * 
 * * Nesse exemplo o resto esta armazenando todo o restante do objeto usuário

 */

 /** SPREAD
  * !! O SPREAD, faz o papel de repassar as informações de algum objeto ou array para outra estrutura de dados.
  * const arr1 = [1, 2, 3]
  * const arr2 = [4, 5, 6]
  * const arr3 = [...arr1, ...arr2]
  * console.log(arr3)
  * 
  * * Nesse Exemplo unir dois arrays com o spread fica muito fácil.  
  * 
  *  const usuario = {
  * nome: "Daniel",
  * idade: 22,
  * empresa: "Astor Brindes"
  * }
  * const usuario2 = {...usuario, nome = "Renan"}
  * 
  * * Neste outro exemplo, podemos os parametros e alterar qual nos desejamos para criar um novo
  */

/** TEMPLATE LITERALS
 *  !! É a possibilidade de incluir variaveis dentro de strings. usando `Olá meu node é: ${nome}`
 */

/** SHORT OBJECT SINTAX
 *  !! Com isso podemos declarar objetos a partir de variaveis sem precisar declarar propriedade e valor
 * 
 *  const nome = "Daniel";
 * const idade = 22;
 * const usuario = {
 * nome,
 *  idade,
 * empresa: "Astor Brindes"
 * }
 */

