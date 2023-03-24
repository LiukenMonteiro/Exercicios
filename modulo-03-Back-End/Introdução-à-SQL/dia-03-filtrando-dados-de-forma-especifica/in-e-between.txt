IN e BETWEEN - englobando uma faixa de resultados

COM NOMES:
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

COM NÚMEROS:
SELECT * FROM sakila.customer
WHERE customer_id IN (1, 2, 3, 4, 5)

Então, para que você faça pesquisas utilizando o IN, a sintaxe que deve ser usada é a seguinte:
SELECT * FROM banco_de_dados
WHERE coluna IN (valor1, valor2, valor3, valor4, ..., valorN);

-- ou também
SELECT * FROM banco_de_dados
WHERE coluna IN (expressão);
=================================================================================
BETWEEN
torna possível fazer pesquisas dentro de uma faixa inicial e final.
Ex: 
-- Note que o MySQL inclui o valor inicial e o final nos resultados
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

Usando o BETWEEN com strings
ex:
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

Usando o BETWEEN com datas
ex: 
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';
====================================================================================================

Como decidir qual usar?
Lembre-se de que, no caso do IN, você precisa especificar os valores que devem ser incluídos no resultado e, no caso do BETWEEN, você não precisa incluir os valores que estão entre o valor inicial e final. Então, vale a pena analisar essa diferença e ver qual te atenderá melhor.

