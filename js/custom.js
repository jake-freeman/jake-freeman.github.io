// sets proper offset for navbar
$('#nav').affix({
    offset: {
        top: $('#topnav').offset().top
    }
});

// animate scroll to anchors
$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 350);
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

// Y axis scroll speed
var velocity = 0.5;

function update(){
    var pos = $(window).scrollTop();
    $('#profile-container').each(function() {
        var $element = $(this);
        // subtract some from the height b/c of the padding
        //var height = $element.height()-18;
        $(this).css('backgroundPosition', '50% ' + Math.round(pos * velocity) + 'px');
    });
};

$(window).bind('scroll', update);
update();
