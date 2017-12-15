/**
 * MASQUER ICON CHECK AU CHARGEMENT DE LA PAGE
 * ETAPE 1 : Masquer les icon-check avechide()
 * 
 * 
 * RECUPER VAL DE DATA-DEFAULT POUR LAFFICHER DANS CHAQUE CHAMPS
 * Etap 1 : pour chaque champs de saisie
 * - récupérer (variable de val de l'attr data-default)
 * - affcter au champ la valeur de l'attr data-default
 * 
 * VIDER UN CHAMPS DE SAISIE AU FOCUS SI PAS REMPLI
 * Etape 1 : au focus si user n'a pas deja saisie son nom
 * - on vide le champs
 * - sinon on laisse ce que l'user a saisi
 * 
 * remettre par defaut dans un champ si non rempli
 * etape 1 : au blur, si un champs non rempli par user
 * - on remet la valeur par defaut
 * - afficher le span .validation
 * - remplacer .icon-check par .icon-close
 
 QUAND LE FORMULAIRE EST ENVOYE
 Etape 1 : si un seul champ n'est pas rempli
 - on annule l'envoi du formulaire
 - on affiche .icon-close dans les champs non remplis
 Etape 2 : envoi des datas du formulaire avec ajax vers script php

    FACTORISER LE CODE
    Etape 1 : créer une fonction pour le changement des icons
    et l'appeler dans notre code à chaque fois que nécessaire
    
 */

'use strict';

$(function() {

    // start scope
    (function() {

        let dataDefault, listInput;
        listInput = $('.formulaire [data-default]');
        //Change icon
        changeIcons = function(elem, icon1, icon2) {
            $(elem).siblings(".validation").removeClass(icon1)
                .addClass(icon2)
                .show();

        }
        $(".formulaire .validation").hide();
        listInput.each(function() {
            dataDefault = $(this).attr('data-default');
            $(this).val(dataDefault)
        });


        listInput.focus(function() {

            if ($(this).val() == $(this).attr('data-default')) {
                $(this).val("");
            }
        });


        listInput.blur(function() {
            if ($(this).val() == "") {
                $(this).val($(this).attr('data-default'));
                if ($(this).prop('required')) {
                    changeIcons($(this), 'icon-check', 'icon-close');

                    // $(this).siblings(".validation").show("slow").removeClass("icon-check").addClass('icon-close');
                }
            } else {
                changeIcons($(this), 'icon-close', 'icon-check');
                // $(this).siblings(".validation").show("slow").removeClass("icon-close").addClass('icon-check');
            }
        });

        $('.formulaire').submit(function() {
            let valid = true;
            $('[required]').each(function() {
                if ($(this).val() == $(this).attr('data-default')) {

                    changeIcons($(this), 'icon-check', 'icon-close');
                    // $(this).siblings(".validation").show("slow").removeClass("icon-check").addClass('icon-close');
                    valid = false;
                }
            });


            if (valid) {

                $.ajax({

                    //3 Proprietes methos post, 
                    method: 'POST',
                    url: 'envoi-form.php',
                    data: $('.formulaire').serialize()

                }).done(function(msg) {

                    alert("Reponse : " + msg);
                });
            }
            return false;
        });


    })();
    // end scope 
});