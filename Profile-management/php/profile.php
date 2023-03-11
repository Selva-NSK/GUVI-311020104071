<?php
require '..\vendor\autoload.php'; 
use MongoDB\Operation\FindOne;
    try{
        $mongo = new MongoDB\Client("mongodb://localhost:27017");
        $db=$mongo->database->info;
        $query = array('email' => $_GET['email']);
        $ans=$db->FindOne($query);
        $values= array('email'=>$ans->email,'fname'=>$ans->fname,
                      'lname'=>$ans->lname,'phone'=>$ans->phone,'gender'=>$ans->gender);
        echo json_encode($values) ;
    }
    catch(Throwable $e){
        // http_response_code(400);
        echo $e;
    }
?>
