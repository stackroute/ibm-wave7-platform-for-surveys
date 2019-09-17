package com.stackroute.mailservice.service;

import com.stackroute.mailservice.model.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;

@Service
public class MailService {


    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private SpringTemplateEngine springTemplateEngine;


    public void sendMail(Map map) throws MessagingException, IOException {
        String[] recipientList=(String [])map.get("emailIds");
        String[] a={"agzafee1@in.ibm.com","agha.zafeer@gmail.com"};
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message,
                MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                StandardCharsets.UTF_8.name());
        Context context = new Context();
        context.setVariables(map);
        String html = springTemplateEngine.process("MailTemplate", context);
        helper.setTo(recipientList);
        helper.setText(html, true);
        helper.setSubject("Take the survey and get amazing reward points");
        helper.setFrom("agha.zafeer@gmail.com");
        javaMailSender.send(message);
    }
}
