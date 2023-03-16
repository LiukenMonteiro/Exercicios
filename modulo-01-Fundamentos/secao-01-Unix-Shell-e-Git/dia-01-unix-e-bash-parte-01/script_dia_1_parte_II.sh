#!/bin/sh

# 1. Faz download do arquivo countries.txt na pasta unix_tests
cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# 2. Mostra o conteúdo do arquivo countries.txt no console
cat countries.txt

# 3. Mostra o conteúdo de countries.txt página por página
less countries.txt

# 4. Mostra novamente o conteúdo de countries.txt página por página e busca por Zambia
less countries.txt

# 5. Busca por Brazil em countries.txt
grep Brazil countries.txt

# 6. Busca por brazil em countries.txt
grep -i brazil countries.txt

# Cria arquivo phrases.txt e adiciona algumas frases
# A única forma de fazer um trabalho bem-feito é amar aquilo que faz. - Steve Jobs
# O software é uma grande combinação de arte e engenharia. - Bill Gates
# Falar é fácil. Me mostre o código. - Linus Torvalds
# Nada é impossível para aquele que persiste - Alexandre O Grande
# É impossível que uma pessoa aprenda algo que acredita que já sabe - Epicteto
# vim phrases.txt

# 7. Busca pelas frases que não contenham a palavra fox
grep -iv fox

# 8. Conta o número de palavras do arquivo phrases.txt
wc -w phrases.txt

# 9. Conta o número de linhas do arquivo phrases.txt
wc -l phrases.txt

# 10. Cria os arquivos empty.tbt e empty.pdf
touch empty.tbt empty.pdf

# 11. Lista todos os arquivos do diretório unix_tests
ls

# 12. Lista todos os arquivos txt
ls *.txt

# 13. Lista todos os arquivos tbt ou txt
ls *.t?t

# 14. Acessa o manual do comando ls
man ls