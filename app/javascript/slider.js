/**
 * Etape 1 :  Positionner ul en left -(largue du slider)
 * avec une animation
 * 
 * Etape 2 : une fois l'animation terminé passer le premier li après le dernier li
 * 
 * Etape 3 : reposition le ul en left 0
 * 
 * Etape 4 : appeler notre fonction toutes les 3 secondes
 * 
 * FUNCTION SLIDEPREV
 * Etape 1 : positionner ul en left - (largeur du slider)
 * Etape 2 : simultanément , passer le dernier li devant le premier li
 * Etape 3  : repositionne le ul en left  0 avec une animation

 click sur BTN BEFORE
 ETAP 1 : clearInterval pour stopper défilement
 Etape 2 : appeler function slidePrev juste une fois 

 Click sur BTN NEXT
ETAP 1 : clearInterval pour stopper défilement
 Etape 2 : appeler function slideNext juste une fois 


 EMPECHER LE SLIDE TANT QUE L'ANIMATION n EST PAS TERMINEE
 Etape 1 declarer boolean a true au chargement de la page
 Etape 2 quand on clique sur un bouton on passe le boolean à false
 Etape 3 accepter le click si boolean a true
 Etape 4 à la fin de l'animation repasser le boolean à true

 PASSER EN RESPONSIVE
 Etape 1 : w100% pour .slider dans le scss
 Etape 2 : Récupérer avec jquery le width de .slider
 Etape 3 : avec jquery affecter au li le width de .slider (variable)
 Etape 4 : modifier les fonctions slideNext et slidePrec pour que le ul se positionne en - width du .slider (variable)
 Etape 5 : recalculer le width du slider et ajuster le width des li
 au resize de window
 
 */


$(function() {

    let acceptDefil = true;
    let widthSlider = $('.slider').width();

    $('.slider li').width(widthSlider);

    $(window).resize(function() {

        widthSlider = $('.slider').width();
        $('.slider li').width(widthSlider);
    })

    function sliderNext() {
        $(".slider ul").animate({ 'left': -widthSlider }, 1000, function() {
            $('.slider li:last').after($('.slider li:first'));
            $(this).css({ 'left': 0 });
            acceptDefil = true;


            // alert("Mon anim termine")
        });

    }


    let intervalID = setInterval(sliderNext, 3000);


    function sliderPrev() {
        $('.slider ul').css({ 'left': -widthSlider });
        $('.slider li:first').before($('.slider li:last'));
        $(".slider ul").animate({ 'left': 0 }, 1000, function() {

            acceptDefil = true;
        });

    }


    $('.slider .icon-navigate_before').click(function() {
        if (acceptDefil) {
            acceptDefil = false;
            clearInterval(intervalID);
            sliderPrev();
        }
    })


    $('.slider .icon-navigate_next').click(function() {
        if (acceptDefil) {
            acceptDefil = false;
            clearInterval(intervalID);
            sliderNext();
        }
    })



    // clearInterval(intervalID);
});