//1. obter o numero de notas 

var numNotas = prompt("De me o numero de notas");

//2. pedir a nota do teste 

//o numero de vezes que o utilizador indicou em 1
var contador = 0;
var total = 0;
while ( contador < numNotas){
    var nota = prompt("A nota do teste");
    ++contador;//contador = contador +1

    //3.1 calcular a soma de todas as notas
    total += Number(nota); // total = total + nota
   
}


//3. Fazer a Media

//3.2 Dividir po ro numero de notas
var media = total/numNotas;
//4. apresentar resultado
alert(media);

