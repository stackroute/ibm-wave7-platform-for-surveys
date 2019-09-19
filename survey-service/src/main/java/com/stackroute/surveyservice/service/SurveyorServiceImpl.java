package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.SurveyorAlreadyExistException;
import com.stackroute.surveyservice.exceptions.SurveyorDoesNotExistsException;
import com.stackroute.surveyservice.repository.SurveyorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SurveyorServiceImpl implements SurveyorService {

    private SurveyorRepository surveyorRepository;

    @Autowired
    public SurveyorServiceImpl(SurveyorRepository surveyorRepository) {
        this.surveyorRepository = surveyorRepository;
    }

    @Override
    public Surveyor addSurveyor(Surveyor surveyor) throws SurveyorAlreadyExistException {
        Surveyor savedSurveyor=null;

        if(!surveyorRepository.findById(surveyor.getId()).isPresent()) {

            savedSurveyor = surveyorRepository.save(surveyor);

        }
        return savedSurveyor;
    }

    @Override
    public Surveyor editSurveyor(Surveyor surveyor)  throws SurveyorDoesNotExistsException {

        Surveyor updatedSurveyor = null;

        if(surveyorRepository.findById(surveyor.getId())==null) {
            updatedSurveyor = surveyorRepository.save(surveyor);

        }

        return updatedSurveyor;
    }

    @Override
    public void removeSurveyor(String surveyorId) throws SurveyorDoesNotExistsException {

        surveyorRepository.deleteById(surveyorId);
    }


    @Override
    public Surveyor getSurveyorById(String surveyorId) throws SurveyorDoesNotExistsException {
        return surveyorRepository.getSurveyorById(surveyorId);
    }

    @Override
    public Surveyor getSurveyorByIdWithQuestions(String surveyorId) throws SurveyorDoesNotExistsException {
        return surveyorRepository.getSurveyorByIdWithQuestions(surveyorId);
    }
}
