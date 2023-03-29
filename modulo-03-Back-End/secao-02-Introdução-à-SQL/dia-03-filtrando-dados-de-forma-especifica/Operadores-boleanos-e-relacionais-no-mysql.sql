-- OPERADOR - DESCRIÇÃO
=   IGUAL
>   MAIOR QUE
<   MENOR QUE
>=  MAIOR QUE OU IGUAL
<=  MENOR QUE OU IGUAL
<>  DIFERENTE DE
AND OPERADOR LÓGICO E
OR  OPERADOR LÓGICO OU
NOT NEGAÇÃO
IS  COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)

Exercicio proposto 
-- SELECT * FROM sakila.customer
-- WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
-- ==========================================================
-- SELECT first_name FROM customer
-- WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNEH'
-- ORDER BY first_name;
-- ==========================================================
-- SELECT title, description, release_year, rating, replacement_cost FROM sakila.film
-- WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
-- ORDER BY replacement_cost DESC, title
-- LIMIT 100;
-- ==========================================================
-- SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM sakila.customer
-- WHERE active = 1 AND store_id = 1;
-- ==========================================================
-- SELECT * FROM sakila.customer
-- WHERE active = 0 AND store_id = 1;
-- ==========================================================
-- SELECT title FROM sakila.film
-- WHERE rating = 'NC-17'
-- ORDER BY 50;
-- ==========================================================



