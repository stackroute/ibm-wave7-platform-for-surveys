package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.repository.QuestionRepository;
import com.stackroute.surveyservice.repository.SurveyorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SurveyorServiceImpl implements SurveyorService {

    private SurveyorRepository surveyorRepository;

    @Autowired
    public SurveyorServiceImpl(SurveyorRepository surveyorRepository) {
        this.surveyorRepository = surveyorRepository;
    }

    @Override
    public Surveyor addSurveyor(Surveyor surveyor) {
        Surveyor savedSurveyor=null;
        if(!surveyorRepository.findById(surveyor.getId()).isPresent()) {
            savedSurveyor = surveyorRepository.save(surveyor);

        }
        return savedSurveyor;
    }

    @Override
    public void editSurveyor(Surveyor surveyor) {
        Optional<Surveyor> updatedSurveyor=Optional.of(new Surveyor());
        if (surveyorRepository.existsById( surveyor.getId())) {
            updatedSurveyor = surveyorRepository.findById(surveyor.getId());
        }
       // return addSurveyor(updatedSurveyor);
    }

    @Override
    public Surveyor removeSurveyor(Integer surveyorId) {
        return null;
    }

    @Override
    public List<Surveyor> getAllSurveyors(String surveyId) {
        return null;
    }

    @Override
    public Surveyor getSurveyorById(Integer surveyorId) {
        return null;
    }
}
