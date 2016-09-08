jQuery(window).scroll(function(){

    var $sections = $('section');
    $sections.each(function(i,el){
        var navHeight = $('.navbar-js').height();
        var top  = $(el).offset().top-navHeight;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){

            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');
        }
    })
});

$("#menu").on("click",'a', function (event) {
    var navHeight = $('.navbar-js').height();
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top-navHeight;
    $('body,html').animate({scrollTop: top}, 1500);

});
$(window).scroll(function() {
    if ($(this).scrollTop() > 450) {
        $(".navbar-fixed-top").css({
            'background-color':'#2b9b2b',
            'min-height':'35px',
            'opacity': '0.7'
        });
    } else if($(this).scrollTop() < 450){
        $(".navbar-fixed-top").css({
            'background-color':'transparent',
            'opacity':'1'
        });
    }
});

$(".pause-slide").click(function(){
    $("#myCarousel2").carousel('pause');
});


$(document).on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

