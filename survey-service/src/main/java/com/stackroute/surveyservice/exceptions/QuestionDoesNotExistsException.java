package com.stackroute.surveyservice.exceptions;

public class QuestionDoesNotExistsException extends Exception{

    private String message;

    public QuestionDoesNotExistsException()
    {
    }

    //creating custom exception
    public QuestionDoesNotExistsException(String message)
    {
        super(message);
        this.message = message;
    }

}
