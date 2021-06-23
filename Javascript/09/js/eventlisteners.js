//por função
/*
function mostraNaConsola(){
    console.log(document.querySelector("#inText").value);
}

document.querySelector("#btAction").addEventListener("click",mostraNaConsola);
*/

//por função anonima

//document.querySelector("#btAction").addEventListener("click",function(){console.log(document.querySelector("#inText").value);});

//por arrowFunction
//document.querySelector("#btAction").addEventListener("click",()  => console.log(document.querySelector("#inText").value));//

/*
function letecla(ev){
    alert();

}

//document.querySelector("#btAction").addEventListener("click",function(event){console.log(event)});


function leValor(event){
    let valorDaInput = event.target.value;
    console.log(valorDaInput);
}

//document.querySelector("#inText").addEventListener("keyup",function(event){leValor(event)});
//document.querySelector("#inText").addEventListener("keyup",event=>leValor(event));



/*
let allInpus = document.querySelectorAll("input");
for(i =0 ; i < allInpus.length ; ++i){
    //allInpus[i].addEventListener("keyup",function(event){leValor(event)});
    allInpus[i].addEventListener("keyup",event=>leValor(event));
}
*/
/*
var promptreturn = function(){return prompt("diz-me coisas");}
console.log(promptreturn());
promptreturn = function(){ prompt("diz-me coisas");}
console.log(promptreturn());
*/

var promptreturn = ()=>{return prompt("diz-me coisas");}
console.log(promptreturn());
promptreturn = () => prompt("diz-me coisas"); //edeito igual ao da linha 50
console.log(promptreturn());
promptreturn = () =>{ prompt("diz-me coisas");}
console.log(promptreturn());
