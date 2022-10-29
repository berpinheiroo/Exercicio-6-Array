/* Faça um algoritmo que peça para o usuário digitar 5 números e salve em um array,
porém, se o usuário digitar um número que já foi inserido, o seu programa deve
pedir para ele digitar outro número. */

var arrayA = []

for(var i = 0; i < 5; i++){
  arrayA[i] = parseInt(prompt("Insira um numero"))
}
console.log(arrayA)

for(i = 0; i < 5; i++){
  for(var x = i + 1; x < 5; x++){
    if(arrayA[i] == arrayA[x]){
      console.log("O numero " + arrayA[i] + " se repete")
      arrayA[i] = parseInt(prompt("Insira um numero novo (ainda nao escolhido)"))
    }
  }
}
console.log(arrayA)