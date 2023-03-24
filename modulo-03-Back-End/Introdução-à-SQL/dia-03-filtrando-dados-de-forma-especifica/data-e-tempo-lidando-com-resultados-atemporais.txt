Data e tempo - lidando com resultados temporais
ex:
SELECT * FROM sakila.payment;
=======================================================================================
Maneiras de encontrar dados por data
ex:
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';

SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';

SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';

SELECT *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';
=======================================================================================
Selecionando apenas partes de uma data
Às vezes você está interessado em apenas uma parte de uma data, como o ano ou as horas. MySQL possui funções que retornam partes específicas de uma data ou hora.
ex:
-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo