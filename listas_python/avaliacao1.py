# Avaliação 1 - BSI

import math

def duracao_filme(horas, minutos):
    """
    Elabore um programa que leia a duração de um filme em horas e minutos.
    Calcule e informe a duração total do filme em número de minutos.

    Exemplo:
    Número de horas: 2
    Número de minutos: 40
    Total de minutos: 160

    Argumentos:
        horas (int): uma quantidade de horas
        minutos (int): uma quantidade de minutos

    Retorna:
        (int): uma quantidade de minutos.
    """

    return minutos+horas*60


def milhas_para_kilometros(milhas):
    """
    Uma milha equivale a 1609 metros. Desenvolva uma função que receba um valor \
    em milhas e retorne o valor em kilômetros.

    Argumentos:
        milhas (float): uma quantidade de milhas

    Retorna:
        (float): uma quantidade em kilômetros, com 6 casas decimais.
    """
    return (milhas*1609)/1000


def aluguel_airbnb(valor_diaria, dias):
    """
    Recebe uma quantidade de dias que ficou hospedado e o valor da
    diária, e retorna o valor a ser pago, considerando um acréscimo de
    R$ 75,00 para limpeza e 5% de taxa de administração sobre o valor
    do aluguel, sem a taxa de limpeza

    Argumentos:
        valor_diaria (float): o valor da diária
        dias (int): a quantidade de dias de hospedagem

    Retorna:
        float: o valor do aluguel, com duas casas decimais
    """

    valor_total = (valor_diaria * dias)
    valor_2 = ((5/100) * valor_total) + 75
    return valor_total+valor_2


def acesso_computadores(qt_alunos_total, qt_alunos_computador):
    """
    Você foi encarregado de realizar uma pesquisa sobre acesso a computadores.
    A sua pesquisa deverá apresentar o percentual de alunos da sua escola que possuem acesso computadores.
    Para isso, elabore um algoritmo que leia o número total de alunos da sua escola e o número de alunos que possuem acesso a computadores, por fim, com base nestes dados, escreva o percentual de alunos com acesso a computadores.
    Por exemplo, em uma escola com 500 alunos, apenas 200 alunos possuem acesso à Internet, o que equivale a 40% destes 500 alunos.

    Argumentos:
        qt_alunos_total (int): uma quantidade de horas
        qt_alunos_computador (int): uma quantidade de minutos

    Retorna:
        (float): percentual de alunos com acesso a computadores, com 2 casas decimais
    """

    porcentagem = ((qt_alunos_computador*100) / qt_alunos_total)
    return round(porcentagem,2)


def media_ponderada(prova, trabalho, exercicio):
    """
    Calcule a média ponderada, sabendo que os pesos são os seguintes:
    - prova: peso 4
    - trabalho: peso 2
    - exercício : peso 1

    Dica: eliminar os números mágicos.

    Argumentos:
        prova (float): nota de uma prova, entre 0 e 10.
        trabalho (float): nota do trabalho, entre 0 e 10.
        exercicio (float): nota do exercício, entre 0 e 10.

    Retorna:
        float: média ponderada das notas, com 1 casa decimal
    """

    media = ((prova*4)+(trabalho*2)+(exercicio*1))/(4+2+1)

    return round(media,1)


def cadeira_massagem(valor_3_minutos, qt_minutos_uso):
    """
    Elabore um programa para uma cadeira de massagem.
    O programa deve ler o valor para cada 3 minutos de uso da cadeira e o tempo que a pessoa utilizou em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 3 minutos devem ser cobradas de forma integral.

    Exemplo:
    Valor para 3 minutos RS: 2.00
    Minutos de uso: 7
    Total a Pagar R$: 6.00

    Argumentos:
        valor_3_minutos (float): o valoa ser cobrado a cada 3 minutos
        qt_minutos_uso (int): a quantidade de minutos que foi utilizado

    Retorna:
        (float): o valor a ser pago, com 2 casas decimais
    """
    
    x = math.ceil(qt_minutos_uso/3)

    return valor_3_minutos * x


def trimestre(mes):
    """
    Dado um mês como um inteiro de 1 a 12, retorna a qual trimestre do ano ele \
        pertence como um número inteiro. 

    Por exemplo: mês 2 (fevereiro), faz parte do primeiro trimestre; \
    o mês 6 (junho), faz parte do segundo trimestre; \
    e o mês 11 (novembro), faz parte do quarto trimestre.

    Argumento
        mes (inteiro): o mês

    Returna:
        inteiro: o trimestre a que o mês pertence.
    """

    if mes <= 3:
        return 1
    elif 3 < mes <= 6:
        return 2
    elif 6 < mes <= 9:
        return 3
    else:
        return 4


# Área de testes: só mexa aqui se souber o que está fazendo!
acertos = 0
total = 0


def test(obtido, esperado):
    global acertos, total
    total += 1
    if obtido != esperado:
        prefixo = f"\033[31m{'Falhou'}"
    else:
        prefixo = f"\033[32m{'Passou'}"
        acertos += 1
    print(f"{prefixo} Esperado: {esperado} \tObtido: {obtido}\033[1;m")


def main():
    print("Duração do filme: ")
    test(duracao_filme(0, 0), 0)
    test(duracao_filme(1, 0), 60)
    test(duracao_filme(0, 1), 1)
    test(duracao_filme(1, 30), 90)
    test(duracao_filme(2, 40), 160)

    print("Kilometros para milhas: ")
    test(milhas_para_kilometros(1), 1.609)
    test(milhas_para_kilometros(2), 3.218)
    test(milhas_para_kilometros(3), 4.827)
    test(milhas_para_kilometros(4), 6.436)
    test(milhas_para_kilometros(5), 8.045)

    print("Aluguel do airBnB:")
    test(aluguel_airbnb(100, 1), 180.00)
    test(aluguel_airbnb(100, 2), 285.00)
    test(aluguel_airbnb(200, 10), 2175.00)
    test(aluguel_airbnb(50, 5), 337.50)

    print("Acesso Computadores:")
    test(acesso_computadores(500, 0), 0.00)
    test(acesso_computadores(500, 500), 100.00)
    test(acesso_computadores(500, 250), 50.00)
    test(acesso_computadores(500, 200), 40.00)
    test(acesso_computadores(495, 133), 26.87)
    test(acesso_computadores(2000, 700), 35)

    print("Média ponderada:")
    test(media_ponderada(10, 10, 10), 10)
    test(media_ponderada(7, 7, 7), 7)
    test(media_ponderada(5, 8, 10), 6.6)
    test(media_ponderada(0, 0, 0), 0)

    print("Cadeira Massagem: ")
    test(cadeira_massagem(0, 0), 0)
    test(cadeira_massagem(1, 0), 0)
    test(cadeira_massagem(0, 1), 0)
    test(cadeira_massagem(1, 1), 1)
    test(cadeira_massagem(2, 7), 6)
    test(cadeira_massagem(5, 70), 120)
    test(cadeira_massagem(3, 25), 27)

    print("Trimestre: ")
    test(trimestre(1), 1)
    test(trimestre(2), 1)
    test(trimestre(3), 1)
    test(trimestre(4), 2)
    test(trimestre(5), 2)
    test(trimestre(6), 2)
    test(trimestre(7), 3)
    test(trimestre(8), 3)
    test(trimestre(9), 3)
    test(trimestre(10), 4)
    test(trimestre(11), 4)
    test(trimestre(12), 4)


if __name__ == "__main__":
    main()
    print(
        f"\n{total} Testes, {acertos} Ok, {total - acertos} Falhas: Nota {round(acertos * 100 / total)}"
    )
    if total == acertos:
        print("Parabéns, seu programa rodou sem falhas!")