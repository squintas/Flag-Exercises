//1. Pedir um numero ao utilizador
var numero = prompt("Qual o número a testar?");
//2. verificar se é par ou impar
//como é que eu se se um numero é par ou impar?
//Um numero é par se for divisivel por 2 com resto 0
var resultadoDoRestoDaDivisao = numero%2;

//3. entregar resultado ao utilizador
/*if(resultadoDoRestoDaDivisao === 0){
    alert("numero Par")
    
}
else{
    alert("numero Impar");

}
*/
resultadoDoRestoDaDivisao === 0 ? alert("numero Par"):alert("numero impar");