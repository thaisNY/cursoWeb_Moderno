isAtivo = true 
console.log(isAtivo) //true

isAtivo = 1
console.log(!! isAtivo) //true

console.log('Os verdadeiros...')
console.log(!!3) //true
console.log(!!-1) //true
console.log(!!' ') //true
console.log(!!'texto') //true
console.log(!![])//true
console.log(!!{})//objeto true
console.log(!!Infinity)//true
console.log(!!(isAtivo = true))//true

console.log("Os falsos...")
console.log(!!0)//false
console.log(!!'')//false
console.log(!!null)//false
console.log(!!NaN)//false
console.log(undefined)//undefined
console.log(!!(isAtivo = false))//false

console.log('para finalizar...')
console.log(!!('' || null || 0 || 'opa')) //true
console.log(('' || null || 0 || 'opa')) //opa
console.log(('' || null || 0 || ' ')) //espaço
console.log(!!('' || null || 0 || ' ')) //true
