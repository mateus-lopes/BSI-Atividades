#!/usr/bin/env python3

# Marco André Mendes <marcoandre@gmail.com>
# Resolva os exercícios tentando usar compreensão de lista onde possível.
# Pode colocar a solução diretamente no return, sem criar variáveis.


def nomes_com_menos_de_4_letras(lista):
    """ Use uma listcomp para gerar uma
     lista de homens com nomes de 4 ou menos letras."""

    return [ x for x in lista if len(x) <= 4]


def lista_de_nomes_e_inicial(lista):
    """
    Use uma listcomp para gerar uma lista de duplas (também conhecida em
    computação como uma lista associativa) formada pela letra inicial e o nome
    de cada homem. Por exemplo, a resposta para a lista mulheres seria:

    [('M', 'Mariana'), ('A', 'Ana'), ('P', 'Paula')]
    """

    return [(x[0], x) for x in lista]


def iniciais_e_nomes_incompleto(lista):
    """Gere um dicionário associando iniciais aos nomes de homens."""

    return {x[0]:x for x in lista}


def mulher_homem(mulher, homem):
    """4. Use a função zip para gerar uma lista associativa, e com ela carregar
    um dicionário associando cada mulher a um homem. Quantos itens terá o
    dicionário assim produzido?"""

    return {a:b for a, b in zip(mulher, homem)}


def produto_cartesiano(homens, mulheres):
    """5. Gere uma lista associativa para organizar uma aula de dança na qual
    todos devem dançar com todos. Quantos casais serão formados?
    Dica: o nome da operação a ser feita neste exercício é produto cartesiano,
    e para fazer isso em uma listcomp ou genexp você precisa usar mais de um
    for dentro da expressão."""

    return [(a, b) for a in homens for b in mulheres]


def produto_cartesiano_filtro(homens, mulheres):
    """6. Repita o exercício 5, acrescentando um filtro com if para remover os
    nomes com menos de 4 letras das duas listas. Quantos casais serão formados?"""

    return [(a, b) for a in homens if len(a)>=4 for b in mulheres if len(b)>=4]


def pares_e_divisiveis_por_7(limite_inicial=1067, limite_final=3627):
    """Entre 1067 e 3627 (inclusive), quantos números são pares e
    também divisíveis por 7?
    """

    return len([x for x in range(limite_inicial, limite_final+1) if x % 7 == 0 and x % 2 == 0])


def duplica_caracter(s):
    """
    Retorna os caracteres da string original duplicados
    duplica_caracter('The') -> 'TThhee'
    duplica_caracter('AAbb') -> 'AAAAbbbb'
    duplica_caracter('Hi-There') -> 'HHii--TThheerree'
    """

    return ''.join([x*2 for x in s])


def conta_pares(nums):
    """
    Retorna a quantidade de números pares da lista
    conta_pares([2, 1, 2, 3, 4]) -> 3
    conta_pares([2, 2, 0]) -> 3
    conta_pares([1, 3, 5]) -> 0
    """

    return len([x for x in nums if x % 2 == 0])


def gago(texto):
    """Receba um texto e devolva-o repetindo a primeira letra de cada palavra, junto com um traço
    gago("preciso tirar dez") -> "p-preciso t-tirar d-dez"
    gago("eu deveria ter estudado mais") -> "e-eu d-deveria t-ter e-estudado m-mais"
    """

    return ' '.join([ '{}-{}'.format(x[0], x) for x in texto.split(' ')])


def explode_string(s):
    """
    explode_string('Code') -> 'CCoCodCode'
    explode_string('abc') -> 'aababc'
    explode_string('ab') -> 'aab'
    """

    return ''.join([s[:i+1] for i, x in enumerate(s)])


def intercalamento_listas(lista1, lista2):
    """Usando 'lista1' e 'lista2', ambas do mesmo comprimento,
    crie uma nova lista composta pelo
    intercalamento entre as duas."""

    return [x for y in list(zip(lista1,lista2)) for x in y]


def numeros_sortudos(limite_inferior=1, limite_superior=100000):
    """Daniela é uma pessoa muito supersticiosa. Para ela, um número é
    sortudo se ele contém o dígito 2 mas não o dígito 7.
    Faça então uma função que informe a ela quantos números sortudos
    existem entre um intervalo dado, incluindo os extremos.
    Por exemplo: entre 18644 e 33087, existem 7995 números sortudos.
    Dica: faça uma função de validação e outra que a chama e
    verifica o intervalo dado
    """

    def valida_num(num):
        return "2" in str(num) and "7" not in str(num)      

    return len([x for x in range(limite_inferior, limite_superior) if valida_num(x)])


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
    print("")
    mulheres = ["Mariana", "Ana", "Paula"]
    homens = ["Pedro", "Juca", "Tom", "Joaquim"]

    print("\nNomes com 4 ou menos letras:")
    test(nomes_com_menos_de_4_letras(homens), ["Juca", "Tom"])
    test(nomes_com_menos_de_4_letras(mulheres), ["Ana"])

    print("\nInicial e Nome:")
    test(
        lista_de_nomes_e_inicial(mulheres),
        [("M", "Mariana"), ("A", "Ana"), ("P", "Paula")],
    )
    test(
        lista_de_nomes_e_inicial(homens),
        [("P", "Pedro"), ("J", "Juca"), ("T", "Tom"), ("J", "Joaquim")],
    )

    print("\nIniciais e nomes (incompleto):")
    test(
        iniciais_e_nomes_incompleto(mulheres),
        {"M": "Mariana", "P": "Paula", "A": "Ana"},
    )
    test(
        iniciais_e_nomes_incompleto(homens), {"P": "Pedro", "J": "Joaquim", "T": "Tom"}
    )

    print("\nMulher com homem:")
    test(
        mulher_homem(mulheres, homens),
        {"Paula": "Tom", "Ana": "Juca", "Mariana": "Pedro"},
    )

    print("\nProduto Cartesiano")
    test(
        produto_cartesiano(homens, mulheres),
        [
            ("Pedro", "Mariana"),
            ("Pedro", "Ana"),
            ("Pedro", "Paula"),
            ("Juca", "Mariana"),
            ("Juca", "Ana"),
            ("Juca", "Paula"),
            ("Tom", "Mariana"),
            ("Tom", "Ana"),
            ("Tom", "Paula"),
            ("Joaquim", "Mariana"),
            ("Joaquim", "Ana"),
            ("Joaquim", "Paula"),
        ],
    )

    print("\n6. Produto Cartesiano com filtro (4 ou mais letras no nome):")
    test(
        produto_cartesiano_filtro(homens, mulheres),
        [
            ("Pedro", "Mariana"),
            ("Pedro", "Paula"),
            ("Juca", "Mariana"),
            ("Juca", "Paula"),
            ("Joaquim", "Mariana"),
            ("Joaquim", "Paula"),
        ],
    )

    print("\nPares e divisíveis por 7:")
    test(pares_e_divisiveis_por_7(), 183)

    print("\nDuplica caracter:")
    test(duplica_caracter("The"), "TThhee")
    test(duplica_caracter("AAbb"), "AAAAbbbb")
    test(duplica_caracter("Hi-There"), "HHii--TThheerree")
    test(duplica_caracter("Word!"), "WWoorrdd!!")
    test(duplica_caracter("!!"), "!!!!")
    test(duplica_caracter(""), "")
    test(duplica_caracter("a"), "aa")
    test(duplica_caracter("."), "..")
    test(duplica_caracter("aa"), "aaaa")

    print("\nConta pares:")
    test(conta_pares([2, 1, 2, 3, 4]), 3)
    test(conta_pares([2, 2, 0]), 3)
    test(conta_pares([1, 3, 5]), 0)
    test(conta_pares([]), 0)
    test(conta_pares([11, 9, 0, 1]), 1)
    test(conta_pares([2, 11, 9, 0]), 2)
    test(conta_pares([2]), 1)
    test(conta_pares([2, 5, 12]), 2)

    print("\nGago:")
    test(gago("O"), "O-O")
    test(gago("O O"), "O-O O-O")
    test(gago("Oi"), "O-Oi")
    test(gago("beleza?"), "b-beleza?")
    test(gago("tudo bem?"), "t-tudo b-bem?")
    test(gago("nota dez!"), "n-nota d-dez!")
    test(gago("preciso tirar dez"), "p-preciso t-tirar d-dez")
    test(gago("eu deveria ter estudado mais"), "e-eu d-deveria t-ter e-estudado m-mais")

    print("\nExplode string:")
    test(explode_string("abc"), "aababc")
    test(explode_string("ab"), "aab")
    test(explode_string("x"), "x")
    test(explode_string("aqui"), "aaqaquaqui")
    test(explode_string("decai"), "ddedecdecadecai")
    test(explode_string("Beleza"), "BBeBelBeleBelezBeleza")
    test(explode_string("gago"), "ggagaggago")

    print("\nLista intercalada:")
    test(
        intercalamento_listas([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]),
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    )
    test(
        intercalamento_listas([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]),
        [1, 6, 2, 7, 3, 8, 4, 9, 5, 10],
    )

    print("\nNúmeros sortudos:")
    test(numeros_sortudos(18644, 33087), 7995)


if __name__ == "__main__":
    main()
    print(
        "\n%d Testes, %d Ok, %d Falhas: Nota %.1f"
        % (total, acertos, total - acertos, float(acertos * 10) / total)
    )
    if total == acertos:
        print("Parabéns, seu programa rodou sem falhas!")