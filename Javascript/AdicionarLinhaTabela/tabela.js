var addButton = document.querySelector("#addButton");
var table = document.querySelector("#tabela");


var nomeGuardado = document.querySelector("#nome");
var teleGuardado = document.querySelector("#telefone");
var emailGuardado = document.querySelector("#email");





function adicionarLinha() {


    if (verifica() == true) {
        var nome = nomeGuardado.value;
        var tele = teleGuardado.value;
        var email = emailGuardado.value;

        var newRow = table.insertRow();

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = nome;
        cell2.innerHTML = tele;
        cell3.innerHTML = email;
    }
}


function validaCampos() {
    if (document.getElementById("nome").value === "") {
        return false;
    } else {
        return true;
    }

}

function verifica() {

    if (document.getElementById("nome").value === "") {
        document.getElementById("addButton").disabled = true;
        return false;
    } else {
        document.getElementById("addButton").disabled = false;
        return true;
    }


}

addButton.addEventListener("click", adicionarLinha);
nomeGuardado.addEventListener("keyup", verifica);



























// addButton.addEventListener("click", () => {
//     var nome = nomeGuardado.value;
//     var tele = teleGuardado.value;
//     var email = emailGuardado.value;

//     var newRow = table.insertRow();

//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);
//     var cell3 = newRow.insertCell(2);

//     cell1.innerHTML = nome;
//     cell2.innerHTML = tele;
//     cell3.innerHTML = email;
// })