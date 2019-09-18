package com.stackroute.surveyservice.controller;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.SurveyDoesNotExistsException;
import com.stackroute.surveyservice.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping(value = "api/v1")
@CrossOrigin(origins = "*")
public class SurveyController {
    private SurveyService surveyService;
    private ResponseEntity responseEntity;

    // Declaration and Intialization of topic name
    private static final String TOPIC = "KafkaExample";
    Survey survey = new Survey();
    private KafkaTemplate<String, Survey> kafkaTemplate;

    @Autowired
    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    //to save the survey
    //takes survey object and surveyorId as RequestParam
    @PostMapping("survey")
    public ResponseEntity<?> saveSurvey(@RequestBody Survey survey, @RequestParam String surveyorId) {

        responseEntity = new ResponseEntity<Survey>(surveyService.saveSurvey(survey,surveyorId), HttpStatus.CREATED);
        return responseEntity;

    }

    //to get all the survey
    @GetMapping("survey")
    public ResponseEntity<?> getAllSurveys() {
        return new ResponseEntity<Collection<Survey>>(surveyService.getAllSurveys(), HttpStatus.OK);
    }

    //to delete a survey
    @DeleteMapping("survey/{id}")
    public ResponseEntity<?> deleteSurvey(@PathVariable("id") String id) {
        try {
            Survey deletedSurvey = surveyService.deleteSurvey(id);
            responseEntity = new ResponseEntity<Survey>(deletedSurvey, HttpStatus.OK);
        } catch (Exception e) {
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.OK);
        }
        return responseEntity;
    }

    //to update a survey
    @PutMapping("survey")
    public ResponseEntity<?> updateSurvey(@RequestBody Survey survey) throws SurveyDoesNotExistsException {
        surveyService.updateSurvey(survey);
        responseEntity = new ResponseEntity<Survey>(survey, HttpStatus.OK);
        return responseEntity;
    }

    @GetMapping("survey/{id}")
    public ResponseEntity<?> getSurveyById(@PathVariable("id") String id) {
        System.out.println(id);
        responseEntity = new ResponseEntity<Survey>(surveyService.getSurveyById(id), HttpStatus.OK);
        return responseEntity;
    }
    // handling user request with endpoint passing name
    @PostMapping("publish")
    public String post()
    {
        // Sending records to topic
        // kafkaTemplate.send(TOPIC, new Survey(survey.getId(),survey.getName(),survey.getDescription(),survey.getDomain_type()));
        return "published";
    }
    @GetMapping("recommendations/{id}")
    public ResponseEntity<?> getRecomentadions(@PathVariable("id") String id) {
        System.out.println(id);
        responseEntity = new ResponseEntity<List<Question>>(surveyService.getRecomendedQuestions(id), HttpStatus.OK);
        return responseEntity;
    }

    @GetMapping("expiryCheck")
    public int surveyExpiryCheck(@RequestParam String id)
    {
        return surveyService.surveyExpiryCheck(id);
    }

    @GetMapping("relatedSurveys")
    public List<String> getRelatedSurveys(@RequestParam String id)
    {
        return surveyService.getRelatedSurveysId(id);
    }
//    @GetMapping("recommendSurveys/{domain}")
//    public ResponseEntity<?> getRecomentadionsSurveys(@PathVariable("domain") String domain) {
//
//        responseEntity = new ResponseEntity<List<Survey>>(surveyService.getSurveyByDomainName(domain), HttpStatus.OK);
//
//        return responseEntity;

}
