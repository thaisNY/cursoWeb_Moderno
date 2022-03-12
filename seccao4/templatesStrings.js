const nome = 'Rebeca'
const concatenacao = 'Olá' +" "+ nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)
//Olá Rebeca! 
//    Olá
//    Rebeca!

//expresões
console.log(`1 + 1 = ${1 + 1}`)//1 + 1 = 2

//Eh possivel usar templates strings com funções
const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)//Ei...CUIDADO!


