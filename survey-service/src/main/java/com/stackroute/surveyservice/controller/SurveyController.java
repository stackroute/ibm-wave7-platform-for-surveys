package com.stackroute.surveyservice.controller;

import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1")
@CrossOrigin(origins = "*")
public class SurveyController {
    private SurveyService surveyService;
    private ResponseEntity responseEntity;
    // Declaration and Intialization of topic name
    private static final String TOPIC = "KafkaExample";

    Survey survey=new Survey();

    @Autowired
    private KafkaTemplate<String,Survey> kafkaTemplate;


    @Autowired
    public SurveyController(SurveyService surveyService)
    {
        this.surveyService= surveyService;
    }
    //to save the survey
    @PostMapping("survey")
    public ResponseEntity<?> saveSurvey(@RequestBody Survey survey){
        responseEntity = new ResponseEntity<Survey>(surveyService.saveSurvey(survey), HttpStatus.CREATED);
        return responseEntity;

    }
    //to get all the survey
    @GetMapping("survey")
    public ResponseEntity<?> getAllSurveys(){
        return new ResponseEntity<List<Survey>>(surveyService.getAllSurveys(),HttpStatus.OK);
    }
    //to delete a survey
    @DeleteMapping("survey/{id}")
    public ResponseEntity<?> deleteSurvey(@PathVariable("id") String id)
    {
        try{
            surveyService.deleteSurvey(id);
            responseEntity = new ResponseEntity<String>("successfully deleted", HttpStatus.OK);
        }
        catch (Exception e){
            responseEntity=new ResponseEntity<String>(e.getMessage(),HttpStatus.OK);
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

    // handling user request with endpoint passing name
    @PostMapping("/publish")
    public String post()
    {
        // Sending records to topic
        kafkaTemplate.send(TOPIC, new Survey(survey.getId(),survey.getName(),survey.getDescription(),survey.getDomain_type()));
        return "published";
    }
}
