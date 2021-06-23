//definição do tipo contacto ou blueprint
class Contacto{
    //constructor
    constructor(nome="",email="",telefone=""){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    //metodos
    escreveContacto () {
        console.log("escrita do contacto: " + this.nome);
    }
    


}

class ContactoSmartPhone extends Contacto {
    constructor(nome="",email="",telefone=""){
        super(nome,email,telefone);
        this.nome="Eurico";
    }
    telefonar(){
        console.log("estou a telefonar directo");
        
    }
}


let contactoSmartJo = new ContactoSmartPhone();

//a criação de um novo contacto
let contactoManel = new Contacto("Manuel","man@hgdhgs.pt",12234242);
let contactoElsa = new Contacto("Elsa","wewe@hgdhgs.pt",213244);
let contactoJacinto = new Contacto();