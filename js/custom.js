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

// fill circle spans
var spans = $(".score");
var span, innerHTML;
spans.each(function(i, obj) {
  span = $(this);
  innerHTML = "";
  for (var j = 0; j < 5; j++) {
    innerHTML += "\n<span class=\"full-circle";
    if (j < parseInt(span.data("value")))
      innerHTML += " full";
    innerHTML += "\"></span>"
  }
  span.append(innerHTML);
});
