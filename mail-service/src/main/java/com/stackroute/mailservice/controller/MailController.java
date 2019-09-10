package com.stackroute.mailservice.controller;

import com.stackroute.mailservice.model.Mail;
import com.stackroute.mailservice.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.MessagingException;
import org.springframework.web.bind.annotation.*;
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

<<<<<<< HEAD
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
=======
    @RequestMapping("send-mail")
    public ResponseEntity<Mail> send(@RequestParam String url) {
        Map<String, Object> model = new HashMap<String, Object>();
        model.put("url", url);
        model.put("signature", "Mail to take the survey");
        try {
            mailService.sendMail(model);
        }
        catch (MessagingException | IOException | javax.mail.MessagingException e) {
>>>>>>> 17a3f40861f265b2baf36d99dbe67af216e0aad0
            e.printStackTrace();
        }

        return new ResponseEntity<>();
    }
}
