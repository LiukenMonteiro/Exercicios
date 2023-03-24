SELECT:

SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor web' AS 'Área de atuação'

ex: SELECT city, country_id FROM sakila.city; = pegando dados especificos de um DB;

USE sakila;
SELECT city, country_id FROM city;
========================================================================================================================
CONCAT:
Juntando duas colunas > SELECT CONCAT(first_name, " ", last_name) AS "Nome completo" FROM sakila.actor;
CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
	`Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
insert into Escola.Estudantes VALUES
	('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
    
SELECT DISTINCT Idade from Escola.Estudantes;
===============================================================================================================
COUNT:
Função de contar
ex: SELECT COUNT(address2) FROM sakila.address
WHERE address2 = '';
===============================================================================================================
LIMIT:
Especifica a quantidade de resultados
ex: SELECT * FROM sakila.rental LIMIT 10;
===============================================================================================================
LIMIT OFFSET:
Pulando linhas desnecéssarias
ex: SELECT * FROM sakila.rental LIMIT 10 OFFSET 4;
===============================================================================================================
ORDER BY:
Ordena dados

SELECT * FROM sakila.address
ORDER BY address DESC, district;

ASC = para ascendente
DESC = para descendent
===============================================================================================================





























