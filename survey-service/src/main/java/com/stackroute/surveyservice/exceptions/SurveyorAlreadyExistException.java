package com.stackroute.surveyservice.exceptions;

public class SurveyorAlreadyExistException extends Exception {

    public SurveyorAlreadyExistException() {
    }

    //creating custom exception
    public SurveyorAlreadyExistException(String message) {
        super(message);
    }
}
