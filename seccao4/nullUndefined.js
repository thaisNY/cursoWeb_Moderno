const a = {name: 'Teste'}
console.log(a)//{ name: 'Teste' }
const b = a
console.log(b)//{ name: 'Teste' }
b.name = 'OPA'
console.log(a)//{ name: 'OPA' } referencia pois eh um obj

//passagem por valor
let c = 3
let d = c
d++
console.log(d)//4
console.log(c)//3
//como number é um tipo premetivo a cópia é por valor
//////////////////////////////////////////////////////////////////////////////////////////////

let valor 
console.log(valor)//undefined foi declarado mas não foi inicializado

valor = null //não aponta para nenhum endereço de memória, ausencia de valor
console.log(valor)
//null zerar uma variavel que tem passagem por referencia

//console.log(valor.toString()) erro typeerro nullo não tem referencia p essa função

const produto = {}
console.log(produto.preco)//undefined

//atribuir undifined não é uma boa prática
produto.preco = 3.50
console.log(produto)//{ preco: 3.5 }

produto.preco = undefined
console.log(!! produto.preco) //false
console.log(produto)//{ preco: undefined } preço vazio
//delete produto.preco {} tira o preço
