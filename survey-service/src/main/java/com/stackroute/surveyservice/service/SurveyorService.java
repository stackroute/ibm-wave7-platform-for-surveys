package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.SurveyorAlreadyExistException;
import com.stackroute.surveyservice.exceptions.SurveyorDoesNotExistsException;

import java.util.Optional;

public interface SurveyorService {
    Surveyor addSurveyor(Surveyor question) throws SurveyorAlreadyExistException;
    Surveyor editSurveyor(Surveyor question) throws SurveyorDoesNotExistsException;
    void removeSurveyor(String surveyorId) throws SurveyorDoesNotExistsException;
    Surveyor getSurveyorById(String surveyorId) throws SurveyorDoesNotExistsException;
    Surveyor getSurveyorByIdWithQuestions(String surveyorId) throws SurveyorDoesNotExistsException;



}
