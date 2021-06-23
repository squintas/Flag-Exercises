
/*



function expandeResposta(perguntaClicada){
    
    
    let resposta = perguntaClicada.nextElementSibling;
    if(resposta.classList.contains("displayAnswer")){
        resposta.classList.remove("displayAnswer");
    }
    else{
        resposta.classList.add("displayAnswer");
    }
    
    
}

function expandeResposta2(perguntaClicada){
    

    let resposta = perguntaClicada.nextElementSibling;

    let respostaVisivel = document.querySelector(".displayAnswer");
    
    if(respostaVisivel != null){
        respostaVisivel.classList.remove("displayAnswer");    
    }
    if(respostaVisivel != resposta){
        resposta.classList.add("displayAnswer");
    }
    
    
    
    
}
/*
var todasAsPerguntas = document.querySelectorAll("#ac1 section");

for(let i = 0 ; i < todasAsPerguntas.length; ++i){
    
    //todasAsPerguntas[i].addEventListener("click",function(){expandeResposta(i)});
    todasAsPerguntas[i].addEventListener("click",(event)=>expandeResposta(event.target));


}
*/
/*
function AdicionaEventoaElementoHTML(element){
    element.addEventListener("click",(event)=>expandeResposta(event.target))
}
var todasAsPerguntas = document.querySelectorAll("#ac1 section");
todasAsPerguntas.forEach(element =>AdicionaEventoaElementoHTML(element) );
//document.querySelectorAll("#ac1 section").foreach(element => element.addEventListener("click",(event)=>expandeResposta(event.target)));



/*
todasAsPerguntas.forEach( element => console.log(element)  );

for(let i =0 ; i < todasAsPerguntas.length; ++i){
        let element = todasAsPerguntas[i];
        console.log(element);
}
*/


// imagine qu etem um array de numeros 
// pretende-se obter um segundo array em que em cada uma das suas posições
//tem o valor do dobro da posição do array original
//exemplo conasiderando o array1 = [1,2,3,4] o arraydobro = [2,4,6,8]
arrayNumeros = [1,2,3,4];
arraydobro = [];
/*for(let i = 0 ; i < arrayNumeros.length; ++i){
    arraydobro.push(arrayNumeros[i]*2);

}
*/
//arrayNumeros.forEach(element => arraydobro.push(element*2));

//arraydobro = arrayNumeros.map( element => element *2);

arraydobro = arrayNumeros.map( element =>  element *2);


console.log(arrayNumeros);
console.log(arraydobro);


