var app = {

    galeria: {
        init: function () {
            app.galeria.createThumbnails();
        },

        createThumbnails: function(){
            for(var i=0; i<5; i++){
                $thumbnail = $('<li><img src="https://picsum.photos/100/100?'+i+'" width="100" height="100" /></li>')
                $thumbnail.on('click',{fullimage:"https://picsum.photos/540/400?"+i}, app.galeria.itemClick);
                $('ul').append($thumbnail);
            }
        },


        itemClick: function(event){
            console.log(event.data.fullimage);
            $('.js-img-container img').attr('src',event.data.fullimage);

        }

    }

    
};



$(function () {
        app.galeria.init();
});