// Set clicked navbar items to active
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

// sets proper offset for navbar
$('#nav').affix({
    offset: {
        top: $('#topnav').offset().top
    }
});
