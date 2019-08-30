package com.stackroute.mailservice.controller;

import com.stackroute.mailservice.model.Mail;
import com.stackroute.mailservice.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class MailController {


    @Autowired
    private MailService mailService;

    @Autowired
    private Mail mail;

    @RequestMapping("send-mail")
    public String send() {
        Map<String, Object> model = new HashMap<String, Object>();
        model.put("url", "https://www.google.com/search?q=biriyani&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjT9omy3afkAhXKsY8KHfu6AN4Q_AUIESgB&biw=1533&bih=801");
//        model.put("content", mail.getBody());
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
