$(document).ready(function(){
    $("#title_prv").click(function(){
        $(".image").addClass("animated_slideLeft");
    });


    $('.title_prv').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
         $(this).removeClass("animated_slideLeft");
    });
});

$(document).ready(function(){
    $("#title_nxt").click(function(){
        $(".image").addClass("animated_slideRight");
    });


    $('.title_prv').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
         $(this).removeClass("animated_slideRight");
    });
});