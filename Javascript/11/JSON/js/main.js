let galeria_imagens = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    }
]

function loadPhotos(){
    let divGaleria = document.querySelector("#galeria_photos");
   /* for(let i = 0 ; i< galeria_imagens.length ; ++i){
        divGaleria.innerHTML = divGaleria.innerHTML + "<img src=" + galeria_imagens[i].url +"> <p>"+ galeria_imagens[i].title + "</p>";
    }
    */
    galeria_imagens.forEach( element => divGaleria.innerHTML = divGaleria.innerHTML + "<img src=" + element.url +"> <p>"+ element.title + "</p>");
}

document.querySelector("#loadPhotosBtn").addEventListener("click",()=> loadPhotos());