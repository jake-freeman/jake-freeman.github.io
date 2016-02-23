// Set clicked navbar items to active
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

$('#nav').affix({
    offset: {
        top: $('#nav').offset().top
    }
});
