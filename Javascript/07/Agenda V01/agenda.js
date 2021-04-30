function escreverNaConsola() {
    // Selecionar os Elementos que queremos escrever

    var nomeGuardado = document.querySelector("#nome").value;
    var emailGuardado = document.querySelector("#email").value;
    var telemovelGuardado = document.querySelector("#telemovel").value;

    // Escrever na console

    console.log("Nome: " + nomeGuardado);
    console.log("Email: " + emailGuardado);
    console.log("Telemovel: " + telemovelGuardado);


    guardarNoArray(nomeGuardado, emailGuardado, telemovelGuardado);
}

document.querySelector("#addButton").addEventListener("click", escreverNaConsola);

var arrayDeDados = [];

function guardarNoArray(nome, email, telemovel) {
    arrayDeDados.push(nome, email, telemovel);
    console.log(arrayDeDados);
}