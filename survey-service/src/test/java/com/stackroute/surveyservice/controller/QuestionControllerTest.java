package com.stackroute.surveyservice.controller;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.service.QuestionService;
import com.stackroute.surveyservice.service.SurveyorService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

public class QuestionControllerTest {

   @Autowired
   private MockMvc mockMvc;
   private Question question;
   @MockBean
   private QuestionService questionService;
   @InjectMocks
   private QuestionController questionController;
   private List<Question> list=null;
   @Before
   public void setUp() throws Exception{
       MockitoAnnotations.initMocks(this);
       mockMvc= MockMvcBuilders.standaloneSetup(questionController).build();
       question=new Question();
       question.setQuestionTag("How are you");
       question.setQuestionId("1");
        List<String> choices=new ArrayList<>();
        choices.add("Good");
        choices.add("Bad");
        question.setChoices(choices);
       list=new ArrayList<>();
       list.add(question);
   }

   @Test
   public void saveQuestion() {

   }

   @Test
   public void saveQuestionToSurvey() {
   }

   @Test
   public void getAllQuestions() {
   }

   @Test
   public void deleteQuestion() {
   }

   @Test
   public void deleteQuestionFromSurvey() {
   }

   @Test
   public void updateQuestion() {
   }
   @After
   public void tearDown() throws Exception {
   }
}