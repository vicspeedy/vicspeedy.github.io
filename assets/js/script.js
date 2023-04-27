$(document).ready(function(){
    // Tooltip
    $('[data-toggle="tooltip"]').tooltip(); 

    //Popover
    $('[data-toggle="popover"]').popover();


    $("a").click(function (event){
        if (this.hash !== ""){
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function(){
                window.location.hash = gato
            });
        }

    });


    $('body').scrollspy({target: '.scrollspy', offset: 70});

    $('.nav-link').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 70
        }, 50);
        return false;
    });


});


