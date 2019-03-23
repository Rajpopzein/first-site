$(document).ready(function(){
    $(".han").click(function(){
        $(".nav-item").toggleClass("active");
        $(".han").toggleClass("tog");
        $(".navbar-sec").toggleClass("back");
        $(".nav-item a").toggleClass("color");
    });
});