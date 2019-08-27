package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public Survey saveSurvey(Survey survey) {
        Survey savedSurvey=null;
        if(!surveyRepository.findById(survey.getId()).isPresent()) {
            savedSurvey = surveyRepository.save(survey);
        }
        return savedSurvey;    }

    @Override
    public boolean deleteSurvey(String id) {
        surveyRepository.deleteById(id);
        return false;
    }

    @Override
    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }

    @Override
    public Survey updateSurvey(Survey survey) {
        Optional<Survey> savedSurvey=Optional.of(new Survey());
        if (surveyRepository.existsById(survey.getId())) {
            savedSurvey = surveyRepository.findById(survey.getId());
        }
        return saveSurvey(survey);
    }
}
