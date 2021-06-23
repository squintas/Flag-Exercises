$(function(){

    //exercicio1
    $('h1').css('text-transform','uppercase');
    
    //exercicio2
    $('li').height('50px');

    //exercicio3
    $('div.js-item').each(function(){
        $(this).css('background-color','#ccc');

        if($(this).is('#stop')){
            return false;
        }

    });

    //exercicio4
    console.log($(this));
   //  $('li').css('border','1px solid #ccc').text($(this).data('title')); 
    //method chaining retorna sempre o object jquery, mas não é possível transpo-lo para o interior da cadeia seguinte, nesse caso é necessário iterar.

   $('li').css('border','1 px solid #ccc').each(function(){
            $(this).text($(this).data('title'))
    });

});