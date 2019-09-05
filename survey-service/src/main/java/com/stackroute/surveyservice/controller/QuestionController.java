package com.stackroute.surveyservice.controller;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.exceptions.QuestionAlreadyExistsException;
import com.stackroute.surveyservice.exceptions.QuestionDoesNotExistsException;
import com.stackroute.surveyservice.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
@ControllerAdvice(basePackages = "com.stackroute.surveyservice")
@CrossOrigin("*")
public class QuestionController {
    private QuestionService questionService;
    private ResponseEntity responseEntity;
    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }
    //to save the question
    @PostMapping("question")
    public ResponseEntity<?> saveQuestion(@RequestBody Question question) throws QuestionAlreadyExistsException {
        responseEntity = new ResponseEntity<Question>(questionService.addQuestion(question), HttpStatus.CREATED);
        return responseEntity;
    }
    @PostMapping("questionToSurvey")
    public ResponseEntity<?> saveQuestionToSurvey(@RequestBody Question question,@RequestParam String surveyId){
        System.out.println(question.getQuestionId()+" "+question.getQuestionTag());
        responseEntity = new ResponseEntity<Question>(questionService.addQuestionToSurvey(question,surveyId), HttpStatus.CREATED);
        return responseEntity;
    }
    //to get all the question
    @GetMapping("question")
    public ResponseEntity<?> getAllQuestions() {
        return new ResponseEntity<List<Question>>(questionService.getAllQuestions(),HttpStatus.OK);
    }

    @DeleteMapping("question/{id}")
    public ResponseEntity<?> deleteQuestionFromSurvey(@PathVariable String id,@RequestParam String surveyId) throws Exception {
        Question question1=questionService.removeQuestionFromSurvey(id,surveyId);
        return new ResponseEntity<Question>(question1, HttpStatus.OK);
    }

    //to update a question
    @PutMapping("question")
    public ResponseEntity<?> updateQuestion(@RequestBody Question question,@RequestParam String surveyId,@RequestParam String questionId) throws QuestionDoesNotExistsException
    {
        Question updatedQuestion = questionService.editQuestion(question,surveyId,questionId);
        return new ResponseEntity<Question>(updatedQuestion, HttpStatus.OK);
    }

}
