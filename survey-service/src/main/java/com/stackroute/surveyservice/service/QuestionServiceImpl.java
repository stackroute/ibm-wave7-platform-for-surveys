package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.exceptions.QuestionAlreadyExistsException;
import com.stackroute.surveyservice.exceptions.QuestionDoesNotExistsException;
import com.stackroute.surveyservice.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionServiceImpl implements QuestionService{
    private QuestionRepository questionRepository;
    @Autowired
    public QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }
    //save Question
    @Override
    public Question addQuestionToSurvey(Question question,String SurveyId) {
      System.out.println(question.getQuestionId()+" "+question.getQuestionTag());
        Question savedQuestion = null;
        if(!questionRepository.findById(question.getQuestionId()).isPresent())
        {
            savedQuestion = questionRepository.save(question);
            questionRepository.createBelongsToRelationShip(question.getQuestionId(),SurveyId);
        }else{
            questionRepository.createBelongsToRelationShip(question.getQuestionId(),SurveyId);

        }
        return savedQuestion;
    }
    @Override
    public Question editQuestion(Question question,String surveyId,String questionIdOld) throws QuestionDoesNotExistsException {
        System.out.println(questionIdOld);
        questionRepository.removeQuestionFromSurvey(questionIdOld,surveyId);
        System.out.println("Removed from survey");
          Question  updatedQuestion = questionRepository.save(question);
          System.out.println("saved Question");
            questionRepository.createBelongsToRelationShip(question.getQuestionId(),surveyId);
            System.out.println("Created Relationship");

        return updatedQuestion;
    }


    @Override
    public List<Question> getAllQuestions() {
        return (List<Question>) questionRepository.findAll();
    }

    @Override
    public Question removeQuestionFromSurvey(String id, String surveyId) {
        Question question1=questionRepository.getQuestionById(id);
        questionRepository.removeQuestionFromSurvey(id, surveyId);
        return question1;
    }

    @Override
    public Question addQuestion(Question question) throws QuestionAlreadyExistsException {
        Question savedQuestion = null;
        if(!questionRepository.findById(question.getQuestionTag()).isPresent()) {
            savedQuestion = questionRepository.save(question);
        }

        return savedQuestion;

    }
}
