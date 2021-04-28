<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require_once "vendor/autoload.php";

$mail = new PHPMailer;
// $mail->SMTPDebug = 4; // set 2 for less info value from 1 to 4 Use it when mail is not sent.
$mail->isSMTP();
$mail->Host = "smtp.gmail.com";
$mail->SMTPAuth = true;
$mail->Username = "omsairamji96@gmail.com";  
$mail->Password = "Sairam96";   
$mail->Port = 587;  
$mail->SMTPSecure = 'tls';

$mail->setFrom("shreeradheoffice@gmail.com", "<no-reply>");
$mail->addAddress("shreeradheoffice@gmail.com");
// $mail->addCC("someone@gmail.com", "Someone CC");
$form = $_POST["form-id"];

if("contact-form" == $form) {
	// echo "From Contact Form";
	$mail->Subject = "Enquiry From Adhiraj website";

	$mail->isHTML(true);

	$mail->Body = "<h2> Name: ".$_POST["enq_name"]."</h2><br><h2> Phone: ".$_POST["enq_phone"]."</h2><br><h2> Email: ".$_POST["enq_email"]."</h2>";

	if($mail->send()){
	    // echo "Message sent successfully!";
	    header("Location: index.php");
		exit();
	}
	else{
	    // echo "Message was not sent!<br>";
	    // echo "Mail Error : " .$mail->ErrorInfo;
	    header("Location: index.php");
		exit();
	}

} elseif ("brochure-form" == $form) {
	// echo "From Brochure";
	$mail->Subject = "Brochure Has Been Downloaded From Adhiraj website";

	$mail->isHTML(true);

	$mail->Body = "<h2> Name: ".$_POST["enq_name"]."</h2><br><h2> Phone: ".$_POST["enq_phone"]."</h2><br><h2> Email: ".$_POST["enq_email"]."</h2>";

	if($mail->send()){
	    // echo "Message sent successfully!";
		// Initialize a file URL to the variable 
		$url = __DIR__."/assets/docs/balaji-symphoney-brochure.pdf"; 
		$file_name = basename($url);
//		die($file_name);
        // header('Content-Description: File Transfer');
        header('Content-Type: application/pdf');
        header('Content-Disposition: attachment; filename="'.basename($url).'"');
        flush(); // Flush system output buffer
        readfile($url);
        header("Location: index.php");
        die();
		exit();
	}
	else{
	    echo "Message was not sent!<br>";
	    header("Location: error.html");
		exit();
	}
} elseif("footer-form" == $form) {
	// echo "From Contact Form";
	$mail->Subject = "Enquiry From Enquiry From Adhiraj website";

	$mail->isHTML(true);

	$mail->Body = "<h2> Name: ".$_POST["footer_name"]."</h2><br><h2> Phone: ".$_POST["footer_phone"]."</h2><br><h2> Email: ".$_POST["footer_email"]."</h2>";

	if($mail->send()){
	    // echo "Message sent successfully!";
	    header("Location: index.php");
		exit();
	}
	else{
	    // echo "Message was not sent!<br>";
	    // echo "Mail Error : " .$mail->ErrorInfo;
	    header("Location: index.php");
		exit();
	}

}
?>

