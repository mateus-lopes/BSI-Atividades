// ------------------------------------- //
// (CRIADA DO ZERO CM BASE NA DE PYTHON) //
// ------------------------------------- //

// Lista de exercícios 1 - variáveis e operadores 


// Área de testes: só mexa aqui se souber o que está fazendo!

var hits = 0
var total = 0
var prefix = ''
var test = ''

function Test(obtained, estimated) {
    total++
    if(obtained !== estimated){
        prefix = 'Falhou'
    }else{
        prefix = 'Passou'
        hits++
    }
    test = prefix+'Esperado: '+'\tObtido: '+obtained
    document.write('<br>'+test)
}


Test(2,2)
Test(1,2)
Test(34,5)