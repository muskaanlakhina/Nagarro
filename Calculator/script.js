$(document).ready(function(){
    $('button').on('click', function(e){
        let show = e.target.innerHTML;
        if(!$(this).hasClass('not')){
            if($('.input').text() === '0'){
                $('.input').empty();
                $('.input').text(show);
            }else{
                $('.input').text($('.input').text() + $(this).text());
            }
        }
    });

    $(".back").click(function(){
        var value = $(".input").text();
        if (value != 0 && value.length != 1)
            $(".input").text(value.slice(0, value.length - 1));
        else
            $('.input').text('0');
    })

});



$(".calc").click(function(){
    try{
        var value  = (eval(($(".input").text())));
    }
    catch(e){
        $('.input').text("error");
    }
    $('.input').text(value);
});

$(".all").click(function(){
    $('.input').text('0');
});