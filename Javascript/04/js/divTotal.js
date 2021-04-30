function divisaoTotal1(div1Entrada,div2Entrada){
    var resultadoDiv = div1Entrada / div2Entrada;
    var resto = div1Entrada % div2Entrada;
    escreverCAlert(resultadoDiv,resto);

}

function divisaoTotal2(div1Entrada,div2Entrada){
    var resultadoDiv = div1Entrada / div2Entrada;
    var resto = div1Entrada % div2Entrada;
    escreverCConsole(resultadoDiv,resto);

}

function divisaoTotal(div1Entrada,div2Entrada,callbackFunction){
    var resultadoDiv = div1Entrada / div2Entrada;
    var resto = div1Entrada % div2Entrada;
    callbackFunction(resultadoDiv,resto);

}

divisaoTotal(3,2,escreverCAlert);
divisaoTotal(3,2,escreverCConsole);


function escreverCAlert(resultadoDiv,restoDiv){
    alert(resultadoDiv);
    alert(restoDiv);

}
function escreverCConsole(resultadoDiv,restoDiv){
    console.log(resultadoDiv);
    console.log(restoDiv);

}

divisaoTotal(3,2);


