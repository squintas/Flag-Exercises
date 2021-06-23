//let valorDoUser = prompt("de me um valor");

//criação de uma string por concatenação
//let stringHelho = "Olá sr utilizador o valor digitado foi " + valorDoUser +"sendo o valor que escolheu  o valor "+ valorDoUser;

// criação de uma string tirando partido de string template
/*let valorBooleano =  true;
let valornumerico = 2;
let stringHelho = `Olá sr utilizador o valor digitado foi ${valornumerico+1} 
sendo o valor que escolheu o valor ${!valorBooleano}`;
alert(stringHelho)
*/

//... é o operdaor Spread

function sum(op1,op2,op3,op4,op5,op6){
    return op1+op2+op3+op4+op5+op6;
}

let numeros = [1,2,3,4,5,6];
let total = sum(...numeros)

    console.log(total);

    let numeros2take = [0,...numeros,7]
    console.log(numeros2take)



//... é o operador rest
function EscreveElementosArray( ...parametroEntrada,teste){
    console.log(parametroEntrada);

}
/*
EscreveElementosArray(1);
EscreveElementosArray([12,2,34,5]);*/
EscreveElementosArray(12,2,34,5,"teste");


