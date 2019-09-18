package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.exceptions.SurveyDoesNotExistsException;

import java.util.Collection;
import java.util.List;

public interface SurveyService {

    public Survey saveSurvey(Survey survey,String surveyorId);

    public Survey deleteSurvey(String id);

    public Collection<Survey> getAllSurveys();

    public Survey updateSurvey(Survey survey);

    public Survey getSurveyById(String id);

    public List<Question> getRecomendedQuestions(String domainType);

    public int surveyExpiryCheck(String id);

    public List<String> getRelatedSurveysId(String id);

}
