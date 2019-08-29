package com.stackroute.surveyservice.exceptions;

public class SurveyAlreadyExistsException extends Exception {

    private String message;

    public SurveyAlreadyExistsException() {
    }

    //creating custom exception
    public SurveyAlreadyExistsException(String message) {
        super(message);
        this.message = message;
    }
}
