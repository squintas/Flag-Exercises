var listaNomes = [];
// var listaDevedores = [];
// var listaFuncionarios = [];

function adicionarNomeGenerico(arrayDeNomes, novoNome) {

    arrayDeNomes[arrayDeNomes.length] = novoNome;

}

//
adicionarNomeGenerico(listaNomes, "Manuel");
var nome = prompt("Qual o nome a adicionar");
adicionarNomeGenerico(listaNomes, nome);


function verificarNome(arrayDeNomes, novoNome) {
    for (index = 0; index < arrayDeNomes.length; ++index) {
        if (arrayDeNomes[index] == novoNome) {
            alert("o nome existe");
        }

    }
}

function contarNome(arrayDeNomes, novoNome) {
    contador = 0;
    for (index = 0; index < arrayDeNomes.length; ++index) {
        if (arrayDeNomes[index] == novoNome) {
            ++contador;
        }

    }
    alert(contador);
}

adicionarNome();