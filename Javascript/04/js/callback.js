/*
function escreveNomesComAlert(primeiroNomeEntrada,ultimoNomeEntrada){
    //...
    alert(primeiroNomeEntrada);
    alert(ultimoNomeEntrada);
}

function escreveNomesComConsole(primeiroNomeEntrada,ultimoNomeEntrada){
    //..
    console.log(primeiroNomeEntrada);
    console.log(ultimoNomeEntrada);
}
*/

function escreveAlert(p1,u1){
    alert(p1);
    alert(u1);
}


function escreveConsola(p1,u1){
    console.log(p1);
    console.log(u1);
}
/*
function escrevNomesDependendoDaStringPassada(primeiroNomeEntrada,ultimoNomeEntrada,modoDeEscrita){
    //...
    if(modoDeEscrita == "alert"){
        escreveAlert(primeiroNomeEntrada,ultimoNomeEntrada);

    }
    if(modoDeEscrita == "consola"){
        escreveConsola(primeiroNomeEntrada,ultimoNomeEntrada);
    }

}
*/
/*
function escreveNomesComChamadaDeFuncao(primeiroNomeEntrada,ultimoNomeEntrada,funcaoEscrita){
    //...
    funcaoEscrita(primeiroNomeEntrada,ultimoNomeEntrada); 
 }*/



 function escreveNomesComChamadaDeFuncaoAlert(primeiroNomeEntrada,ultimoNomeEntrada,callbackFunction){
    //...
    callbackFunction(primeiroNomeEntrada);
    callbackFunction(ultimoNomeEntrada);
 }

//escrevNomesDependendoDaStringPassada("a","m","alert");
//escreveNomesComChamadaDeFuncao("a","m",escreveAlert);
//escrevNomesDependendoDaStringPassada("S","m","consola");
//escreveNomesComChamadaDeFuncao("a","m",escreveConsola);

escreveNomesComChamadaDeFuncaoAlert("jsdhdjsh","jdkfj",alert);


