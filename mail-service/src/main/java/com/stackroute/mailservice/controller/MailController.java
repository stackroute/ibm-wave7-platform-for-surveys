package com.stackroute.mailservice.controller;

import com.stackroute.mailservice.model.Mail;
import com.stackroute.mailservice.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class MailController {


    @Autowired
    private MailService mailService;

    @Autowired
    private Mail mail;


    @PostMapping("send-mail")
    public ResponseEntity send(@RequestBody Mail mail) {
        Map<Object, Object> map = new HashMap<>();
        System.out.println(mail.getUrl());
        for(int i=0;i<mail.getEmailIds().length;i++)
        {
            System.out.println(mail.getEmailIds()[i]);
        }
//        System.out.println(mail.getEmailIds());
        map.put("url",mail.getUrl());
        map.put("emailIds",mail.getEmailIds());
        try {
            mailService.sendMail(map);
        }

        catch (IOException | javax.mail.MessagingException e) {

            e.printStackTrace();
        }

        return new ResponseEntity("Mail Sent", HttpStatus.OK);
    }
}
