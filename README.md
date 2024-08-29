# 🌙 Moon Website

This project showcases a website developed to enhance my front-end development skills, focusing on modern web technologies and effective email handling using PHPMailer.

## 🛠️ Tools and Technologies Used

- **HTML/CSS**: Core technologies for creating the structure and style of the website.
- **JavaScript**: Implemented for dynamic interactions and enhanced user experience.
- **PHPMailer**: Used for handling email sending functionality in PHP.

## 🚀 Purpose

The primary goal of this project was to practice and improve my skills in front-end development and to integrate email functionality using PHPMailer. The website demonstrates modern web design techniques and efficient email handling.

## 🌐 Live Demo

You can view the project files in the `dist` folder on GitHub [here](https://mustafaproger.github.io/moon-website/dist/). 

**Please note:** The website will not function correctly when accessed directly from the `dist` folder on GitHub. This is because GitHub Pages does not support PHP or server-side technologies required to handle email sending with PHPMailer. To fully experience the website's features, including email functionality, you would need to host it on a server that supports PHP.

## 💡 PHPMailer Practice

As part of this project, I practiced using the PHPMailer library to send emails with PHP. Key features of PHPMailer include:

- SMTP support for secure email sending.
- Ability to send HTML and plain text emails.
- Support for file attachments.

### Example Usage

Here’s a basic example of how to use PHPMailer:
```php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.example.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'your_email@example.com';
    $mail->Password = 'your_password';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('recipient@example.com', 'Recipient Name');
    $mail->isHTML(true);
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
```

## 📂 Installation

To get started with this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/MustafaProger/moon-website.git
    ```

2. Navigate to the project directory:
    ```bash
    cd moon-website
    ```

3. [List any additional setup steps or commands here if needed]

## 🤝 Contributing

If you would like to contribute to the project, please follow the guidelines outlined in [CONTRIBUTING.md](CONTRIBUTING.md).
