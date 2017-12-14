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
 * de l'attribut src de l'img index++
 * Etape 4 : si l'index de l'img suivante est < nb d'image dans la galerie on incrémente l'index (variable indexImg), sinon on retourne sur 
 * l'index 0 (variable indexImg =0)
 * 
 * Etape 5 : remplacer la valeur de l'attribut src de .lightbox img par la valeur de l'attribut src de l'img suivante dans la galerie (newSrc)
 * 
 * FLECHE IMG PRECEDENTE
 * Idem bouton next mais en decrémentant index img
 * 
 * FONCTION POUR FACTORISER LE CHANGEMENT D'IMG DANS LA LIGHTBOX
 * Etape  1 : Créer une fonction qui remplacer l'img dans la lightbox et l'appeler autant de fois que nécessaire
 * 
 * GENRER LES PUCES EN FONCTION DU NOMBRE D'IMAGES
 * Etape 1 : declarer une variable qui contiendra un ensemble ul li * 
 * Etape 2 : Créer une fonction pour creer l'ensemble ul li
 * Etape 3 : Créer le bloc ul
 * Etape 4 : Créer autant de li qu'il y a d'image dans la galerie
 * Etape 5 : ajouter l'ensemble ul li dans le DOM sour la lightbox
 * 
 * ACTIVER LA PUCE QUI CORRESPOND A LIMGAE CLIQUEE
 * 
 * Etape 1 : créer fonction qui active une puce
 *  supprime class puce-active sur tout les li 
 * ajouter clace puce-active sur le li qui a le meme index que indexImg
 * 
 * Etape 2 : Appeler la function quand on clique sur une img de la galerie
 * appeler la function quand on clique sur les boutons next et before
 * 
 * CHANGER IMAGE QUAND ON CLIQUE SUR UNE PUCE
 * Etape 1 : récupérer index de puce cliquée et l'affecter à indexImg
 * Etape 2  : appeler changeImg() et activePuce()
 * 
 * AFFICHER LES LEGENDE DYNAMIQUEMENT DANS LA LIGHTBOX
 * Etape 1 : Récuperr valeur de l'attr data-legend
 * Etape 2 : Insere le contenu textuel dans .lightbox figcaption
 */

'use strict';

$(function() {

    // Variable
    let nbImg, indexImg, newSrc, listPuces;

    nbImg = $(".galerie img").length;

    console.log(nbImg);
    //function Generate puce

    genreratePuces = () => {
        listPuces = '<ul class="list-puces">';
        for (let i = 0; i < nbImg; i++) {
            listPuces += '<li></li>';
        }
        listPuces += '</ul>';
        $(".ligthbox .cadre").append(listPuces);

        return listPuces;
    }

    genreratePuces();

    changeLegend = () => {

        let legendTxt;
        legendTxt = $(".galerie img").eq(indexImg).attr("data-legend");
        $(".ligthbox  figcaption").text(legendTxt);
        console.log(legendTxt);

    }
    activePuce = () => {

            let liste = $('.ligthbox ul li');
            liste.removeClass("puce-active");
            liste.eq(indexImg).addClass("puce-active");
            console.log("Test");
        }
        // console.log(listPuces);


    // Function
    changeImg = function() {


        newSrc = $(".galerie img").eq(indexImg).attr('src');
        $(".ligthbox img").attr('src', newSrc);
        console.log('index : ' + indexImg);
        console.log('Prochaine img : ' + newSrc);




    }

    // Click sur image

    $('.galerie img').click(function() {

        indexImg = $('.galerie img').index($(this));
        console.log(indexImg);
        // chainage de function
        $(".ligthbox").fadeIn().css({ 'display': 'flex' });
        changeImg();
        changeLegend();
        activePuce();

    });

    // Close

    $(".cadre .icon-close").click(function() {
        $(".ligthbox").fadeOut();
    });




    // Clique sur next
    $(".cadre .icon-navigate_next").click(function() {
        // if (indexImg < nbImg - 1) {
        //     indexImg++;

        // } else {
        //     indexImg = 0;
        // }

        indexImg = (indexImg + 1) % nbImg;

        // console.log($(".galerie img").eq(indexImg + 1).attr('src'));
        // console.log($(".galerie img").eq(0).attr('src'));
        changeLegend();
        changeImg();
        activePuce();
        // newSrc = $(".galerie img").eq(indexImg).attr('src');
        // $(".ligthbox img").attr('src', newSrc);

    });

    // Click sur previous
    $(".cadre .icon-navigate_before").click(function() {

        // modulo utlisable sur paire impaire (autre chose)

        //  indexImg = (indexImg - 1) % nbImg; Le navigateur compren que en de dessous de 0 il y a le reste du tableau
        indexImg = ((indexImg - 1) + nbImg) % nbImg;
        // console.log($(".galerie img").eq(indexImg + 1).attr('src'));
        // console.log($(".galerie img").eq(0).attr('src'));
        changeImg();
        changeLegend();
        activePuce();

    });

    $(".ligthbox li").click(function() {

        indexImg = $('.ligthbox li').index($(this));

        changeImg();
        changeLegend();
        activePuce();
        console.log("puce cliquée");

    });

});