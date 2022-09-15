# ----------------------------------------------------------------------------------------------------------------- #
#                           RESOLVENDO UMA FUNÇÃO DE 5 GRAU COM MATEMÁTICA COMPUTACIONAL                            #
# ----------------------------------------------------------------------------------------------------------------- #

# imports
from matplotlib import pyplot
import numpy as np

# apresentação do programa
print('\033[1;32m\nRESOLVENDO UMA FUNÇÃO DE 5 GRAU COM MATEMÁTICA COMPUTACIONAL\n\033[m')
print('Digite abaixo os valores da função. Exemplo: (f(x) = \033[1;36max5\033[m + \033[1;36mbx4\033[m + \033[1;36mcx3\033[m + \033[1;36mdx²\033[m + \033[1;36mex\033[m + \033[1;36mf\033[m)')

# definindo os valores da função
a = int(input('Digite o valor de ( \033[1;36ma\033[m ): '))
b = int(input('Digite o valor de ( \033[1;36mb\033[m ): '))
c = int(input('Digite o valor de ( \033[1;36mc\033[m ): '))
d = int(input('Digite o valor de ( \033[1;36md\033[m ): '))
e = int(input('Digite o valor de ( \033[1;36me\033[m ): '))
f = int(input('Digite o valor de ( \033[1;36mf\033[m ): '))

# definindo os valores do intervalo
print()
valor_inicial_de_x = int(input('Digite o valor inicial da busca: '))
valor_final_de_x = int(input('Digite o valor final da busca: '))
while True: 
    # verificando que o valor final é maior que o inicial
    if valor_final_de_x < valor_inicial_de_x:
        valor_final_de_x = int(input('\033[1;31m\n( ! ) Digite um valor maior que o incial: '))
        print()
    else:
        break
incremento = float(input('\033[mDigite o valor do incremento: '))

# encontrando y
def funcao(x):
    return (
        (a * (x**5)) +
        (b * (x**4)) +
        (c * (x**3)) +
        (e * (x**2)) +
        (d * x) +
        (f)
    )
    
# listas que vão armazenar os valores emcontrados em X e Y
valores_em_x, valores_em_y = [], []

# loop para encontrar os valores de X e Y dentro do range setado
print('\nValores de X e Y encontrados:\n')
for x in np.arange(valor_inicial_de_x, (valor_final_de_x + 0.5), incremento):
    y = funcao(x)
    valores_em_x.append(x)
    valores_em_y.append(y)
    print('x: ',x, '| y: ', y)
    print()

# essa função encontrara as raizes atraves da detecção dos sinais
def encontra_mudanca_de_sinal(valores_em_x, valores_em_y):
    # listas que vão armazenar as raizes de X e Y e valor anterior de y
    raizes_de_x, raizes_de_y, valor_anterior = [], [], 0

    # loop para encontrar a mudança de sinal
    for i, y in enumerate(valores_em_y):
        if (y > 0 and valor_anterior < 0) or (y < 0 and valor_anterior > 0):
            # adiciona o x e o y anterior e posterior nas listas de raizes de x e y
            int_y = [valor_anterior, y]
            int_x = [valores_em_x[i - 1], valores_em_x[i]]

            raizes_de_y.append(int_y)
            raizes_de_x.append(int_x)
        valor_anterior = y
    return raizes_de_x, raizes_de_y

# funcao de aproximação
def aproximacao(x_1,x_2):
    return (x_1 + x_2) / 2

# função que ira refinar os intervalos que foram encontradas com a função encontra_mudanca_de_sinal
def refinador_de_intertvalo(raizes_em_x, raizes_em_y):
    erro, qtd_interacoes, i = [], [], 0
    while i < len(raizes_em_x):
        iteracao = 0
        while True:
            qtd_interacoes.append(iteracao)
            # definir os valores de X1 e X2 e Y
            x_1 = raizes_em_x[i][0]
            x_2 = raizes_em_x[i][1]
            y = raizes_em_y[i][0]

            # fazendo a aproximação
            x_aproximado = aproximacao(x_1, x_2)
            y_aproximado = funcao(x_aproximado)

            # verificando
            if y < 0:
                raizes_em_y[i][0] = y_aproximado
                raizes_em_x[i][0] = x_aproximado
            else:
                raizes_em_y[i][1] = y_aproximado
                raizes_em_x[i][1] = x_aproximado

            # condição de erro
            erro.append(abs(x_aproximado - x_1)) if abs(x_aproximado - x_1) < abs(x_aproximado - x_2) else erro.append(abs(x_aproximado - x_2))
            
            #proxima interação
            iteracao += 1
            
            # condição de parada
            if (abs(x_aproximado - x_1) < 10**-6) or (abs(x_aproximado - x_2) < 10**-6):
                break

        #proximo valor
        i+=1
    return raizes_em_x, raizes_em_y, qtd_interacoes, erro

# chamando as funções de encontra_mudanca_de_sinal e refinador_de_intertvalo
raizes_em_x, raizes_em_y = encontra_mudanca_de_sinal(valores_em_x, valores_em_y)
x_refinado, y_refinado, qtd_interacoes, erro = refinador_de_intertvalo(raizes_em_x, raizes_em_y)

# mostrando os valores na tela
print('\033[1;32mvalor refinado final: ', x_refinado, y_refinado, '\033[m')
print('\033[1;34m\ninterações realizadas: ', len(qtd_interacoes), '\033[m')

# integração com o grafico usando pyplot
fig, ax = pyplot.subplots()
ax.plot(erro, qtd_interacoes)
pyplot.title("Gráfico da iteração versus o erro |xi¹ - xi²|")
pyplot.xlabel("Quantidade de vezes Refinado")
pyplot.ylabel("|x1 - x|")
pyplot.show()