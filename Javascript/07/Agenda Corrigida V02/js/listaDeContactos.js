var listaContactos = [];


function validarFields(nome, email, telefone) {

    if (email.length != 0 && nome.length != 0 && telefone.length != 0) {
        return true;

    } else {
        return false;
    }


}

function addContacts() {
    var emailBox = document.querySelector("input[type='email']")
    var nomeBox = document.querySelector("input[type='text']")
    var telefoneBox = document.querySelector("input[type='tel']")
    var emailValue = emailBox.value;
    var nomeValue = nomeBox.value;
    var telefoneValue = telefoneBox.value;

    if (emailValue.length == 0) {
        emailBox.classList.add("errorField");
    } else {
        emailBox.classList.remove("errorField");
    }
    if (nomeValue.length == 0) {
        nomeBox.classList.add("errorField");
    } else {
        nomeBox.classList.remove("errorField");
    }
    if (telefoneValue.length == 0) {
        telefoneBox.classList.add("errorField");
    } else {
        telefoneBox.classList.remove("errorField");
    }

    if (validarFields(emailValue, nomeValue, telefoneValue)) {
        var novoContacto = [nomeValue, emailValue, telefoneValue];
        listaContactos.push(novoContacto);
        console.log(listaContactos);
    } else {
        alert("todos os campos necessitam de estar preenchidos");
    }
}




function changeContact() {
    var nome = document.querySelector("input[type='text']").value;
    var email = document.querySelector("input[type='email']").value;
    var telefone = document.querySelector("input[type='tel']").value;

    if (validarFields(email, nome, telefone)) {
        for (i = 0; i < listaContactos.length; ++i) {
            var contacto = listaContactos[i];
            if (contacto[0] == nome) {
                contacto[1] = email;
                contacto[2] = telefone;
            }
        }
    } else {
        alert("todos os campos necessitam de estar preenchidos");
    }
}

var addButton = document.querySelector("#addButton");
addButton.addEventListener("click", addContacts);

var changeButton = document.querySelector("#changeButton");
changeButton.addEventListener("click", changeContact);