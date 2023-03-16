const custoDoProduto = 10*1.2;
const valorDeVenda = 14;
const lucro = (valorDeVenda - custoDoProduto) * 1000;

if(custoDoProduto <= 0 || valorDeVenda <= 0) {
    console.log('Error! valores precisam ser maior do que zero.')
  } else {
    console.log(`O lucro da empresa é de: R$ ${lucro},00`)
  }