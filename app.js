const prompt = require("prompt-sync")()


console.log (`****Leitor de maior numero digitado****`)


let num = Number(prompt("Digite um numero :"))


   let num2=  Number(prompt("Digite um 2° numero :"))


  let num3=  Number(prompt("Digite um  3° numero :"))


    if (num > num2 && num > num3){
    console.log(`O maior numero digitado foi : ${num}`)}

    else if (num2 > num && num2 >num3){
        console.log(`O maior numero digitado foi : ${num2}`)}

        else console.log (`O maior número digitado foi : ${num3}`)
   
    