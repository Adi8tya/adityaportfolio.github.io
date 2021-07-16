<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['subject'];
$textarea= $_POST['textarea'];

$to = "ak247000@gmail.com";
$subject = "Mail From portfolio";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Subject =" . $message ."\r\n Message =". $textarea;

$headers = "From: adityagndu.000webhostapp.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thanks.html");
?>