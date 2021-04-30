//declarar uma função, faz com que o javascript passe a conhecer uma nova funcionalidade
function secarCabelo(){
   
}
//referir-me a uma função ao usar apenas o nome da função esse nome em runtime é substituido pela declaração
secarCabelo

//chamr ou executar a função
secarCabelo();


var execucaoDaFuncao = secarCabelo();

declaracaoDaFuncao = secarCabelo;
//igual
declaracaoDaFuncao = function(){

}

declaracaoDaFuncao;

declaracaoDaFuncao();


//função que recebe parametro de callback
function recievesCallbackFunction(callbackFunction){
    callbackFunction();

}

var i = recievesCallbackFunction;

i(secarCabelo);




i(function(){alert(9)});





