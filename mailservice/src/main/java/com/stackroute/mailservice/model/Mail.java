package com.stackroute.mailservice.model;


import org.springframework.stereotype.Component;

@Component
public class Mail {

    private String url;
    private String body;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @Override
    public String toString() {
        return "Mail{" +
                "url='" + url + '\'' +
                ", body='" + body + '\'' +
                '}';
    }
}
