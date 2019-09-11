package com.stackroute.surveyservice.exceptions;

public class QuestionDoesNotExistsException extends Exception{

      //creating custom exception
    public QuestionDoesNotExistsException(String message)
    {
        super(message);
    }

}
