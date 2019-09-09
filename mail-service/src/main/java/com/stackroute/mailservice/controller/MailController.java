package com.stackroute.mailservice.controller;

import com.stackroute.mailservice.model.Mail;
import com.stackroute.mailservice.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
public class MailController {


    @Autowired
    private MailService mailService;

    @Autowired
    private Mail mail;

    @PostMapping("send-mail")
    public String send(@RequestBody Mail mail) {
        Map<String, Object> map = new HashMap<String, Object>();
//        String url=mail.getUrl();
        System.out.println(mail.getUrl());
        map.put("url",mail.getUrl());
        map.put("signature", "Mail to take the survey");


        try {
            mailService.sendMail(map);
        } catch (MessagingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "Mail Sent";
    }
}
