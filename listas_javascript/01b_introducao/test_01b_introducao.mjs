// Testes
// Lista de exercícios 1b - variáveis, tipos de dados e operadores
// Área de testes: só mexa aqui se souber o que está fazendo!

import * as f from "./01b_introducao.mjs"

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
    if (typeof esperado === "object") 
        cur_esperado = esperado.sort().join("")
    if (typeof obtido === "object") 
        cur_obtido = obtido.sort().join("")
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

    console.log("Encontra caracter:")
    test(f.encontraCaracter("--*--", "*"), 2)
    test(f.encontraCaracter("19/05/2014", "/"), 2)

    console.log("Possui item:")
    test(f.contem([1, 2, 3, 4, 5], 6), false)
    test(f.contem([1, 2, 3, 4, 5], 3), true)
    test(f.contem(["b", "s", "i"], "i"), true)
    test(f.contem(["b", "s", "i"], "S"), false)

    console.log("Conta itens:")
    test(f.conta([1, 2, 3, 4, 5], 6), 0)
    test(f.conta([1, 2, 3, 4, 5], 1), 1)
    test(f.conta([1, 2, 1, 4, 1], 1), 3)
    test(f.conta(["b", "s", "i"], "i"), 1)
    test(f.conta(["b", "s", "i"], "S"), 0)
    test(f.conta(["b", "s", "i", "i", "f", "c"], "i"), 2)

    console.log("É azarado:")
    test(f.éAzarado("213452"), true)
    test(f.éAzarado("213451"), false)

    console.log("Listas invertidas:")
    test(f.ondernamentoContrario(lista1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    test(f.ondernamentoContrario(lista2), [0, -1])
    test(f.ondernamentoContrario(lista3), [-100.1, -100, 100, 2, 10, 0, -10])

    console.log("Apaga caracter")
    test(f.apagaCaracter("kitten", 1), "ktten")
    test(f.apagaCaracter("kitten", 0), "itten")
    test(f.apagaCaracter("kitten", 2), "kiten")
    test(f.apagaCaracter("kitten", 4), "kittn")
    test(f.apagaCaracter("Hi", 0), "i")
    test(f.apagaCaracter("Hi", 1), "H")
    test(f.apagaCaracter("code", 0), "ode")
    test(f.apagaCaracter("code", 1), "cde")
    test(f.apagaCaracter("code", 2), "coe")
    test(f.apagaCaracter("code", 3), "cod")
    test(f.apagaCaracter("chocolate", 8), "chocolat")

    console.log("Maior elemento da lista:")
    test(f.maximo(lista1), 10)
    test(f.maximo(lista2), 0)
    test(f.maximo(lista3), 100)
    test(f.maximo(lista4), -1)

    console.log("Menor elemento da lista:")
    test(f.minimo(lista1), 1)
    test(f.minimo(lista2), -1)
    test(f.minimo(lista3), -100.1)
    test(f.minimo(lista4), -10)

    console.log("Maior e o menor da lista:")
    test(f.maiorMenor(lista1), [10, 1])
    test(f.maiorMenor(lista2), [0, -1])
    test(f.maiorMenor(lista3), [100, -100.1])
    test(f.maiorMenor(lista4), [-1, -10])

    console.log("Mês por extenso:")
    test(f.mesExtenso(1), "jan")
    test(f.mesExtenso(2), "fev")
    test(f.mesExtenso(12), "dez")

    console.log("Mês por extenso:")
    test(f.dataComMesPorExtenso("19/05/2014"), "19 de maio de 2014")
    test(f.dataComMesPorExtenso("25/12/2016"), "25 de dezembro de 2016")
    test(f.dataComMesPorExtenso("01/01/2021"), "01 de janeiro de 2021")

    console.log("Palíndromo:")
    test(f.palindromo("ovo"), true) // normal
    test(f.palindromo("Ovo"), true) // mudança de caixa
    test(f.palindromo("Ovo "), true) // espaço no final
    test(f.palindromo(" Ovo "), true) // espaço no início
    test(f.palindromo("Assam a massa"), true) // frases(espaços em branco)
    test(f.palindromo("Assam a massa"), true) // frases (espaços em branco)
    test(f.palindromo("Ame o poema!"), true) // frases com pontuação

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
