//json não é um obj js, é obj no formato textual
const prod1 = {} //obj
prod1.nome = 'Celular ultra mega'
prod1.preco = 499.80
console.log(prod1) //{ nome: 'Celular ultra mega', preco: 499.8 }

prod1['Desconto_Legal'] = 0.40
console.log(prod1)//{ nome: 'Celular ultra mega', preco: 499.8, Desconto_Legal: 0.4 }


//obj em js relação chave valor