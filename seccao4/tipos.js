const peso1 = 1.0;
const peso2 = Number(2.0);

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));//true
console.log(Number.isInteger(peso2));//true

const avaliacao1 = 9.874;
const avaliacao2 = 2.714;

const total = avaliacao1*peso1 + avaliacao2*peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString());
console.log(media.toString(2));//converte em binario
console.log(typeof media);
//Number() eh função, number eh tipo 


