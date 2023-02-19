function positiveNegative(number) {
    if (number > 0) { // Testa se o número é positivo (maior que 0)
      return 'positive';
    } else if (number < 0) { // Testa se o número é negativo (menor que 0)
      return 'negative';
    } else { // Se nenhum teste passar, o número é igual a 0
      return 'zero';
    }
  }