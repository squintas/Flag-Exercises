
var valorRecolhidoDoUser = prompt("de me um valor para colocar no input");


if(valorRecolhidoDoUser == null){
    document.querySelector("#inputValue").value = "cancel";
}
else{
    document.querySelector("#inputValue").value = valorRecolhidoDoUser;
}

