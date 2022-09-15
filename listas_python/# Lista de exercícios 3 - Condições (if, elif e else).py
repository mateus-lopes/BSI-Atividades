# Lista de exercícios 3 - Condições (if, elif e else)

import math

def maior3(a, b, c):
    """Recebe três valores, e retorna o maior dos três.

    Argumentos:
        a (float): primeiro valor;
        b (float): segundo valor;
        c (float): terceiro valor;

    Retorna:
        float: o maior entre os três valores.
    """
    
    # condição A maior    
    if (a > b) and (a > c):
        return a
    # condição B maior
    elif (b > c) and (b > a):
        return b
    # condição C maior
    else:
        return c


def menor3(a, b, c):
    """Recebe três valores, e retorna o menor dos três.

    Argumentos:
        a (float): primeiro valor;
        b (float): segundo valor;
        c (float): terceiro valor;

    Retorna:
        float: o menor entre os três valores.
    """
    
    # condição A maior
    if (a < b) and (a < c):
        return a
    # condição B maior
    elif (b < c) and (b < a):
        return b
    # condição C maior
    else:
        return c
    

def testa_lados(a, b, c):
    """Receba os três lados de um triângulo. Informe se os valores
    podem ser um triângulo. Indique, caso os lados formem um triângulo,
    se o mesmo é: equilátero, isósceles ou escaleno.

    Argumentos:
        a (float): primeiro lado;
        b (float): segundo lado;
        c (float): terceiro lado;

    Retorna:
        string: um texto indicando o resultado,
                conforme aparece nos testes no final desse arquivo.
    """
    
    # Forma um triangulo ?
    if (a + b > c) and (a + c > b) and (b + c > a):
        # Qual o tipo de triangulo?
        if a == b and b == c:
            # Então é Triângulo equilátero
            return 'Triângulo equilátero'
        elif a != b and b != c and a != c:
            # Então é Triângulo escaleno
            return 'Triângulo escaleno'
        else:
            # Então é Triângulo isósceles
            return 'Triângulo isósceles'
    else:
        # Não forma um triângulo 
        return 'Não forma um triângulo'
    
    
def ano_bissexto(ano):
    """Determine se um ano é bissexto ou não.

    Argumento:
        ano (int): um ano, no formato de 4 dígitos.

    Retorna:
        bool: True ou False (verdadeiro ou falso), caso a ano seja ou não bissexto.

    """
    
    #condição de ano terminado em 0
    if ano % 1000 == 0:
        # é bissexto?
        if ano % 4 == 0 and ano % 400 == 0:
            # sim
            return True
        else:
            # nao
            return False
    #condição padrão de ano bissexto não terminado em 0
    elif ano % 4 == 0:
        # sim
        return True
    else:
        # nao
        return False


def maior_dia_do_mes(mes, ano):
    """Retorna o último dia do mês para um determinado ano e mês.
        Os valores possíveis são: 28, 29, 30 ou 31.
        Devem ser considerados os anos bissextos.
        Uma função separada para determinar se um ano é bissexto
        poderia ser utilizada.

    Argumentos:
        mes (int): um mês no formato de dois dígitos;
        ano (int): um ano, no fomato de 4 dígitos;

    Retorna:
        int: um inteiro indicando o último dia válido para aquele mês e ano.
    """
    
    # informando as condições
    if (mes < 8 and mes % 2 != 0) or (mes >= 8 and mes % 2 == 0):
        # meses com 31 dias
        return 31
    elif mes == 2:
        #configurando os anos bissextos
        if ano % 1000 == 0:
            if ano % 4 == 0 and ano % 400 == 0:
                # ano bissexto
                return 29
            else:
                # ano normal
                return 28
        elif ano % 4 == 0:
            # ano bissexto
            return 29
        else:
            # ano normal
            return 28
    else:
        # meses sem condição
        return 30
    
    
def data_valida(data):
    """Recebe uma string no formato dd/mm/aaaa e informa
        um valor lógico indicando se a data é válida ou não.
        Verifica se ano é bissexto e outros detalhes.
        Confira os testes no final do arquivo para mais detalhes.

    Argumentos:
        data (string): data no formato "dd/mm/aaaa".

    Retorna:
        bool: True ou False, indicando se a datá é válida ou não.
    """
    
    # limpando a variavel data e criando as contantes
    data = data.replace('/', '')
    dia, mes, ano, dia_max = int(data[0:2]), int(data[2:4]), int(data[4:8]), 0
    
    # informando as condições
    if (mes < 8 and mes % 2 != 0) or (mes >= 8 and mes % 2 == 0):
        # meses com 31 dias
        dia_max = 31
    elif mes == 2:
        #configurando os anos bissextos
        if ano % 1000 == 0:
            if ano % 4 == 0 and ano % 400 == 0:
                # ano bissexto
                dia_max = 29
            else:
                # ano normal
                dia_max = 28
        elif ano % 4 == 0:
            # ano bissexto
            dia_max = 29
        else:
            # ano normal
            dia_max = 28
    else:
        # meses com 30 dias
        dia_max = 30
    
    # condição de data verdadeira
    if 0 < dia <= dia_max and 0 < mes < 13 and 0 < ano < 2023:
        # data verdadeira
        return True
    else:
        return False


def baskara(a,b, c):
    """Calcule as raízes de uma equação do segundo grau, na forma
    ax2 + bx + c. A função recebe a, b e c e faz as consistências,
    informando ao usuário nas seguintes situações:
    - Se o usuário informar o valor de A igual a zero é uma equaçao do 1o grau.
    - Se o delta calculado for negativo, a equação não possui raizes reais.
    Devolva uma tupla vazia.
    - Se o delta calculado for igual a zero a equação possui apenas uma
    raiz real. Devolva uma tupla com um único valor.
    - Se o delta for positivo, a equação possui duas raiz reais.
    Devolva uma tupla com dois elementos.

    Argumentos:
        a (float): valor a da equação;
        b (float): valor b da equação;
        c (float): valor c da equação;

    Retorna:
        tupla de floats: uma tupla, contando os valores das raízes, sendo
        uma raiz, duas raízes ou uma tupla vazia caso não existam raízes.
    """
    
    # atribuindo valor a delta
    delta =(b**2) - (4*a*c)
    
    # informando as condições
    if a == 0:
        # fuyção de 1 grau
        x = (-c / b)
        return (x, )
    elif delta < 0:
        # x não está no conjunto dos numeros Reais
        return ()
    elif delta == 0:
        #função de 2 grau com apenas 1 raiz
        x1 = (-b - math.sqrt(delta)) / (2*a)
        return (x1, )
    else: 
        #função de 2 grau com 2 raizes 
        x1 = (-b + math.sqrt(delta)) / (2*a)
        x2 = (-b - math.sqrt(delta)) / (2*a)
        return (x1, x2)
    
    
def acrescimo_nota_bb(nota_sozinho, nota_com_ajuda):
    """Recebe a nota do litle brother antes de receber ajuda, e a nota
    depois que o big brother ajudou, e retorna o acrecimo que o big
     brother recebera em sua nota pela ajuda.
     O acréscimo é de 1/4 da diferença das notas, se for positivo.

    Argumentos:
        nota_sozinho (float): a nota que o aluno tirou sem ajuda.
        nota_com_ajuda (float): a nota que o aluno tirou após ter sido ajudado.

    Retorna:
        float: o acréscimo na nota obtido pelo aluno que ajudou seu colega.
    """
    
    # definindo a diferença de nota e o acrescimo de nota
    diferenca_nota = (nota_com_ajuda - nota_sozinho)
    acrescimo_nota = round(diferenca_nota / 4, 1)
    
    if diferenca_nota > 1:
        return acrescimo_nota
    else:
        return 0
        
        
# Área de testes: só mexa aqui se souber o que está fazendo!
acertos = 0
total = 0


def test(obtido, esperado):
    global acertos, total
    total += 1
    if obtido != esperado:
        prefixo = "\033[31m%s" % ("Falhou")
    else:
        prefixo = "\033[32m%s" % ("Passou")
        acertos += 1
    print(
        "%s Esperado: %s \tObtido: %s\033[1;m" % (prefixo, repr(esperado), repr(obtido))
    )


def main():

    print("Maior de 3 valores:")
    test(maior3(a=1, b=2, c=3), 3)
    test(maior3(a=1.01, b=1.1, c=1.02), 1.1)
    test(maior3(a=0, b=-1, c=-2), 0)
    test(maior3(a=-100, b=0, c=100), 100)

    print("Menor de 3 valores:")
    test(menor3(a=1, b=2, c=3), 1)
    test(menor3(1.01, 1.02, 1.1), 1.01)
    test(menor3(0, -1, -2), -2)
    test(menor3(-100, 0, 100), -100)

    print("Triângulos:")
    test(testa_lados(7, 1, 2), "Não forma um triângulo")
    test(testa_lados(7, 2, 1), "Não forma um triângulo")
    test(testa_lados(1, 7, 2), "Não forma um triângulo")
    test(testa_lados(1, 2, 7), "Não forma um triângulo")
    test(testa_lados(2, 1, 7), "Não forma um triângulo")
    test(testa_lados(2, 7, 1), "Não forma um triângulo")
    test(testa_lados(2, 2, 2), "Triângulo equilátero")
    test(testa_lados(3, 3, 3), "Triângulo equilátero")
    test(testa_lados(2, 3, 4), "Triângulo escaleno")
    test(testa_lados(2, 4, 3), "Triângulo escaleno")
    test(testa_lados(3, 4, 2), "Triângulo escaleno")
    test(testa_lados(3, 2, 4), "Triângulo escaleno")
    test(testa_lados(2, 3, 3), "Triângulo isósceles")
    test(testa_lados(3, 2, 2), "Triângulo isósceles")
    test(testa_lados(3, 3, 2), "Triângulo isósceles")
    test(testa_lados(3, 2, 3), "Triângulo isósceles")

    print("Ano bissexto:")
    test(ano_bissexto(ano=1000), False)
    test(ano_bissexto(ano=1200), True)
    test(ano_bissexto(ano=1004), True)
    test(ano_bissexto(ano=1040), True)
    test(ano_bissexto(ano=2012), True)
    test(ano_bissexto(ano=2014), False)

    print("Maior dia do mês:")
    test(maior_dia_do_mes(mes=1, ano=2014), 31)
    test(maior_dia_do_mes(mes=3, ano=2014), 31)
    test(maior_dia_do_mes(mes=4, ano=2014), 30)
    test(maior_dia_do_mes(mes=5, ano=2014), 31)
    test(maior_dia_do_mes(mes=6, ano=2014), 30)
    test(maior_dia_do_mes(mes=7, ano=2014), 31)
    test(maior_dia_do_mes(mes=9, ano=2014), 30)
    test(maior_dia_do_mes(mes=10, ano=2014), 31)
    test(maior_dia_do_mes(mes=11, ano=2014), 30)
    test(maior_dia_do_mes(mes=12, ano=2014), 31)
    test(maior_dia_do_mes(mes=2, ano=2014), 28)
    test(maior_dia_do_mes(mes=2, ano=2016), 29)

    print("Valida datas:")
    test(data_valida(data="01/01/2014"), True)
    test(data_valida(data="31/01/2014"), True)
    test(data_valida(data="00/00/0000"), False)
    test(data_valida(data="30/04/2014"), True)
    test(data_valida(data="31/04/2014"), False)
    test(data_valida(data="30/09/2014"), True)
    test(data_valida(data="31/09/2014"), False)
    test(data_valida(data="30/06/2014"), True)
    test(data_valida(data="31/06/2014"), False)
    test(data_valida(data="30/11/2014"), True)
    test(data_valida(data="31/11/2014"), False)
    test(data_valida(data="32/01/2014"), False)
    test(data_valida(data="01/01/0000"), False)
    test(data_valida(data="01/13/2014"), False)
    test(data_valida(data="01/00/2014"), False)
    test(data_valida(data="29/02/2014"), False)
    test(data_valida(data="29/02/2016"), True)

    print("Báskara:")
    test(baskara(1, 4, 4), (-2.0,))
    test(baskara(1, 5, 4), (-1.0, -4.0))
    test(baskara(0, 4, 2), (-0.5,))
    test(baskara(4, 4, 4), ())

    print("Acréscimo BB:")
    test(acrescimo_nota_bb(1, 10), 2.2)
    test(acrescimo_nota_bb(7, 6), 0.0)
    test(acrescimo_nota_bb(0, 10), 2.5)
    test(acrescimo_nota_bb(6.9, 7.1), 0.0)


if __name__ == "__main__":
    main()
    print(
        "\n%d Testes, %d Ok, %d Falhas: Nota %.1f"
        % (total, acertos, total - acertos, float(acertos * 10) / total)
    )
    if total == acertos:
        print("Parabéns, seu programa rodou sem falhas!")