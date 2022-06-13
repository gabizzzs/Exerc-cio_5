/* Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra foi menor 
que 20 reais. Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá 
retornar o valor da venda.

Exemplo: 
produto: R$ 18,00 -> 18 * 45% -> O seu produto deve ser vendido por R$ 26,10
produto: R$ 21,00 -> 21 * 30% -> O seu produto deve ser vendido por R$ 27,30 */

const valorCompra = 85;
  console.log(valorCompra);

const valorVenda1 = valorCompra * (45/100) + valorCompra;
const valorVenda2 = valorCompra * (30/100) + valorCompra;

const lucro1 = compra1 + valorProduto;
console.log(lucro1);

const lucro2 = compra2 + valorProduto;
console.log(lucro2);


if(valorCompra < 20){
  console.log(`O valor de venda é ${valorVenda1}: `)
}else{
  console.log(`O valor de venda é ${valorVenda2}: `)
}
