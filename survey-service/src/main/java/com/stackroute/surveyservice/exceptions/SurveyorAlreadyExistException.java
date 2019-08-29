package com.stackroute.surveyservice.exceptions;

public class SurveyorAlreadyExistException extends Exception {

    private String message;

    public SurveyorAlreadyExistException() {
    }

    //creating custom exception
    public SurveyorAlreadyExistException(String message) {
        super(message);
        this.message = message;
    }
}
