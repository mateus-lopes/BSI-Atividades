// Lista de exercícios - Condições
// Área de testes: só mexa aqui se souber o que está fazendo!

import * as f from "./02a_condicoes.mjs"

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
    if (typeof esperado === "object") cur_esperado = esperado.sort().join("")
    if (typeof obtido === "object") cur_obtido = obtido.sort().join("")
    if (cur_esperado !== cur_obtido) {
        prefixo = cor_erro
    } else {
        prefixo = cor_acerto
        acertos += 1
    }
    console.log(prefixo, `Esperado: ${esperado} \tObtido: ${obtido}`)
}

function main() {
    console.log("Acréscimo BB:")
    test(f.acrescimoNotaBB(1, 10), 2.3)
    test(f.acrescimoNotaBB(7, 6), 0.0)
    test(f.acrescimoNotaBB(0, 10), 2.5)
    test(f.acrescimoNotaBB(6.9, 7.1), 0.0)

    console.log("Maior de 3 valores:")
    test(f.maior3(3, 2, 1), 3)
    test(f.maior3(3, 1, 2), 3)
    test(f.maior3(1, 3, 2), 3)
    test(f.maior3(2, 3, 1), 3)
    test(f.maior3(1, 2, 3), 3)
    test(f.maior3(2, 1, 3), 3)
    test(f.maior3(1.01, 1.1, 1.02), 1.1)
    test(f.maior3(0, -1, -2), 0)
    test(f.maior3(-100, 0, 100), 100)

    console.log("Menor de 3 valores:")
    test(f.menor3(3, 2, 1), 1)
    test(f.menor3(3, 1, 2), 1)
    test(f.menor3(1, 3, 2), 1)
    test(f.menor3(2, 3, 1), 1)
    test(f.menor3(1, 2, 3), 1)
    test(f.menor3(2, 1, 3), 1)
    test(f.menor3(1.01, 1.02, 1.1), 1.01)
    test(f.menor3(0, -1, -2), -2)
    test(f.menor3(-100, 0, 100), -100)

    console.log("Triângulos:")
    test(f.testaLados(7, 1, 2), "Não forma um triângulo")
    test(f.testaLados(7, 2, 1), "Não forma um triângulo")
    test(f.testaLados(1, 7, 2), "Não forma um triângulo")
    test(f.testaLados(1, 2, 7), "Não forma um triângulo")
    test(f.testaLados(2, 1, 7), "Não forma um triângulo")
    test(f.testaLados(2, 7, 1), "Não forma um triângulo")
    test(f.testaLados(2, 2, 2), "Triângulo equilátero")
    test(f.testaLados(3, 3, 3), "Triângulo equilátero")
    test(f.testaLados(2, 3, 4), "Triângulo escaleno")
    test(f.testaLados(2, 4, 3), "Triângulo escaleno")
    test(f.testaLados(3, 4, 2), "Triângulo escaleno")
    test(f.testaLados(3, 2, 4), "Triângulo escaleno")
    test(f.testaLados(2, 3, 3), "Triângulo isósceles")
    test(f.testaLados(3, 2, 2), "Triângulo isósceles")
    test(f.testaLados(3, 3, 2), "Triângulo isósceles")
    test(f.testaLados(3, 2, 3), "Triângulo isósceles")

    console.log("Ano bissexto:")
    test(f.anoBissexto(1000), false)
    test(f.anoBissexto(1200), true)
    test(f.anoBissexto(1004), true)
    test(f.anoBissexto(1040), true)
    test(f.anoBissexto(2012), true)
    test(f.anoBissexto(2014), false)

    console.log("Maior dia do mês:")
    test(f.maiorDiaDoMes(1, 2014), 31)
    test(f.maiorDiaDoMes(3, 2014), 31)
    test(f.maiorDiaDoMes(4, 2014), 30)
    test(f.maiorDiaDoMes(5, 2014), 31)
    test(f.maiorDiaDoMes(6, 2014), 30)
    test(f.maiorDiaDoMes(7, 2014), 31)
    test(f.maiorDiaDoMes(9, 2014), 30)
    test(f.maiorDiaDoMes(10, 2014), 31)
    test(f.maiorDiaDoMes(11, 2014), 30)
    test(f.maiorDiaDoMes(12, 2014), 31)
    test(f.maiorDiaDoMes(2, 2014), 28)
    test(f.maiorDiaDoMes(2, 2016), 29)
    test(f.maiorDiaDoMes(1, 2016), 31)
    test(f.maiorDiaDoMes(4, 2016), 30)

    console.log("Valida datas:")
    test(f.dataValida("01/01/2014"), true)
    test(f.dataValida("31/01/2014"), true)
    test(f.dataValida("30/04/2014"), true)
    test(f.dataValida("30/09/2014"), true)
    test(f.dataValida("30/06/2014"), true)
    test(f.dataValida("30/11/2014"), true)
    test(f.dataValida("29/02/2016"), true)
    test(f.dataValida("00/00/0000"), false)
    test(f.dataValida("31/04/2014"), false)
    test(f.dataValida("31/09/2014"), false)
    test(f.dataValida("31/06/2014"), false)
    test(f.dataValida("31/11/2014"), false)
    test(f.dataValida("32/01/2014"), false)
    test(f.dataValida("01/01/0000"), false)
    test(f.dataValida("01/13/2014"), false)
    test(f.dataValida("01/00/2014"), false)
    test(f.dataValida("29/02/2014"), false)

    console.log("Delta:")
    test(f.delta(4, 4, 4), -48) // delta menor que zero
    test(f.delta(1, 4, 4), 0) // delta igual a zero, uma raiz
    test(f.delta(1, 5, 4), 9) // delta maior que zero, duas raizes

    console.log("Báskara:")
    test(f.baskara(0, 4, 2), [-0.5]) // a igual zero, equação de 1o grau
    test(f.baskara(4, 4, 4), []) // delta menor que zero, sem raizes reais
    test(f.baskara(1, 4, 4), [-2.0]) // delta igual a zero, uma raiz
    test(f.baskara(1, 5, 4), [-1.0, -4.0]) // delta maior que zero, duas raizes
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
