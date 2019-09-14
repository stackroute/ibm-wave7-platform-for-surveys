package com.stackroute.mailservice.model;


import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Mail {

    private String url;

    private String[] emailIds;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String[] getEmailIds() {
        return emailIds;
    }

    public void setEmailIds(String[] emailIds) {
        this.emailIds = emailIds;
    }
}

