/*
function chamaAlert(){
    alert(9);
}

document.querySelector("#submitButton").addEventListener("click",chamaAlert);
*/



document.querySelector("#submitButton").addEventListener("click",function(){alert(9)});

/*
boa pratica indica que devo usar função anonima caso tenha a necessidade de chamar uma
função com parametros. Se for muita coisa que eu pretenda executar quando o evento disparar, devo
optar por criar uma função nova minha e aqui passar apenas o nome da função
*/