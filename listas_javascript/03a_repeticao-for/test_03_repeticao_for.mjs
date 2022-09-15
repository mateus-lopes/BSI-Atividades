// Lista de exercícios - Repetição com for
// Área de testes: só mexa aqui se souber o que está fazendo!

import * as f from "./03_repeticao_for.mjs"

function test(obtido, esperado) {
    total += 1
    let cur_esperado = esperado
    let cur_obtido = obtido
    let cor_erro = "\x1b[31m%s\x1b[0m"
    let cor_acerto = "\x1b[32m%s\x1b[0m"

    // Para não usar cores, descomente as 2 linhas abaixo:
    // corErro = ""
    // corAcerto = ""

    let prefixo
    if (typeof esperado === "object") cur_esperado = esperado.join("")
    if (typeof obtido === "object") cur_obtido = obtido.join("")
    if (cur_esperado !== cur_obtido) {
        prefixo = cor_erro
    } else {
        prefixo = cor_acerto
        acertos += 1
    }
    console.log(prefixo, `Esperado: ${esperado} \tObtido: ${obtido}`)
}

function main() {
    console.log("Soma dos elementos da lista:")
    test(f.soma([]), 0)
    test(f.soma([0]), 0)
    test(f.soma([1]), 1)
    test(f.soma([1, 1]), 2)
    test(f.soma([2, 3]), 5)
    test(f.soma([1, 3, 2, 5]), 11)
    test(f.soma([-1, 1]), 0)
    test(f.soma([10, -10]), 0)
    test(f.soma([-2, -1]), -3)

    console.log("Média dos elementos da lista:")
    test(
        f.media([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]),
        10.0
    )
    test(
        f.media([10, 12, 9, 13, 12, 10, 9, 13, 10, 12, 9, 13]),
        11.0
    )

    console.log("Média dos saltos em lista:")
    test(f.mediaSaltosLista([10, 10, 10, 10, 10]), 10)
    test(f.mediaSaltosLista([9, 9.1, 8, 7, 6.9]), 8)
    test(f.mediaSaltosLista([1, 1, 3, 5, 5]), 3)
    test(f.mediaSaltosLista([10, 10, 9.9, 10, 10]), 10)
    test(f.mediaSaltosLista([1, 4.5, 0, 7, 5]), 3.5)
    test(f.mediaSaltosLista([8, 1, 7, 10, 5]), 6.7)

    console.log("Troca caixa:")
    test(f.trocaCaixa("Araquari"), "ArAqUArI") // normal
    test(f.trocaCaixa("Caxias do Sul"), "cAxIAs dO sUl") // com espaços
    test(f.trocaCaixa("joinville"), "jOInvIllE") // com espaços
    test(f.trocaCaixa("ITAJAI"), "ItAjAI") // com espaços

    console.log("leet")
    test(f.leet("ifc"), "1fc")
    test(f.leet("fisl2013"), "f15l2013")
    test(f.leet("deco"), "d3c0")
    test(f.leet("EMO"), "3M0")
    test(f.leet("restart"), "r3574r7")
    test(f.leet("infeliz"), "1nf3l1z")
    test(f.leet("The Cure"), "7h3 Cur3")
    test(f.leet("Eu te amo"), "3u 73 4m0")

    console.log("Quantidade de ímpares:")
    test(f.quantidadeImpares(1, 10), 4)
    test(f.quantidadeImpares(1, 11), 4)
    test(f.quantidadeImpares(1, 50), 24)
    test(f.quantidadeImpares(1, 60), 29)
    test(f.quantidadeImpares(40, 80), 20)

    console.log("Soma_das_temperaturas de números inteiros:")
    test(f.somaInteiros(1, 5), 15)
    test(f.somaInteiros(1, 50), 1275)
    test(f.somaInteiros(50, 1), 1275)
    test(f.somaInteiros(10, 1), 55)
    test(f.somaInteiros(-10, 1), -54)
    test(f.somaInteiros(10, -10), 0)

    console.log("Série:")
    test(f.serie(1), 1.0)
    test(f.serie(15), 3.32)
    test(f.serie(10), 2.93)
    test(f.serie(5), 2.28)

    const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const lista2 = [-1, 0]
    const lista3 = [-10, 0, 10, 2, 100, -100, -100.1]
    const lista4 = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
    const lista5 = [1, 3, 5, 7, 9]
    const lista6 = [2, 4, 6, 8, 10]

    console.log("Ordenamento contrário:")
    test(f.inverteOrdemElementos(lista1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    test(f.inverteOrdemElementos(lista2), [0, -1])
    test(f.inverteOrdemElementos(lista3), [-100.1, -100, 100, 2, 10, 0, -10])

    console.log("Lista Intercalada:")
    test(
        f.intercalaListas(lista5, lista6),
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    )
    test(
        f.intercalaListas(lista6, lista5),
        [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]
    )

    console.log("Lista de pares e impares:")
    test(f.separaParesImpares(lista1), [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]])
    test(f.separaParesImpares(lista5), [[], [1, 3, 5, 7, 9]])
    test(f.separaParesImpares(lista6), [[2, 4, 6, 8, 10], []])

    console.log("Maior e o menor da lista:")
    test(f.maiorMenor(lista1), [10, 1])
    test(f.maiorMenor(lista2), [0, -1])
    test(f.maiorMenor(lista3), [100, -100.1])
    test(f.maiorMenor(lista4), [-1, -10])

    console.log("Troco do pagamento:")
    test(f.darTroco(10, 10), [])
    test(f.darTroco(1, 201), [[50, 4]])
    test(f.darTroco(10, 148), [
        [50, 2],
        [20, 1],
        [10, 1],
        [5, 1],
        [2, 1],
        [1, 1],
    ])
    test(f.darTroco(10, 109), [
        [50, 1],
        [20, 2],
        [5, 1],
        [2, 2],
    ])

    console.log("Meses acima da média anual:")
    test(f.mesesAcimaMediaAnual([20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]), [])
    test(f.mesesAcimaMediaAnual([25, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]), [0])
    test(
        f.mesesAcimaMediaAnual([23, 25, 26, 24, 21, 22, 26, 24, 25, 22, 23, 19]),
        [1, 2, 3, 6, 7, 8]
    )
    test(
        f.mesesAcimaMediaAnual([19, 20, 21, 20, 17, 18, 19, 20, 22, 21, 20]),
        [1, 2, 3, 7, 8, 9, 10]
    )
    test(
        f.mesesAcimaMediaAnual([21, 22, 23, 21, 22, 22, 23, 21, 23, 22, 21, 23, 21]),
        [1, 2, 4, 5, 6, 8, 9, 11]
    )

    console.log("Alturas abaixo da media:")
    test(f.maiores13([13, 13, 14], [1.7, 1.7, 1.5]), [1.5])
    test(f.maiores13([13, 13, 14, 13], [1.7, 1.7, 1.5, 1.6]), [1.5])
    test(f.maiores13([14, 20], [1.6, 2]), [1.6])
    test(
        f.maiores13([10, 7, 13, 15, 20, 21], [1.7, 1.21, 1.65, 2, 1.9, 1.5]),
        [1.5]
    )
    test(
        f.maiores13(
            [14, 15, 16, 17, 18, 30],
            [1.9, 1.89, 1.85, 1.95, 2, 1.99]
        ),
        [1.9, 1.89, 1.85]
    )
    test(
        f.maiores13(
            [10, 9, 90, 9, 13, 14, 15],
            [1.25, 1.3, 1.7, 1.41, 1.5, 1.55, 1.7]
        ),
        []
    )

    console.log("Testa se um número é primo:")
    test(f.testaPrimo(0), false)
    test(f.testaPrimo(1), false)
    test(f.testaPrimo(2), true)
    test(f.testaPrimo(3), true)
    test(f.testaPrimo(4), false)
    test(f.testaPrimo(5), true)
    test(f.testaPrimo(7), true)
    test(f.testaPrimo(9), false)
    test(f.testaPrimo(11), true)
    test(f.testaPrimo(13), true)

    console.log("Lista de primos:")
    test(f.listaDePrimos(0, 1), [])
    test(f.listaDePrimos(5, 10), [5, 7])
    test(f.listaDePrimos(10, 20), [11, 13, 17, 19])
    test(f.listaDePrimos(0, 21), [2, 3, 5, 7, 11, 13, 17, 19])
    test(
        f.listaDePrimos(43, 102),
        [43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
    )

    console.log("Fibonacci:")
    test(f.fibonacci(1), [1])
    test(f.fibonacci(2), [1, 1])
    test(f.fibonacci(3), [1, 1, 2])
    test(f.fibonacci(4), [1, 1, 2, 3])

    console.log("Aumenta salários:")
    test(
        f.altera_salarios([
            500, 724.0, 725.0, 1448.0, 1449.0, 3620.0, 3621.0, 4000.0,
        ]),
        [600.0, 868.8, 833.75, 1665.2, 1593.9, 3982.0, 3802.05, 4200.0]
    )
}

var acertos = 0
var total = 0

main()
const resultado = Math.round((acertos * 100.0) / total)
console.log(
    `\n${total} Testes, ${acertos} Ok, ${
        total - acertos
    } Falhas. Nota: ${resultado}`
)
if (total === acertos) {
    console.log("Parabéns, seu programa rodou sem falhas!")
}
