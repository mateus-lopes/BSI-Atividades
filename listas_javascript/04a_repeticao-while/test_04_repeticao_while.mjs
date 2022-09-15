// Lista de exercícios - Repetição com while
// Área de testes: só mexa aqui se souber o que está fazendo!

import * as f from "./04_repeticao_while.mjs"

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
    console.log("Quantidade de ímpares:")
    test(f.quantidadeImpares(1, 3), 0)
    test(f.quantidadeImpares(1, 4), 1)
    test(f.quantidadeImpares(1, 5), 1)
    test(f.quantidadeImpares(1, 10), 4)
    test(f.quantidadeImpares(1, 50), 24)
    test(f.quantidadeImpares(1, 60), 29)
    test(f.quantidadeImpares(40, 80), 20)

    console.log("Soma de números inteiros:")
    test(f.somaInteiros(1, 50), 1224)
    test(f.somaInteiros(50, 1), 1224)
    test(f.somaInteiros(10, 1), 44)
    test(f.somaInteiros(-10, 1), -45)
    test(f.somaInteiros(10, -10), 0)

    console.log("Potência:")
    test(f.potencia(2, 1), 2)
    test(f.potencia(2, 2), 4)
    test(f.potencia(1, 20000), 1)
    test(f.potencia(2, 4), 16)
    test(f.potencia(10000, 1), 10000)
    test(f.potencia(2, 10), 1024)
    test(f.potencia(2, 0), 1)
    test(f.potencia(10, 0), 1)

    console.log("Aumento da população:")
    test(f.crescimentoPopulacional(80000, 200000, 3, 1.5), 63)
    test(f.crescimentoPopulacional(2000, 2020, 1.1, 1), 11)
    test(f.crescimentoPopulacional(2000, 1000, 1.1, 1), 0)
    test(f.crescimentoPopulacional(1000, 2000, 1, 1.1), 0)

    console.log("Fibonnaci:")
    test(f.fibonacci(1), [1])
    test(f.fibonacci(2), [1, 1])
    test(f.fibonacci(3), [1, 1, 2])
    test(f.fibonacci(4), [1, 1, 2, 3])
    test(f.fibonacci(5), [1, 1, 2, 3, 5])

    console.log("Fatorial:")
    test(f.fatorial(0), 1)
    test(f.fatorial(1), 1)
    test(f.fatorial(5), 120)
    test(f.fatorial(10), 3628800)

    console.log("Primo:")
    test(f.éPrimo(0), false)
    test(f.éPrimo(1), false)
    test(f.éPrimo(2), true)
    test(f.éPrimo(3), true)
    test(f.éPrimo(4), false)
    test(f.éPrimo(5), true)
    test(f.éPrimo(7), true)
    test(f.éPrimo(11), true)
    test(f.éPrimo(121), false)
    test(f.éPrimo(169), false)

    console.log("Quantidade de primos no intervalo:")
    test(f.quantidadePrimos(5, 10), 2)
    test(f.quantidadePrimos(5, 11), 3)
    test(f.quantidadePrimos(10, 20), 4)
    test(f.quantidadePrimos(0, 21), 8)
    test(f.quantidadePrimos(43, 102), 13)

    console.log("Lista de primos:")
    test(f.listaPrimos(0, 1), [])
    test(f.listaPrimos(5, 10), [5, 7])
    test(f.listaPrimos(10, 20), [11, 13, 17, 19])
    test(f.listaPrimos(0, 21), [2, 3, 5, 7, 11, 13, 17, 19])
    test(
        f.listaPrimos(43, 102),
        [43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
    )

    console.log("Série 1:")
    test(f.serie1(1), 1.0)
    test(f.serie1(15), 3.32)
    test(f.serie1(10), 2.93)
    test(f.serie1(5), 2.28)

    console.log("Série 2:")
    test(f.serie2(1), 1.0)
    test(f.serie2(2), 1.67)
    test(f.serie2(3), 2.27)
    test(f.serie2(4), 2.84)

    console.log("Série pi:")
    test(f.seriePi(1), 4.0)
    test(f.seriePi(2), 2.666667)
    test(f.seriePi(3), 3.466667)
    test(f.seriePi(4), 2.895238)
    test(f.seriePi(5), 3.339683)
    test(f.seriePi(6), 2.976046)
    test(f.seriePi(7), 3.283738)
    test(f.seriePi(8), 3.017072)
    test(f.seriePi(9), 3.252366)
    test(f.seriePi(10), 3.04184)
    test(f.seriePi(100), 3.131593)
    test(f.seriePi(150), 3.134926)
    test(f.seriePi(1000), 3.140593)
    test(f.seriePi(5000), 3.141393)
    test(f.seriePi(9000), 3.141482)
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
