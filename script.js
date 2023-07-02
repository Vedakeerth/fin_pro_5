$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".nav-links").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".nav-links").removeClass("active");
        }
    });
});

// -------------------------------------------------------//
    var navLinks = document.getElementById("navLinks");

    function showMenu(){
        navLinks.style.right = "0";
    }
    function hideMenu(){
        navLinks.style.right="-200px";
    }



