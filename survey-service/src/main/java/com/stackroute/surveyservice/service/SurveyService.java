package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.exceptions.SurveyDoesNotExistsException;

import java.util.Collection;

public interface SurveyService {
    public Survey saveSurvey(Survey survey, String surveyorId);

    public boolean deleteSurvey(String id);

    public Collection<Survey> getAllSurveys();

    public Survey updateSurvey(Survey survey) throws SurveyDoesNotExistsException;

    public Survey getSurveyById(String id);




}
