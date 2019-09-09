package com.stackroute.userregistration.exception;

public class EmailAlreadyExistException extends Exception {
        private String message;

        public EmailAlreadyExistException()
        {
        }

    public EmailAlreadyExistException(String exceptionmessage) {
        super(exceptionmessage);this.message = exceptionmessage;
    }

  }


