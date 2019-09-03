package com.stackroute.mailservice.model;


import org.springframework.stereotype.Component;

@Component
public class Mail {

    private String url;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}

