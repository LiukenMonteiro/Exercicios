# 4.3 JavaScript - Lógica de Programação e Algoritmos

## Aprofunde seus conhecimentos

Leia atentamente os enunciados e faça o que se pede.

- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

```
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
```

Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

- Utilize a estrutura de repetição `for` para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

```
let word = 'tryber';
```

---

- Considere o array de strings abaixo:

```
let array = ['java', 'javascript', 'python', 'html', 'css'];
```

- Utilize a estrutura de repetição `for` para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

---

- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

---

### Exercícios Bônus

Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição `for` para escrever os programas abaixo:

- Escreva um programa que, dado um valor `n` qualquer, seja `n > 1`, imprima na tela um quadrado feito de asteriscos de lado de tamanho `n`. Por exemplo:

```
n = 5

*****
*****
*****
*****
*****
```

---

- Faça o mesmo que antes, mas que imprima um triângulo retângulo com `5` asteriscos de base. Por exemplo:

```
n = 5

*
**
***
****
*****
```

---

- Agora inverta o lado do triângulo. Por exemplo:

```
n = 5

    *
   **
  ***
 ****
*****
```

Atenção! Note que esse exercício é _bem mais complexo que o anterior!_ Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

---

- Depois, faça uma pirâmide com `n` asteriscos de base:

```
n = 5

  *
 ***
*****
```

---

- Faça uma pirâmide com `n` asteriscos de base que seja vazia no meio. Assuma que o valor de `n` será sempre ímpar:

```
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******
```

- Faça um programa que diz se um número definido numa variável é primo ou não.

- Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.
- Dica: você vai precisar de fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.