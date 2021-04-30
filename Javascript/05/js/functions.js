
//Função que devolve um array com N posições
//correspondendo cada posição a um nome que foi obtido através de prompt
function recolheNNomes(N){
    var arrayDeNomes = [];
    for(i = 0 ; i < N ; ++i){
        var novoNome = prompt("De-me um nome");
        arrayDeNomes.push(novoNome);
    }
    return arrayDeNomes;
}

//Apresenta os nomes que estão num array
//na consola
function ApresentaNomes(variavelArrayDeNomes){
    for(i=0; i< variavelArrayDeNomes.length; ++i){
        console.log(variavelArrayDeNomes[i]);
    }

}



function ApresentaNomesArrayMultiplo(variavelArrayDeArraysDeNomes){
    for(j=0; j< variavelArrayDeNomes.length; ++j){
        for(i=0; i< variavelArrayDeNomes[j].length; ++i){
            console.log(variavelArrayDeNomes[j][i]);
        }
    }


}