/**
 * 
 * 
 * LIGHTBOX SCRIPT V0.1
 *  activer la lightbox
 * Etape 1 : quans on clique sur une img on ouvre la lightbox
 * 
 * close la lightbox
 * 
 * Etape 1 : quand on clique sur .cadre .icon-close on ferme la lightbox
 * 
 * Remplacer img lightbox par img cliqué
 * Etape 1 : quand on clique sur une img de la galerie on récupère la valeur de son attribut src (variable)
 * Etape 2 : On remplace de valeur de lattribut src de .lightbox img par
 * la valeur de l'img cliquée dans la galerie (variable)
 * 
 * FLECHES IMG SUIVANT ET PREV
 * Etape 1 : compter le nombre d'image dans la galerie (variable)
 * Etape 2 : Récupérer index de l'img cliquée dans la galerie (variable)
 * Etape 3 : quand on clique sur btn pour img suivante, récupérer la valeur
 * de l'attribut src de l'img index+1
 * 
 */


$(function() {

    let newSrc;
    let nbImg;
    let indexImg;


    nbImg = $(".galerie img").length;

    console.log(nbImg);



    $('.galerie img').click(function() {

        newSrc = $(this).attr('src');

        indexImg = $('.galerie img').index($(this));

        console.log(indexImg);

        $('.ligthbox img').attr('src', newSrc);
        // chainage de function
        $(".ligthbox").fadeIn().css({ 'display': 'flex' });


    });

    $(".cadre .icon-close").click(function() {
        $(".ligthbox").fadeOut();
    });

    $(".cadre .icon-navigate_next").click(function() {

        console.log($(".galerie img").eq(indexImg + 1).attr('src'));

    });
});