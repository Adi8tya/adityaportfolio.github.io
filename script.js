 var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
});

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    $('.portfolio .button-container .btn').click(function(){

        let filter = $(this).attr('data-filter');

        if(filter == 'all'){
            $('.portfolio .image-container .box').show('400');
        }else{
            $('.portfolio .image-container .box').not('.'+filter).hide('200');
            $('.portfolio .image-container .box').filter('.'+filter).show('400');
        }

    });

    $('#theme-toggler').click(function(){
        $(this).toggleClass('fa-sun');
        $('body').toggleClass('dark-theme');
    });
    



    // $('a[href*="#"]').on('click',function(e){

    //     e.preventDefault();

    //     $('html,body').animate({
    //         scrollTop : $($(this).attr('href')).offset().top,
    //     },
    //     500,
    //     'linear'
    //     );
    // });
});
