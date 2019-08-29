package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.exceptions.QuestionAlreadyExistsException;
import com.stackroute.surveyservice.exceptions.QuestionDoesNotExistsException;

import java.util.List;

public interface QuestionService {
    Question addQuestion(Question question) throws QuestionAlreadyExistsException;


    Question editQuestion(Question question) throws QuestionDoesNotExistsException;
    Question removeQuestion(String questionId) throws QuestionDoesNotExistsException;
    List<Question> getAllQuestions();

    void removeQuestionFromSurvey(Question question);

}
