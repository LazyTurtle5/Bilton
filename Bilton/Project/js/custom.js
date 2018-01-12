
//Animation for heading text
$('.clubName')
    .blast({delimiter: "character"})
    .css("opacity", 0)
    .velocity("transition.fadeIn", {stagger: 50});

