Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING

O GROUP BY pode ser construído da seguinte forma:
ex:
SELECT coluna(s) FROM tabela
GROUP BY coluna(s);

Se você executar a query anterior no seu banco de dados sakila, verá que são retornados 128 resultados. Porém, se retirar o GROUP BY, como na query abaixo, notará que existem 200 registros na tabela actor. Isso acontece pelo fato de ele agrupar todos os registros que possuem o mesmo first_name, evitando duplicações na hora de retornar os dados.

Porém, é mais comum utilizar o GROUP BY em conjunto com o AVG, MIN, MAX, SUM ou COUNT. Por exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado, podemos usar o COUNT(). Assim, teremos uma informação mais fácil de ser compreendida.
ex:
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

Também podemos utilizar o GROUP BY para agrupar os registros pelos valores de mais de uma coluna.
ex:
SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
GROUP BY rating, rental_rate 
ORDER BY rating, rental_rate;

Agora vamos explorar como utilizar o GROUP BY em conjunto com as diversas funções de agregação que foram estudadas até aqui, por meio de alguns exemplos feitos com o nosso banco de dados sakila.

==============================================================================================================================

Filtrando Resultados do GROUP BY com HAVING
Podemos usar o HAVING para filtrar resultados agrupados, assim como usamos o SELECT...WHERE para filtrar resultados individuais.

A query a seguir busca o nome e a quantidade de nomes cadastrados na tabela sakila.actor e os agrupa por quantidade. Por fim, filtramos os resultados agrupados usando o HAVING, para que somente os nomes que estão cadastrados mais de duas vezes sejam exibidos.

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;