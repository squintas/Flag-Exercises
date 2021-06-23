// Criar 4 elementos dinamicamente dentro do div #varias-imagens

$("#varias-imagens").append(function() {


    for (let i = 0; i < 4; i++) {

        var novaImagem = $(this).append(
            '<img src="https://picsum.photos/100/100" alt="">'
        )
    }



    // Trocar a imagem selecionada pela principal

    // novaImagem.click(function() {
    //     $("main-image").replaceAll(novaImagem)
    // })

});