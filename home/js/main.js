jQuery(window).scroll(function(){

    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){

            $('a.active').removeClass('active');
            $('a[href*="#'+id+'"]').addClass('active');

        }
    });
});

$("#menu").on("click",'a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);

});
$(window).scroll(function() {
    if ($(this).scrollTop() > 450) {
        $(".navbar-fixed-top").css({
            'background-color':'#2b9b2b',
            'min-height':'35px',
            'opacity': '0.7',
        });
        $('.navbar_input-group').css({
            'margin-top':'0'
        })
    } else if($(this).scrollTop() < 450){
        $(".navbar-fixed-top").css({
            'background-color':'transparent',
            'opacity':'1',
        });
    }
});

$(".pause-slide").click(function(){
    $("#myCarousel2").carousel('pause');
});


$(document).on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(document).ready(function () {
    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'));
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });
})