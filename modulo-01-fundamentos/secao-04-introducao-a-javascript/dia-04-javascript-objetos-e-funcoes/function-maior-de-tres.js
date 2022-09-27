function maiorDeTres(primeiroNum, segundoNum, terceiroNum) {
    if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
      return 'O maior número é: ' + primeiroNum;
    } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
      return 'O maior número é: ' + segundoNum;
    } else {
      return 'O maior número é: ' + terceiroNum;
    }
  }