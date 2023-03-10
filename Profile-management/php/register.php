<?php
$server="localhost";
$user="root";
$password="root@123";
$db="profile_management";
$con= mysqli_connect("$server","$user","$password","$db");
$statement = $con->prepare("insert into login values(?,?)");
$statement->bind_param("ss",$_POST['email'],$_POST['password']);
if($statement->execute()){
    echo "success";
}
else{
    echo "Something Wrong";
}
?>
