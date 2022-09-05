const prompt = require("prompt-sync")()

console.log (`***Loop de numeros até digitar 0 ****`)

let soma = 0
let num = 0

do{
     num = Number(prompt("Digite um numero :"))
    soma = soma + num 
}while(num != 0)
console.log(`Soma ${soma}`)