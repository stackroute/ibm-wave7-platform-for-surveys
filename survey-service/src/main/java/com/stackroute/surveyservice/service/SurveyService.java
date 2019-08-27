package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Survey;

import java.util.List;

public interface SurveyService {
    public Survey saveSurvey(Survey survey);

    public boolean deleteSurvey(String id);

    public List<Survey> getAllSurveys();

    public Survey updateSurvey(Survey survey);

}
