package com.stackroute.surveyservice.exceptions;

public class QuestionDoesNotExistException extends Exception{

    private String message;

    public QuestionDoesNotExistException()
    {
    }

    //creating custom exception
    public QuestionDoesNotExistException(String message)
    {
        super(message);
        this.message = message;
    }

}
