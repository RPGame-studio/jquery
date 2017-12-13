console.log("Hello les amisss");
//alert("tesst");

//* Quand on clique sur icon-dehaze on pass
//**
// le nav en display block avec une animation
$(function() {
    $('body > header span').click(function() {
        $('nav').slideToggle();
    });
});