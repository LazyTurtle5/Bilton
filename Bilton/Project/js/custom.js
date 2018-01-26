
//Animation for heading text

$(document).ready(function() {
    if($(window).width() >= 375) {
        $('.clubName')
    		.blast({delimiter: "character"})
    		.css("opacity", 0)
    		.velocity("transition.fadeIn", {stagger: 100});
    }
});