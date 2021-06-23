/*let contactoManel = {nome:"Manuel","email":"sas@.mail.pt", "telefone":1213423434,
escreveContactoNaConsola: function(){console.log("o meu nome é"+this.nome)}};
*/
let contactoManel = {nome:"Manuel","email":"sas@.mail.pt", "telefone":1213423434,
escreveContactoNaConsola(){console.log("o meu nome é"+this.nome)}};



let contactoSofia = {nome:"Sofia","email":"sas@.mail.pt", "telefone":1213423434,
escreveContactoNaConsola: function(){console.log("o meu nome é"+this.nome)}};

let contactoElsa = {nome:"Elsa","email":"sas@.mail.pt", "telefone":1213423434,
escreveContactoNaConsola: function(){console.log("o meu nome é"+this.nome)},
oTeuNomeE: function(nome){if(nome == this.nome) return true; else return false;}};

contactoSofia.oTeuNomeE("xpto")