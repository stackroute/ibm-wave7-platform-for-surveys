package com.stackroute.surveyservice.controller;

import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1")
public class SurveyController {
    private SurveyService surveyService;
    private ResponseEntity responseEntity;
    @Autowired
    public SurveyController(SurveyService surveyService)
    {
        this.surveyService= surveyService;
    }
    //to save the survey
    @PostMapping("survey")
    public ResponseEntity<?> saveTrack(@RequestBody Survey survey){
        responseEntity = new ResponseEntity<Survey>(surveyService.saveSurvey(survey), HttpStatus.OK);
        return responseEntity;

    }
    //to get all the survey
    @GetMapping("survey")
    public ResponseEntity<?> getAllSurveys(){
        return new ResponseEntity<List<Survey>>(surveyService.getAllSurveys(),HttpStatus.OK);
    }
    //to delete a survey
    @DeleteMapping("survey/{id}")
    public ResponseEntity<?> deleteSurvey(@PathVariable("id") int id)
    {
        try{
            surveyService.deleteSurvey(id);
            responseEntity = new ResponseEntity<String>("successfully deleted", HttpStatus.OK);
        }
        catch (Exception e){
            responseEntity=new ResponseEntity<String>(e.getMessage(),HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
    //to update a survey
    @PutMapping("survey/{id}")
    public ResponseEntity<?> updateSurvey(@RequestBody Survey survey)
    {
        surveyService.updateSurvey(survey);
        responseEntity = new ResponseEntity<Survey>(survey, HttpStatus.OK);
        return responseEntity;
    }

}
