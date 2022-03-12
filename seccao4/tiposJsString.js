const escola = "Cod3r"

console.log(escola.charAt(4))//r
console.log(escola.charAt(5))//nada
console.log(escola.charCodeAt(3))//51 exebi o valor do fatiamento na tabela ascii
console.log(escola.charCodeAt(4))//114
console.log(escola.indexOf('3'))//3
console.log(escola.indexOf('d'))//2

console.log(escola.substring(1))//od3r
console.log(escola.substring(0, 3))//Cod ignora o ultimo
console.log('Escola'.concat(escola).concat("!"))//EscolaCod3r!
console.log(escola.replace('3','e'))//Coder

console.log('Ana,Maria,Pedro'.split(','))//[ 'Ana', 'Maria', 'Pedro' ]

