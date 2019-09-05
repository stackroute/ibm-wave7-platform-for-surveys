package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.SurveyDoesNotExistsException;
import com.stackroute.surveyservice.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class SurveyServiceImpl implements SurveyService{
    private SurveyRepository surveyRepository;
    @Autowired
    public SurveyServiceImpl(SurveyRepository surveyRepository){
        this.surveyRepository=surveyRepository;
    }

    @Override
    public Survey saveSurvey(Survey survey,String surveyorId) {
        Survey savedSurvey=null;
        if(!surveyRepository.findById(survey.getId()).isPresent()) {
            survey.setStatus("Draft");
            savedSurvey = surveyRepository.save(survey);
            surveyRepository.createCreatesRelationShip(survey.getId(), surveyorId);
            List<Question> questionList = surveyRepository.getRecommendedQuestions(survey.getDomain_type());
            System.out.println(questionList.size());
            for (Question question :questionList) {
                System.out.println(question.getQuestionTag());
                surveyRepository.createBelongsToRelationShip(survey.getId(),question.getQuestionId());

            }
        }
        return savedSurvey;
    }

    @Override
    public boolean deleteSurvey(String id) {
        surveyRepository.delete(id);
        surveyRepository.deleteById(id);
        return false;
    }

    @Override
    public Collection<Survey> getAllSurveys() {
        return surveyRepository.getAllSurveys();
    }

    @Override
    public Survey updateSurvey(Survey survey){
       return surveyRepository.save(survey);
    }

    @Override
    public Survey getSurveyById(String id) {
        Survey survey= surveyRepository.getSurveyById(id);
        return survey;
    }

    @Override
    public List<Question> getRecomendedQuestions(String domainType) {
        return surveyRepository.getRecommendedQuestionBasedOnDomain(domainType);
    }

}
