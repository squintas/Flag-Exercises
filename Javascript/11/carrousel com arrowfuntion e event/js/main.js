function action(event){
    let slideActive = document.querySelector('.active');
    slideActive.classList.remove("active");
    let futureActiveSlide = null;
    if(event.target.id == "prevButton"){
        //carregaram no botão de andar para trás
         futureActiveSlide = slideActive.previousElementSibling;
        if(futureActiveSlide == null){
            futureActiveSlide = slideActive.parentElement.lastElementChild;
        }
       

    }
    else if(event.target.id == "nextButton"){
        //carregaram no botão de andar para a frente
         futureActiveSlide = slideActive.nextElementSibling;
        if(futureActiveSlide == null){
            futureActiveSlide = slideActive.parentElement.firstElementChild;
        }
       
    }
    futureActiveSlide.classList.add("active");

}

document.querySelector("#prevButton").addEventListener("click",event => action(event));
document.querySelector("#nextButton").addEventListener("click",event => action(event));
