package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.SurveyDoesNotExistsException;
import com.stackroute.surveyservice.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
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
//            System.out.println(surveyorId);
//            surveyRepository.createCreatesRelationShip(survey.getId(),surveyorId);
//            surveyRepository.createBelongsToRelationShip(survey.getId());

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
    public Survey updateSurvey(Survey survey) throws SurveyDoesNotExistsException{

        if (!surveyRepository.findById(survey.getId()).isPresent()) {
          throw new SurveyDoesNotExistsException();
        }
       return surveyRepository.save(survey);
    }

    @Override
    public Survey getSurveyById(String id) {
        return surveyRepository.getSurveyById(id);
    }
}
