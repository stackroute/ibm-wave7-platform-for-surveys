package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.exceptions.QuestionAlreadyExistsException;
import com.stackroute.surveyservice.exceptions.QuestionDoesNotExistsException;

import java.util.List;

public interface QuestionService {
    Question addQuestion(Question question) throws QuestionAlreadyExistsException;
<<<<<<< HEAD
    Question editQuestion(Question question) throws QuestionDoesNotExistException;
    Question removeQuestion(String questionId) throws QuestionDoesNotExistException;
    List<Question> getAllQuestions();
=======
    Question editQuestion(Question question) throws QuestionDoesNotExistsException;
    Question removeQuestion(String questionId) throws QuestionDoesNotExistsException;
    List<Question> getAllQuestions(String surveyId);
>>>>>>> baedf1945b88d3c0f8d094a658fb961d783bb3a7
    void removeQuestionFromSurvey(Question question);

}
