/**
 * QUAND ON CLIQUE SUR BTN EDITER
 * Etape 1 : Passer les content editable a true pour la ligne
 * Etape 2 : get texts de la ligne
 * Etape 3 : avec ajax on envoi les texts a un script php
 */
'use strict';

$(function() {

    // start scope
    (function() {
        let contenus = new Array();
        $('.annuaire .icon-border_color').click(function() {
            // console.log('test');
            $(this).parent('p')
                .parent('div')
                .parent('.line')
                .find('[contenteditable]')
                .each(function(index, contenu) {
                    console.log(index, contenu)
                    console.log(contenu.textContent)
                    $(this).attr('contenteditable', 'true');
                    contenus.push(contenu.textContent);
                });


            console.log(contenus);
        });


    })();
    // end scope 
});