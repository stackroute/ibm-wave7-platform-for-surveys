package com.stackroute.surveyservice.controller;

import com.stackroute.surveyservice.exceptions.QuestionAlreadyExistsException;
import com.stackroute.surveyservice.exceptions.QuestionDoesNotExistsException;
import org.springframework.hateoas.VndErrors;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Optional;

public class GlobalExceptionHandler {

    //formatting error model
    private ResponseEntity<VndErrors> error(final Exception exception, final HttpStatus httpStatus, final String logRef)
    {
        final String message = Optional.of(exception.getMessage()).orElse(exception.getClass().getSimpleName());
        return new ResponseEntity<>(new VndErrors(logRef, message), httpStatus);
    }

    //handling QuestionDoesNotExistException exception
    @ExceptionHandler(QuestionDoesNotExistsException.class)
    public ResponseEntity <VndErrors> notFoundException(final QuestionDoesNotExistsException e)
    {
        return error(e, HttpStatus.NOT_FOUND, e.getMessage());
    }

    @ExceptionHandler(QuestionAlreadyExistsException.class)
    public ResponseEntity <VndErrors> alreadyExistsException(final QuestionAlreadyExistsException e) {
        return error(e, HttpStatus.CONFLICT, e.getLocalizedMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity <VndErrors> exception(final Exception e) {
        return error(e, HttpStatus.CONFLICT, e.getLocalizedMessage());
    }
}
