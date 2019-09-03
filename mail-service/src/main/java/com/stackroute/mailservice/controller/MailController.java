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

    @RequestMapping("send-mail")
    public String send(@RequestParam String url) {
        Map<String, Object> model = new HashMap<String, Object>();
        model.put("url", url);
        model.put("signature", "Mail to take the survey");


        try {
            mailService.sendMail(model);
        } catch (MessagingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "Mail Sent";
    }
}
