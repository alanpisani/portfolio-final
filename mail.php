<?php
    require "config/config.php";

    if(isset($_POST["email"])){
        require 'utils/mailer/src/PHPMailer.php';
        require 'utils/mailer/src/SMTP.php';
        require 'utils/mailer/src/Exception.php';

        $mail = new \PHPMailer\PHPMailer\PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $MAIL_USERNAME;
        $mail->Password = $MAIL_PASSWORD;
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom($MAIL_USERNAME, $_POST["name"]);
        $mail->addReplyTo($_POST["email"], $_POST["name"]);
        $mail->addAddress($MAIL_USERNAME, 'Alan');

        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje de contacto desde el portfolio';
        $mail->Body = $_POST["msj"];

        if ($mail->send()) {
            echo 'Mensaje enviado correctamente';
        } else {
            echo 'Error al enviar: ' . $mail->ErrorInfo;
        }
    }