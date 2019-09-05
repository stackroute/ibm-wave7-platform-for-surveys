package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.exceptions.QuestionAlreadyExistsException;
import com.stackroute.surveyservice.exceptions.QuestionDoesNotExistsException;

import java.util.List;

public interface QuestionService {
    Question addQuestionToSurvey(Question question,String surveyId) ;
    Question editQuestion(Question question,String surveyId,String questionIdOld) throws QuestionDoesNotExistsException;
    List<Question> getAllQuestions();
    Question removeQuestionFromSurvey(String id, String surveyId)throws QuestionDoesNotExistsException;;
    Question addQuestion(Question question) throws QuestionAlreadyExistsException;

}



