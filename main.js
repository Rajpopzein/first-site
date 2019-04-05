$(document).ready(function(){
    $(".han").click(function(){
        $(".nav-item").toggleClass("active");
        $(".han").toggleClass("tog");
        $(".navbar-sec").toggleClass("back");
        $(".nav-item a").toggleClass("color");
    });

    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('.navbar-sec').addClass('black');
        }
        else{
            $('.navbar-sec').removeClass('black');
        }
    });


    $('.category').click(function(){
        var category = $(this).attr('id');
         if(category == 'all'){
            $('.itemimage,.product-grid ul li').addClass('hide');
            setTimeout(function(){
                $('.itemimage,.product-grid ul li').removeClass('hide');
            }, 300);
         }else{
            $('.itemimage').addClass('hide');
            setTimeout(function(){
                $('.' + category,).removeClass('hide');
            }, 300);
         }

    });


});
