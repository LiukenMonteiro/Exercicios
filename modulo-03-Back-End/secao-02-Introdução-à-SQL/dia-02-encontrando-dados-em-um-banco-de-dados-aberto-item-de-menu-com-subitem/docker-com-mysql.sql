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

