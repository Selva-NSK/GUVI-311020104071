<?php
require '..\vendor\autoload.php'; 
use MongoDB\Operation\InsertOne;
$server="localhost";
$user="root";
$password="root@123";
$db="profile_management";
$con= mysqli_connect("$server","$user","$password","$db");
$statement = $con->prepare("select * from login where uname =?");
$statement->bind_param("s",$_POST['email']);
$statement->execute();
$res=$statement->get_result();
if ($row = $res->fetch_assoc()) {
    echo ('exist');
    exit;
}
$statement = $con->prepare("insert into login values(?,?)");
$statement->bind_param("ss",$_POST['email'],$_POST['password']);
if($statement->execute()){
    try{
        $mongo = new MongoDB\Client("mongodb://localhost:27017");
        $db=$mongo->database->info;
        $db->insertOne(['email'=>$_POST['email'],'fname'=>$_POST['fname'],'lname'=>$_POST['lname'],
                      'phone'=>$_POST['phone'],'gender'=>$_POST['gender']]);
        echo "success";
    }
    catch(Throwable $e){
        echo 'mongodb';
    }
}
else{
    echo "mysql";
}
?>
