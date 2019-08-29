package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.QuestionAlreadyExistsException;
import com.stackroute.surveyservice.exceptions.QuestionDoesNotExistException;

import java.util.List;

public interface SurveyorService {
    Surveyor addSurveyor(Surveyor question);
    void editSurveyor(Surveyor question);
    Surveyor removeSurveyor(Integer surveyorId);
    List<Surveyor> getAllSurveyors(String surveyId);
    Surveyor getSurveyorById(Integer surveyorId);

}
