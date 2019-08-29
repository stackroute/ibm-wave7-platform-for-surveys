package com.stackroute.surveyservice.exceptions;

public class QuestionAlreadyExistsException extends Exception {

    private String message;

    public QuestionAlreadyExistsException()
    {
    }

    //creating custom exception
    public QuestionAlreadyExistsException(String message)
    {
        super(message);
        this.message = message;
    }
}
