#!/bin/sh

# 1. Lista todos os processos
ps ax

# 2. Usa o comando sleep 30 &
sleep 30 &

# 3. Lista processos para achar o PID do sleep 30 e mata ele
ps | grep sleep
kill %1

# 4. Executa o comando sleep 30 novamente, sem o &. Faz com que o processo seja executado em background
sleep 30
bg

# 5. Cria um processo em background que roda o comando sleep por 300 segundos
sleep 300 &

# 6. Cria mais dois processos que rodem sleep por 200 e 100 segundos cada. Suspende ambos os processos
sleep 200
sleep 100

# 7. Verifica o processo sleep 300 com o comando jobs. Suspenda a execução desse processo
jobs
ps a
kill -CONT PID_DO_PROCESSO

# 8. Retoma a execução do processo sleep 100 em background
bg %3

# 9. Termina a execução de todos processos sleep
kill %1 %2