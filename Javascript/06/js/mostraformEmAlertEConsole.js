function escreveEmAlertEConsole(){
    
    //obter os valores a escrever
    var inputNomeValor = document.querySelectorAll("input")[0].value;
    var inputPhoneValor = document.querySelectorAll("input")[1].value;
    //escrever para o alert
    var msg = "nome: " + inputNomeValor + " telefone: "+ inputPhoneValor;
    alert(msg);
    //escrever para a consola
    console.log(msg);
}

document.querySelector("#submitButton").addEventListener("click",escreveEmAlertEConsole);