var app = {
    galeria: {
        width: 540,
        curSlide : 0,
        init: function () {
            app.galeria.createThumbnails();
            
            $('li:first-child').trigger('click');

            $('.js-next').on('click',app.galeria.gotoNextSlide);
            $('.js-prev').on('click',app.galeria.gotoPrevSlide);
        },

        createThumbnails: function(){
            var images = ["77","34","98","55","12"];
            for(var i=0; i<images.length; i++){
                var $thumbnail = $('<li data-index="'+i+'" data-url="https://picsum.photos/id/'+images[i]+'/540/400"  ><img src="https://picsum.photos/id/'+images[i]+'/100/100" width="100" height="100" /></li>');
                $thumbnail.on('click', app.galeria.itemClick);
                $('ul').append($thumbnail);

                var $fullimage = $('<img src="https://picsum.photos/id/'+images[i]+'/540/400" />');
                $('.js-img-container').append($fullimage);
            }
        },

        itemClick: function(event){
            app.galeria.curSlide = $(this).data('index');
            app.galeria.gotoCurSlide();
        },

        gotoNextSlide: function(event){
            if(app.galeria.curSlide == 4){
                app.galeria.curSlide = 0;
            }else{
                app.galeria.curSlide++;
            }
            app.galeria.gotoCurSlide();

        },

        gotoPrevSlide: function(event){
            if(app.galeria.curSlide == 0){
                app.galeria.curSlide = 4;
            }else{
                app.galeria.curSlide--;
            }
            console.log()
            app.galeria.gotoCurSlide();

        },

        gotoCurSlide: function(){
            var $curThumb =   $('li[data-index="'+app.galeria.curSlide+'"]');
            $('li img').each(function(){
                if($(this).hasClass('active')){
                    $(this).removeClass('active'); 
                }
                
            })
          //  $('li img').removeClass('active');
            $curThumb.find('img').addClass('active');
            $('.js-img-container').stop().animate({'left':-app.galeria.curSlide*app.galeria.width},300);
        }
    }
};



$(function () {
        app.galeria.init();
});