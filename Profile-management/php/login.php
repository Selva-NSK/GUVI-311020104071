<?php
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
    if (($_POST['password']!= $row['password'])) {
        echo('pwd');
        exit;
    }
    echo ('verified');
    exit;
}
echo 'register';
?>
