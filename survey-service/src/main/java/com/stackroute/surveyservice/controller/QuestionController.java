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
    //to get all the question
    @GetMapping("question")
    public ResponseEntity<?> getAllQuestions(String surveyId) {
        return new ResponseEntity<List<Question>>(questionService.getAllQuestions(surveyId),HttpStatus.OK);
    }
    //to delete a question
    @DeleteMapping("question/{id}")
    public ResponseEntity<?> deleteQuestion(@PathVariable("id") String id) throws Exception {

             Question deletedQuestion = questionService.removeQuestion(id);
            return new ResponseEntity<Question>(deletedQuestion, HttpStatus.OK);
    }

    //to update a question
    @PutMapping("question")
    public ResponseEntity<?> updateQuestion(@RequestBody Question question) throws QuestionDoesNotExistsException
    {
        Question updatedQuestion = questionService.editQuestion(question);
        return new ResponseEntity<Question>(updatedQuestion, HttpStatus.OK);
    }
    @DeleteMapping("question")
    public ResponseEntity<?> deleteQuestion(@RequestBody Question question) throws Exception {

        questionService.removeQuestionFromSurvey(question);
        return new ResponseEntity<String>("Deleted From Survey", HttpStatus.OK);
    }
}
