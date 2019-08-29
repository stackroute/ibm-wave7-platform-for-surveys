package com.stackroute.surveyservice.exceptions;

public class SurveyDoesNotExistsException extends Exception {

    public class SurveyorDoesNotExistsException extends Exception {

        private String message;

        public SurveyorDoesNotExistsException() {
        }

        //creating custom exception
        public SurveyorDoesNotExistsException(String message) {
            super(message);
            this.message = message;
        }
    }
}

