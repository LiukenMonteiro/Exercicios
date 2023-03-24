EXECUTANDO UM CONTAINER MySQL COM DOCKER:
docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:5.7
===================================================================================================
PARANDO CONTAINER:
docker container stop container-mysql
===================================================================================================
INICIANDO CONTAINER:
docker container start container-mysql
===================================================================================================
REMOVENDO CONTAINER;
docker container rm container-mysql
===================================================================================================
ACESSAR UM SERVIDOR E VISUALIZAR OS BANCOS DE DADOS:
docker exec -it container-mysql bash
===================================================================================================
AGORA VAMOS ACESSAR O MYSQL DENTRO DO CONTAINER:
mysql -u root -p
"utilizar mesmo senha usada na criação do container"
===================================================================================================
COMANDOS:

SHOW DATABASES; = já dentro do nosso banco de dados, é possível ver todos os bancos de dados que estão instalados atualmente digitando este comando.

USE = serve pra definir a referência do banco de dados que será utilizado na query.
ex: USE nome_do_banco_de_dados_que_quero_conectar;
dica: Uma outra forma de fazer referência ao banco, sem ter que rodar o USE é no formato banco_de_dados.tabela;

SHOW TABLES; = para retornar todas as tabelas inicilizadas no seu server.

DESCRIBE nome_da_tabela; = visualizar estrutura de uma tabela.

CREATE DATABASE nome_do_banco_de_dados; = criar um banco de dados
=======================================================================================================
Como as constraints são aplicadas às colunas das tabelas, é possível assegurar que os dados inseridos nelas serão consistentes conforme as regras definidas. Veja alguns tipos de constraints:

NOT NULL - Garante que aquele campo não pode conter valores nulos, ou seja, se não houver um valor padrão (DEFAULT) definido, será sempre necessário passar um valor para esse campo durante a inserção ou alteração de dados.
UNIQUE - Garante que o valor inserido na coluna da tabela é único, isto é, não pode haver outro valor igual para esta coluna registrado nesta tabela.
PRIMARY KEY - Garante que o valor seja a chave primária da tabela, ou seja, que a coluna que possui essa constraint aplicada seja o identificador único da tabela. Ela também é, por definição, não nula (mesmo efeito da constraint NOT NULL) e única (mesmo efeito da constraint UNIQUE).
FOREIGN KEY - Garante que o valor seja uma chave estrangeira da tabela, ou seja, faça referência à chave primária (valor em uma coluna com a constraint PRIMARY KEY) de outra tabela, permitindo um relacionamento entre tabelas.
DEFAULT - Garante que, caso nenhum valor seja inserido na coluna (ou caso a pessoa usuária insira um valor nulo), a constraint colocará o valor padrão passado para ela.

