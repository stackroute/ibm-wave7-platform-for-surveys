package com.stackroute.surveyservice.controller;

import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.SurveyorAlreadyExistException;
import com.stackroute.surveyservice.exceptions.SurveyorDoesNotExistsException;
import com.stackroute.surveyservice.service.SurveyorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value = "api/v1")
@CrossOrigin(origins = "*")
public class SurveyorController {

    private SurveyorService surveyorService;
    private ResponseEntity responseEntity;
    @Autowired
    public SurveyorController(SurveyorService surveyorService) {
        this.surveyorService = surveyorService;
    }

    //to save the survey
    @PostMapping("surveyor")
    public ResponseEntity<?> saveSurveyor(@RequestBody Surveyor surveyor) throws SurveyorAlreadyExistException {
        responseEntity = new ResponseEntity<Surveyor>(surveyorService.addSurveyor(surveyor), HttpStatus.CREATED);
        return responseEntity;

    }
    //to delete a survey
    @DeleteMapping("surveyor/{id}")
    public ResponseEntity<?> deleteSurveyor(@PathVariable("id") String id) throws SurveyorDoesNotExistsException {
        try {
            surveyorService.removeSurveyor(id);
            responseEntity = new ResponseEntity<String>("successfully deleted", HttpStatus.OK);
        } catch (Exception e) {
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.OK);
        }
        return responseEntity;
    }

    //to update a survey
    @PutMapping("surveyor")
    public ResponseEntity<?> updateSurveyor(@RequestBody Surveyor surveyor) throws SurveyorDoesNotExistsException {
        surveyorService.editSurveyor(surveyor);
        responseEntity = new ResponseEntity<Surveyor>(surveyor, HttpStatus.OK);
        return responseEntity;
    }

    @GetMapping("surveyor/{id}")
    public ResponseEntity<?> getSurveyorById(@PathVariable("id") String id) throws SurveyorDoesNotExistsException {
        responseEntity = new ResponseEntity<Surveyor>(surveyorService.getSurveyorById(id), HttpStatus.OK);
        return responseEntity;
    }
    @GetMapping("surveyorwithquestions/{id}")
    public ResponseEntity<?> getSurveyorByIdWithQuestions(@PathVariable("id") String id) throws SurveyorDoesNotExistsException {
        responseEntity = new ResponseEntity<Surveyor>(surveyorService.getSurveyorByIdWithQuestions(id), HttpStatus.OK);
        return responseEntity;
    }

}

