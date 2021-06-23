var todasAsPerguntas = document.querySelectorAll("#ac1 section");


function expandeResposta(clickedSectionIndex) {

    let perguntaClicada = todasAsPerguntas[clickedSectionIndex];
    let resposta = perguntaClicada.lastElementChild;
    if (resposta.classList.contains("displayAnswer")) {
        resposta.classList.remove("displayAnswer");
    } else {
        resposta.classList.add("displayAnswer");
    }


}

for (let i = 0; i < todasAsPerguntas.length; ++i) {

    todasAsPerguntas[i].addEventListener("click", function() { expandeResposta(i) });

}


// Dar call a esta função para abrir apenas uma caixa de texto de cada vez
function expandeResposta2(clickedSectionIndex) {

    let perguntaClicada = todasAsPerguntas[clickedSectionIndex];
    let resposta = perguntaClicada.lastElementChild;

    let respostaVisivel = document.querySelector(".displayAnswer");

    if (respostaVisivel != null) {
        respostaVisivel.classList.remove("displayAnswer");
    }
    if (respostaVisivel != resposta) {
        resposta.classList.add("displayAnswer");
    }




}