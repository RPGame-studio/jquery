<?php
$dbh = new PDO('mysql:host=localhost;dbname=annuairedb','root', '');


 
try {
    $dbh = new PDO('mysql:host=localhost;dbname=annuairedb','root', '');
    }
    $dbh = null;
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}
 
?>