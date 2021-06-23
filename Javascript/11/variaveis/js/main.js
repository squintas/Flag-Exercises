
//variaveis de scope global
/*variavelNumero1 = 1;
var variavelNumero1 = 1;
let variavelNumero1 = 1;
*/
/*
function funcaoDummyVariblesExample(){
    variavel_global_com_numerop1 = 1;
    console.log("mostra variavel global " + variavel_global_com_numerop1);
    var variavel_ScopeFunc_numero1 = 1;
    console.log("mostra variavel scope funcao " + variavel_ScopeFunc_numero1);
    let variavel_codeScope_numero1 = 1;
    console.log("mostra variavel local  " + variavel_codeScope_numero1);
}

funcaoDummyVariblesExample();

console.log("mostra variavel global " + variavel_global_com_numerop1);

console.log("mostra variavel scope funcao " + variavel_ScopeFunc_numero1);

console.log("mostra variavel local  " + variavel_codeScope_numero1);
*/

function funcaoDummyVariblesExample(callbackFunction){
    for(let i = 0 ; i< 1;++i){
        var variavel_ScopeFunc_numero1 = 1;
        console.log("mostra variavel scope funcao " + variavel_ScopeFunc_numero1);
        let variavel_codeScope_numero1 = 1;
        console.log("mostra variavel local  " + variavel_codeScope_numero1);
        constante_numero_1(variavel_ScopeFunc_numero1)
        constante_numero_1(variavel_codeScope_numero1)
    }
    console.log("mostra variavel scope funcao " + variavel_ScopeFunc_numero1);
    console.log("mostra variavel local  " + variavel_codeScope_numero1);
}

funcaoDummyVariblesExample();

const constante_numero_1 = 1;



constante_numero_1


