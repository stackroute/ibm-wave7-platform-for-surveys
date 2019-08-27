package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.exceptions.QuestionAlreadyExistsException;
import com.stackroute.surveyservice.exceptions.QuestionDoesNotExistException;

import java.util.List;

public interface QuestionService {
    Question addQuestion(Question question) throws QuestionAlreadyExistsException;
    Question editQuestion(Question question) throws QuestionDoesNotExistException;
    Question removeQuestion(String questionId) throws QuestionDoesNotExistException;
    List<Question> getAllQuestions(String surveyId);
}
