#!/bin/sh

# 1. Navega até a pasta unix_tests
cd ../dia-01-unix-e-bash-parte-01/unix_tests

# 2. Execute ls -l e veja as permissões dos arquivos
ls -l

# 3. Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique com o comando ls -l
chmod 666 bunch_of_things.txt
ls -l bunch_of_things.txt

# 4. Tire a permissão de escrita do arquivo bunch_of_things.txt, e verifique com o comando ls -l
chmod 444 bunch_of_things.txt
ls -l bunch_of_things.txt

# 5. Volte à permissão inicial do arquivo bunch_of_things.txt
chmod 644 bunch_of_things.txt