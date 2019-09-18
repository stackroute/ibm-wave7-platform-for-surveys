package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.SurveyDoesNotExistsException;
import com.stackroute.surveyservice.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.chrono.ChronoLocalDate;
import java.util.*;

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
    public Survey deleteSurvey(String id) {
        Optional<Survey> deletedSurvey = surveyRepository.findById(id);
        surveyRepository.delete(id);
        surveyRepository.deleteById(id);
        return deletedSurvey.get();
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

    @Override
    public List<String> getRelatedSurveysId(String id) {
        String domain=surveyRepository.getSurveyById(id).getDomain_type();
        List<String> list=new ArrayList<>();
        List<Survey> surveyList=surveyRepository.getRecommendedSurveyBasedOnDomain(domain);
        for(Survey survey:surveyList)
        {
            list.add(survey.getId());
        }
        return list;
    }

    @Override

    public int surveyExpiryCheck(String id)
    {
        LocalDate presentDate=LocalDate.now();
        String currentDate=presentDate.toString();

        int compare=currentDate.compareTo(surveyRepository.getSurveyById(id).getExpiryDate());
        return compare;
    }

}
