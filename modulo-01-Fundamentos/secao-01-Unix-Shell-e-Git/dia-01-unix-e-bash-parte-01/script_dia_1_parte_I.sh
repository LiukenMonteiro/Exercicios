#!/bin/sh

# 1. Cria diretório unix_tests e navega até ele
mkdir unix_tests && cd unix_tests

# 2. Cria arquivo de texto trybe.txt
touch trybe.txt

# 3. Cria cópia do arquivo trybe.txt com nome trybe_backup.txt
cp trybe.txt trybe_backup.txt

# 4. Renomeia o arquivo trybe.txt
mv trybe.txt arquivo_renomeado.txt

# 5. Cria o diretório backup dentro de unix_tests
mkdir backup

# 6. Move o arquivo trybe_backup.txt para o diretório backup
mv trybe_backup.txt backup

# 7. Cria o diretório backup2 dentro de unix_tests
mkdir backup2

# 8. Move o arquivo trybe_backup.txt do diretório backup para o diretório backup2
mv backup/trybe_backup.txt backup2

# 9. Deleta o diretório backup
rmdir backup

# 10. Renomeia o diretório backup2 para backup
mv backup2 backup

# 11. Veja o path completo do diretório atual e lista todos os arquivos dentro dele
pwd && ls *

# 12. Apaga o diretório backup
rm -R backup

# 13. Limpa o terminal
clear

# Cria o arquivo skills.txt com o conteúdo abaixo:
# Internet
# Unix
# Bash
# HTML
# CSS
# JavaScript
# React
# SQL
# vim skills.txt

# 14. Imprime na tela as 5 primeiras linhas do arquivo skills.txt
head -5 skills.txt

# 15. Imprime na tela as 4 últimas 4 linhas do arquivo skills.txt
tail -4 skills.txt

# 16. Apaga todos os arquivos txt
rm *.txt