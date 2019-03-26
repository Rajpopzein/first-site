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
});
