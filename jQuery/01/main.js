// Exercicio 1 

$("h1").css("text-transform", "uppercase");

// Exercicio 2 
$("li").css("font-size", "50px");






// O loop vai correr cada posição do Div. Se tiver o ID "Stop" vai parar de adicionar o Background Red

$("div").each(function() {

    if ($(this).is("#stop")) {
        return false
    } else $(this).css("background-color", "red");

});



$("li").css("border", "1px solid blue");