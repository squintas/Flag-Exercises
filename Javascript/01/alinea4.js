function verificaseeprimo(numero){
   
    //2.verificar se é primo
    //O que é um numero primo?
    //é um numero que so dá resto 0 quando dividio por ele propio ou por 1

    var contador = 0;
    var numeroDeVezesQueOResto0 = 0;
    var resultado;
    //for(i = 0 ; i<= numero ; ++i)
    while(contador <= numero){
        resultado =  numero%contador;
        if(resultado == 0){
            ++numeroDeVezesQueOResto0;

        }
        ++contador;
    }
    //3.apresentar se é primo ou não
    if(numeroDeVezesQueOResto0 == 2){
        alert("numero primo");
    }
    else{
        alert("numero não é primo");
    }
}


verificaseeprimo(2);

 //1.recolher numero do utilizador
 var numerorecolhido = prompt ("Numero a verificar");
 verificaseeprimo(numerorecolhido);