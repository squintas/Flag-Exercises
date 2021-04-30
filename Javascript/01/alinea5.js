var arraynumeros  = [];

var numero = prompt("qual o numero");
arraynumeros[0] = numero;
numero = prompt("qual o numero");
arraynumeros[1] = numero;

var total = 0;

for(i = 0; i< arraynumeros.length ; ++i){
    total += arraynumeros[i];

}

var media = total / 2;