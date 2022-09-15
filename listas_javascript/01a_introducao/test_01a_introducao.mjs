// Testes para lista de exercícios 1 - variáveis e operadores

import * as f from "./01a_introducao.mjs"

// Área de testes: só mexa aqui se souber o que está fazendo!

function test(obtido, esperado) {
    total += 1
    let prefixo
    let cur_esperado = esperado
    let cur_obtido = obtido
    let cor_erro = "\x1b[31m%s\x1b[0m"
    let cor_acerto = "\x1b[32m%s\x1b[0m"

    // Para não usar cores, descomente as 2 linhas abaixo:
    // corErro = ""
    // corAcerto = ""
    if (typeof esperado === "object") cur_esperado = esperado.sort().join("")
    if (typeof obtido === "object") cur_obtido = obtido.sort().join("")
    if (cur_esperado != cur_obtido) {
        prefixo = cor_erro
    } else {
        prefixo = cor_acerto
        acertos += 1
    }
    console.log(prefixo, `Esperado: ${esperado} \tObtido: ${obtido}`)
}

function main() {
    const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const lista2 = [-1, 0]
    const lista3 = [-10, 0, 10, 2, 100, -100, -100.1]
    const lista4 = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]

    console.log("Soma dois inteiros:")
    test(f.somaInteiros(0, 0), 0)
    test(f.somaInteiros(-1, 0), -1)
    test(f.somaInteiros(1, 1), 2)
    test(f.somaInteiros(0, -1), -1)
    test(f.somaInteiros(10, 10), 20)
    test(f.somaInteiros(-10, -10), -20)
    test(f.somaInteiros(-10, 20), 10)

    console.log("Metros para milimetros:")
    test(f.metrosParaMilimetros(0), 0)
    test(f.metrosParaMilimetros(1), 1000)
    test(f.metrosParaMilimetros(1.8), 1800)
    test(f.metrosParaMilimetros(1.81), 1810)

    console.log(
        "Tempo gasto para percorrer um distancia a uma velocidade constante(linha reta)"
    )
    test(f.tempoParaPercorrerUmaDistancia(1330, 20), 66.5)
    test(f.tempoParaPercorrerUmaDistancia(1000, 100), 10.0)
    test(f.tempoParaPercorrerUmaDistancia(1000, 123), 8.13)
    test(f.tempoParaPercorrerUmaDistancia(100000, 201), 497.51)

    console.log("Aumento salarial baseado na porcentagem de aumento:")
    test(f.aumentoSalarial(1330, 20), 1596.0)
    test(f.aumentoSalarial(1000, 0), 1000.0)
    test(f.aumentoSalarial(1000.1, 123), 2230.22)
    test(f.aumentoSalarial(0.0, 200), 0.0)

    console.log("Desconto do preco atual baseado na porcentagem do desconto:")
    test(f.precoComDesconto(1330, 20), 1064.0)
    test(f.precoComDesconto(1000, 0), 1000.0)
    test(f.precoComDesconto(1000.1, 5.5), 945.09)
    test(f.precoComDesconto(0.0, 200), 0.0)

    console.log("Dias,horas,minutos e segundos para segundos:")
    test(f.diasParaSegundos(0, 0, 0, 0), 0)
    test(f.diasParaSegundos(0, 0, 0, 1), 1)
    test(f.diasParaSegundos(0, 0, 0, 30), 30)
    test(f.diasParaSegundos(0, 0, 1, 0), 60)
    test(f.diasParaSegundos(0, 0, 1, 1), 61)
    test(f.diasParaSegundos(0, 1, 0, 0), 3600)
    test(f.diasParaSegundos(0, 0, 60, 0), 3600)
    test(f.diasParaSegundos(1, 0, 0, 0), 86400)
    test(f.diasParaSegundos(1, 1, 1, 1), 90061)
    test(f.diasParaSegundos(0, 23, 59, 59), 86399)
    test(f.diasParaSegundos(10, 20, 59, 1), 939541)

    console.log("Celsius para Fahrenheit:")
    test(f.celsiusParaFahrenheit(0), 32.0)
    test(f.celsiusParaFahrenheit(100), 212.0)
    test(f.celsiusParaFahrenheit(30), 86.0)
    test(f.celsiusParaFahrenheit(300), 572.0)
    test(f.celsiusParaFahrenheit(-100), -148.0)
    test(f.celsiusParaFahrenheit(1), 33.8)

    console.log("Fahrenheit para Celsius:")
    test(f.fahrenheitParaCelsius(32), 0)
    test(f.fahrenheitParaCelsius(212), 100)
    test(f.fahrenheitParaCelsius(30), -1.11)
    test(f.fahrenheitParaCelsius(300), 148.89)
    test(f.fahrenheitParaCelsius(-100), -73.33)
    test(f.fahrenheitParaCelsius(1), -17.22)

    console.log("Preco a pagar pelo aluguel do carro:")
    test(f.precoAluguelCarro(10, 100), 615.0)
    test(f.precoAluguelCarro(13, 133), 799.95)
    test(f.precoAluguelCarro(1, 0), 60.0)
    test(f.precoAluguelCarro(3, 79), 191.85)

    console.log("Total de dias que perdeu de viver por ter fumados:")
    test(f.diasPerdidosPorFumar(1, 1), 2.53)
    test(f.diasPerdidosPorFumar(10, 10), 253.47)
    test(f.diasPerdidosPorFumar(13, 13), 428.37)
    test(f.diasPerdidosPorFumar(0, 110), 0.0)
    test(f.diasPerdidosPorFumar(3, 79), 600.73)

    console.log(
        "Calcula a quantidade de numeros que ha em dois elevado a um milhao"
    )
    test(f.doisElevadoADez(), 4)

    console.log("Média final:")

    test(f.mediaFinalAprovadoReprovado(10, 10, 0, 0), true)
    test(f.mediaFinalAprovadoReprovado(0, 0, 10, 10), false)
    test(f.mediaFinalAprovadoReprovado(10, 10, 10, 10), true)
    test(f.mediaFinalAprovadoReprovado(0, 0, 5, 0), false)
    test(f.mediaFinalAprovadoReprovado(8.0, 7.0, 9.0, 8.0), true)

    console.log("Salário líquido:")
    test(f.salarioLiquido(10, 80), 608)
    test(f.salarioLiquido(100, 30), 2280)
    test(f.salarioLiquido(2.5, 300), 570)
    test(f.salarioLiquido(5, 120), 456)

    console.log("Dúzias:")
    test(f.duziasOvos(12), 1)
    test(f.duziasOvos(24), 2)
    test(f.duziasOvos(11), 1)
    test(f.duziasOvos(23), 2)

    console.log("Latas de tinta:")
    test(f.latasTinta(10), 1)
    test(f.latasTinta(100), 2)
    test(f.latasTinta(560), 11)
    test(f.latasTinta(50001), 926)

    console.log("Decompor número:")
    test(f.decomporNumero(326), [3, 2, 6])
    test(f.decomporNumero(320), [3, 2, 0])
    test(f.decomporNumero(310), [3, 1, 0])
    test(f.decomporNumero(305), [3, 0, 5])
    test(f.decomporNumero(300), [3, 0, 0])
    test(f.decomporNumero(100), [1, 0, 0])
    test(f.decomporNumero(101), [1, 0, 1])
    test(f.decomporNumero(311), [3, 1, 1])
    test(f.decomporNumero(111), [1, 1, 1])
    test(f.decomporNumero(12), [0, 1, 2])
    test(f.decomporNumero(25), [0, 2, 5])
    test(f.decomporNumero(20), [0, 2, 0])
    test(f.decomporNumero(10), [0, 1, 0])
    test(f.decomporNumero(21), [0, 2, 1])
    test(f.decomporNumero(11), [0, 1, 1])
    test(f.decomporNumero(16), [0, 1, 6])
    test(f.decomporNumero(1), [0, 0, 1])
    test(f.decomporNumero(7), [0, 0, 7])

    console.log("Média ponderada:")
    test(f.mediaPonderada(10, 10, 10), 10)
    test(f.mediaPonderada(7, 7, 7), 7)
    test(f.mediaPonderada(5, 8, 10), 6.1)
    test(f.mediaPonderada(0, 0, 0), 0)

    console.log("Aluguel do airBnB:")
    test(f.aluguelAirBnB(100, 1), 180.0)
    test(f.aluguelAirBnB(100, 2), 285.0)
    test(f.aluguelAirBnB(200, 10), 2175.0)
    test(f.aluguelAirBnB(50, 5), 337.5)
}

var acertos = 0
var total = 0

main()
const resultado = Math.round((acertos * 100.0) / total)
console.log(
    `\n${total} Testes, ${acertos} Ok, ${
        total - acertos
    } Falhas: Nota ${resultado}`
)
if (total === acertos) {
    console.log("Parabéns, seu programa rodou sem falhas!")
}
