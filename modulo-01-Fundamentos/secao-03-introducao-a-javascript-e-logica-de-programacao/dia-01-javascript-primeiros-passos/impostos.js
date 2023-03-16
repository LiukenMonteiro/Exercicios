const salarioBruto = 3000;
const inss8porcento = salarioBruto*8/100;
const inss9porcento = salarioBruto*9/100;
const inss11porcento = salarioBruto*1.11 - salarioBruto;
const inssMax = salarioBruto-570.88;
let salLiqInss = undefined;
let descontoIr = undefined;

if(salarioBruto <= 1556.94) {
    salLiqInss = salarioBruto - inss8porcento;
  }else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salLiqInss = salarioBruto - inss9porcento;
  }else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salLiqInss = salarioBruto - inss11porcento;
  }else if(salarioBruto > 5189.82) {
    salLiqInss = salarioBruto - inssMax;
  }
  
  if(salLiqInss >= 1903.99 && salLiqInss <= 2826.65) {
    descontoIr = (salLiqInss*7.5/100) - 142.80;
  }else if(salLiqInss >= 2826.66 && salLiqInss <= 3751.05) {
    descontoIr = salLiqInss*15/100 - 354.80;
  }else if(salLiqInss >= 3751.06 && salLiqInss <= 4664.68) {
    descontoIr = salLiqInss*22.5/100 - 636.13;
  }else if(salLiqInss > 4664.68) {
    descontoIr = (salLiqInss*27.5/100) - 869.36
  }
  console.log(`Salário bruto:`, new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(salarioBruto))
  console.log(`Salário Liquido:`, new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(salLiqInss - descontoIr))