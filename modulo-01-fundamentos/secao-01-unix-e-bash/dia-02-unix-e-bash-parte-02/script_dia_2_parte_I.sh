#!/bin/sh

# 1. Navega até a pasta unix_tests
cd ../dia-01-unix-e-bash-parte-01/unix_tests

# 2. Cria o arquivo skills2.txt com os valores:
# Internet
# Unix
# Bash
echo Internet > skills2.txt && echo Unix >> skills2.txt && echo Bash >> skills2.txt

# 3. Adiciona mais 5 linhas à skills2.txt e imprime a lista no console
cat >> skills2.txt && cat skills2.txt

# 4. Conta quantas linhas tem o arquivo skills2.txt
wc -l skills2.txt

# 5. Cria o arquivo top_skills.txt contendo as 3 primeiras linhas de skills2.txt em ordem alfabética
head -3 skills2.txt | sort > top_skills.txt

# 6. Cria o arquivo phrases2.txt com algumas frases
# code phrases2.txt

# 7. Conta o número de linhas que contém as letras br
grep -i "br" phrases2.txt | wc -l

# 8. Conta o número de linhas que não contém as letras br
grep -iv "br" phrases2.txt | wc -l

# 9. Adiciona dois nomes de países ao final do arquivo phrases2.txt
echo Brasil >> phrases2.txt && echo "Estados Unidos" >> phrases2.txt

# 10. Cria um novo arquivo chamado bunch_of_things.txt com os conteúdos de phrases2.txt e countries.txt
cat phrases2.txt countries.txt > bunch_of_things.txt

# 11. Cria um novo arquivo chamado bunch_of_things_ordered.txt com os conteúdos de phrases2.txt com o conteúdo do arquivo bunch_of_things.txt ordenado
sort < bunch_of_things.txt > bunch_of_things_ordered.txt