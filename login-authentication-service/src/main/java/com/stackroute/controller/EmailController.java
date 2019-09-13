package com.stackroute.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.messaging.MessagingException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.internet.MimeMessage;

@RestController
@RequestMapping(value="api/v1")
public class EmailController {
    @Autowired
    private JavaMailSender javaMailSender;

    @GetMapping(value="/email")
    public String sendEmail() throws javax.mail.MessagingException {
        MimeMessage message=javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo("rdevi2850@gmail.com");
        helper.setSubject("SpringBootApplication");
        helper.setText("Hello");
        javaMailSender.send(message);
        return "successfully sent email";
    }
}
