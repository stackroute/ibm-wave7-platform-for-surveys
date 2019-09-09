package com.stackroute.surveyservice.exceptions;

public class SurveyorDoesNotExistsException extends Exception {
    public SurveyorDoesNotExistsException() {
    }

    //creating custom exception
    public SurveyorDoesNotExistsException(String message) {
        super(message);
    }
}
