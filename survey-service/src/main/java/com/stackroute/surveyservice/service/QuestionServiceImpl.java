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

        Question savedQuestion = null;
        if(!questionRepository.findById(question.getQuesionTag()).isPresent())
        {
            savedQuestion = questionRepository.save(question);
            questionRepository.createBelongsToRelationShip(question.getQuesionTag(),SurveyId);
        }else{
            questionRepository.createBelongsToRelationShip(question.getQuesionTag(),SurveyId);

        }
        return savedQuestion;
    }
    @Override
    public Question editQuestion(Question question) throws QuestionDoesNotExistsException {

        Optional<Question> existingQuestion = questionRepository.findById(question.getQuesionTag());

        Question updatedQuestion = null;
        if (existingQuestion.isPresent()) {
            updatedQuestion = questionRepository.save(question);
        }
        return updatedQuestion;
    }
    @Override
    public Question removeQuestion(String questionId) throws QuestionDoesNotExistsException {
        Optional<Question> existingQuestion = questionRepository.findById(questionId);
        if (existingQuestion.isPresent()) {
            questionRepository.deleteById(questionId);
        }
        return existingQuestion.get();
    }


    @Override
    public List<Question> getAllQuestions() {
        return (List<Question>) questionRepository.findAll();
    }

    @Override
    public void removeQuestionFromSurvey(Question question,String surveyId) {

        questionRepository.removeQuestionFromSurvey(question.getQuestionId(), surveyId);
    }

    @Override
    public Question addQuestion(Question question) throws QuestionAlreadyExistsException {
        Question savedQuestion = null;
        if(!questionRepository.findById(question.getQuesionTag()).isPresent()) {
            savedQuestion = questionRepository.save(question);
        }

        return savedQuestion;
    }
}
