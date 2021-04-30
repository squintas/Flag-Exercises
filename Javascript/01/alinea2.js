var total = 0;
var maisNotas;
var numNotas = 0;
do{
    //1. pedir uma nota 
    var nota = Number(prompt ("qual a nota do teste"));
    total += nota; // total = total + nota
    ++numNotas;
    //2. perguntar se existem mais notas 
    maisNotas =  prompt("existem mais notas SIM / NAO ?")
    //3. se a resposta for sim voltar a 1
}while(maisNotas == "SIM")
//4. caso contrario apresentar a media
var media = total/numNotas;
//4. apresentar resultado
alert(media);
console.log(media);