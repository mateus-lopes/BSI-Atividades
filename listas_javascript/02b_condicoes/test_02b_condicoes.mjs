// Lista de exercícios - Condições
// Área de testes: só mexa aqui se souber o que está fazendo!

import * as f from "./02b_condicoes.mjs"

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
    console.log("Situacao aluno:")
    test(f.situacaoAluno(10, 10, 10, 18, 72), "AP")
    test(f.situacaoAluno(7, 7, 7, 18, 72), "AP")
    test(f.situacaoAluno(6, 7, 8, 18, 72), "AP")
    test(f.situacaoAluno(7, 7, 6, 18, 72), "EF")
    test(f.situacaoAluno(7, 7, 6.9, 18, 72), "EF")
    test(f.situacaoAluno(5, 7, 7, 18, 72), "EF")
    test(f.situacaoAluno(10, 10, 10, 19, 72), "RF")
    test(f.situacaoAluno(10, 10, 10, 20, 72), "RF")
    test(f.situacaoAluno(0, 0, 0, 30, 72), "RF")

    console.log("Aumento preço:")
    test(f.aumentoPreco(100), [100, 20, 20.0, 120.0])
    test(f.aumentoPreco(1500), [1500, 10, 150.0, 1650.0])
    test(f.aumentoPreco(3000), [3000, 5, 150.0, 3150.0])

    console.log("Idade canina:")
    test(f.idadeCanina(40, "pequeno"), 8)
    test(f.idadeCanina(40, "medio"), 6)
    test(f.idadeCanina(40, "grande"), 5)

    console.log("Aumento salarial:")
    // até 1 SM: 20%
    test(f.aumentoSalario(500.0), 600.0)
    test(f.aumentoSalario(724.0), 868.8)
    // 1-2 SM: 15%
    test(f.aumentoSalario(725.0), 833.75)
    test(f.aumentoSalario(1448.0), 1665.2)
    // 2-5 SM: 10%
    test(f.aumentoSalario(1449.0), 1593.9)
    test(f.aumentoSalario(3620.0), 3982.0)
    // >5 SM: 5%
    test(f.aumentoSalario(3621.0), 3802.05)
    test(f.aumentoSalario(4000.0), 4200.0)

    console.log("Nota para conceito:")
    test(f.notaParaConceito(10.0), "A")
    test(f.notaParaConceito(9.1), "A")
    test(f.notaParaConceito(9.0), "A")
    test(f.notaParaConceito(8.9), "B")
    test(f.notaParaConceito(8.1), "B")
    test(f.notaParaConceito(8.0), "B")
    test(f.notaParaConceito(7.9), "C")
    test(f.notaParaConceito(7.1), "C")
    test(f.notaParaConceito(7.0), "C")
    test(f.notaParaConceito(6.9), "D")
    test(f.notaParaConceito(6.1), "D")
    test(f.notaParaConceito(6.0), "D")
    test(f.notaParaConceito(5.9), "E")
    test(f.notaParaConceito(5.1), "E")
    test(f.notaParaConceito(5.0), "E")
    test(f.notaParaConceito(4.9), "E")
    test(f.notaParaConceito(4.0), "E")

    console.log("IMC")
    test(f.imc(50, 1.8), "Subpeso")
    test(f.imc(80, 1.8), "Normal")
    test(f.imc(90, 1.8), "Sobrepeso")
    test(f.imc(110, 1.8), "Obeso")
    test(f.imc(50, 1.5), "Normal")

    console.log("Converte hora 24 para 12:")
    // 1- Adicione 12 à meia-noite e finalize com “am”.
    test(f.converteHora24Para12("00:00"), "12:00 am")
    test(f.converteHora24Para12("00:01"), "12:01 am")
    test(f.converteHora24Para12("00:59"), "12:59 am")

    // 2- Coloque "am" nos horários entre “1:00” e “11:59”.
    // Retire o zero à esquerda.
    test(f.converteHora24Para12("01:00"), "1:00 am")
    test(f.converteHora24Para12("01:01"), "1:01 am")
    test(f.converteHora24Para12("11:00"), "11:00 am")
    test(f.converteHora24Para12("11:59"), "11:59 am")

    // Adicione “pm” ao intervalo entre “12:00” e “12:59”.
    test(f.converteHora24Para12("12:00"), "12:00 pm")
    test(f.converteHora24Para12("12:01"), "12:01 pm")
    test(f.converteHora24Para12("12:59"), "12:59 pm")

    // Subtraia 12 dos horários entre “13:00” e “23:59” e finalize com “pm”.
    // Não acrescente zeros à esquerda.
    test(f.converteHora24Para12("13:00"), "1:00 pm")
    test(f.converteHora24Para12("13:01"), "1:01 pm")
    test(f.converteHora24Para12("23:00"), "11:00 pm")
    test(f.converteHora24Para12("23:59"), "11:59 pm")

    console.log("Converte hora 12 para 24:")
    // 1- Use “00:00” para representar a meia-noite.
    test(f.converteHora12Para24("12:00 am"), "00:00")
    test(f.converteHora12Para24("12:01 am"), "00:01")
    test(f.converteHora12Para24("12:59 am"), "00:59")

    // 2- Apague o “am” das horas entre "1:00 am" e "11:59 am".
    // Acrescente um zero à esquerda se a hora for de um dígito apenas.
    test(f.converteHora12Para24("1:00 am"), "01:00")
    test(f.converteHora12Para24("1:01 am"), "01:01")
    test(f.converteHora12Para24("9:01 am"), "09:01")
    test(f.converteHora12Para24("11:00 am"), "11:00")
    test(f.converteHora12Para24("11:59 am"), "11:59")

    // 3- Deixe o horário do meio-dia igual e simplesmente remova o “pm”.
    test(f.converteHora12Para24("12:00 pm"), "12:00")
    test(f.converteHora12Para24("12:01 pm"), "12:01")
    test(f.converteHora12Para24("12:59 pm"), "12:59")

    // 4- Some 12 horas ao período entre "1:00 pm" e "11:59 pm" e apague o “pm”.
    test(f.converteHora12Para24("1:00 pm"), "13:00")
    test(f.converteHora12Para24("1:01 pm"), "13:01")
    test(f.converteHora12Para24("11:00 pm"), "23:00")
    test(f.converteHora12Para24("11:59 pm"), "23:59")

    console.log("Conta combustível:")
    test(f.contaCombustivel(1, "a", "c"), 3.16)
    test(f.contaCombustivel(10, "a", "c"), 31.59)
    test(f.contaCombustivel(1, "g", "c"), 3.74)
    test(f.contaCombustivel(10, "g", "c"), 37.39)
    test(f.contaCombustivel(1, "d", "c"), 3.09)
    test(f.contaCombustivel(10, "d", "c"), 30.9)
    test(f.contaCombustivel(1, "a", "d"), 2.84)
    test(f.contaCombustivel(10, "a", "d"), 28.43)
    test(f.contaCombustivel(1, "g", "d"), 3.37)
    test(f.contaCombustivel(10, "g", "d"), 33.65)
    test(f.contaCombustivel(1, "d", "d"), 2.78)
    test(f.contaCombustivel(10, "d", "d"), 27.81)
    test(f.contaCombustivel(10, "a", "v"), 28.43)
    test(f.contaCombustivel(10, "g", "v"), 33.65)
    test(f.contaCombustivel(10, "d", "v"), 27.81)

    console.log("Comprar frutas:")
    // Teste de zeros:
    test(f.comprar_frutas({}), 0)
    test(f.comprar_frutas({ morango: 0 }), 0)
    test(f.comprar_frutas({ uva: 0 }), 0)
    test(f.comprar_frutas({ morango: 0, uva: 0 }), 0)
    test(f.comprar_frutas({ uva: 0, morango: 0 }), 0)

    // Testes só com morango:
    test(f.comprar_frutas({ morango: 1, uva: 0 }), 2.5)
    test(f.comprar_frutas({ morango: 2, uva: 0 }), 5.0)
    test(f.comprar_frutas({ morango: 4, uva: 0 }), 10.0)
    test(f.comprar_frutas({ morango: 5, uva: 0 }), 12.5)
    // Testes só com morangos, muda a faixa:
    test(f.comprar_frutas({ morango: 6, uva: 0 }), 13.2)
    test(f.comprar_frutas({ morango: 5.1, uva: 0 }), 11.22)
    test(f.comprar_frutas({ morango: 8, uva: 0 }), 17.6)
    // Testes só com morangos, recebe desconto por peso:
    test(f.comprar_frutas({ morango: 9, uva: 0 }), 17.82)
    test(f.comprar_frutas({ morango: 10, uva: 0 }), 19.8)
    // Testes só com morangos, recebe desconto por preço:
    test(f.comprar_frutas({ morango: 20, uva: 0 }), 39.6)

    // Testes só com uva:
    test(f.comprar_frutas({ morango: 0, uva: 1 }), 1.8)
    test(f.comprar_frutas({ morango: 0, uva: 2 }), 3.6)
    test(f.comprar_frutas({ morango: 0, uva: 4 }), 7.2)
    test(f.comprar_frutas({ morango: 0, uva: 5 }), 9.0)
    // Testes só com uvas, muda a faixa:
    test(f.comprar_frutas({ morango: 0, uva: 6 }), 9.0)
    test(f.comprar_frutas({ morango: 0, uva: 5.1 }), 7.65)
    test(f.comprar_frutas({ morango: 0, uva: 8 }), 12.0)
    // Testes só com uvas, recebe desconto por peso:
    test(f.comprar_frutas({ morango: 0, uva: 9 }), 12.15)
    test(f.comprar_frutas({ morango: 0, uva: 10 }), 13.5)
    // Testes só com uvas, recebe desconto por preço:
    test(f.comprar_frutas({ morango: 0, uva: 20 }), 27.0)

    // Testes com as duas frutas:
    test(f.comprar_frutas({ morango: 2, uva: 2 }), 8.6)
    test(f.comprar_frutas({ morango: 4, uva: 4 }), 17.2)
    test(f.comprar_frutas({ morango: 5, uva: 5 }), 19.35)
    test(f.comprar_frutas({ morango: 10, uva: 10 }), 33.3)
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
