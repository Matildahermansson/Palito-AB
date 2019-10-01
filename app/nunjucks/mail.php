<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'app/plugins/PHPMailer/src/Exception.php'
require 'app/plugins/PHPMailer/src/PHPMailer.php'
require 'app/plugins/PHPMailer/src/SMTP.php'


$mail = new PHPMailer(true);

//Mail config - Spec for One.com

$mail->Host = 'mailout.one.com';
$mail->PORT = 465;
$mail->SMTPSecure = 'tls';
$mail->CharSet = 'UTF-8';

// Get our data from Ajax Request 
$fromEmail = $_POST['email'];
$message = $_POST['message'];

/* Open the try/catch block. */
try {
	// Set the mail sender.
	$mail->setFrom('mailtest@erikalfredsson.nu', 'Erik alfredsson');
 
	// Add a recipient.
	$mail->addAddress('erik.alfredsson@pentia.se');
 
	// Set the subject.
	$mail->Subject = 'Force';
 
	// Set the mail message body. 
	$mail->Body = 'Från: ' . $fromEmail . '. Meddelande: ' . $message;
 
	// Send the mail.
	if($mail->send()) {
		$resp = array(
			'success' => true
		);
		// Send back response to script
		echo json_encode($resp);
	} else {
		$resp = array(
			'success' => false
		);
		// Send back response to script
		echo json_encode($resp);
	}
 }
 catch (Exception $e)
 {
	/* PHPMailer exception. */
	echo $e->errorMessage();
 }
 catch (\Exception $e)
 {
	/* PHP exception (note the backslash to select the global namespace Exception class). */
	echo $e->getMessage();
 }
?>