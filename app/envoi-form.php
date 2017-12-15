<?php
//  var_dump($_POST);
  //double cote pour eviter concatenation des post ou variable
//   mais la ca marche pas donc on concatene
  $message ="
  <p>Prénom :".$_POST['prenom']."</p>
  <p>Mom : ".$_POST['nom']."</p>
  <p>Email : ".$_POST['tel']."</p>
  <p>Tel : ".$_POST['email']."</p>
  <p>Message : ".$_POST['message']."</p>
  ";

  $dest = "remi.pene@gmail.com";
  $subject = "nouveau mail de ".$_POST['nom'];

 $send =  mail($dest , $subject, $message);

 if($send){
     echo 'Votre message a bien été envoyé';

 }
 else {
     echo 'Erreur technique ! Ecris une lettre !';
 }

?>