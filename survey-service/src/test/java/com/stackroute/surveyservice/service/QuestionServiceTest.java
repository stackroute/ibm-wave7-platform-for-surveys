package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.exceptions.QuestionAlreadyExistsException;
import com.stackroute.surveyservice.exceptions.QuestionDoesNotExistsException;
import com.stackroute.surveyservice.repository.QuestionRepository;
import com.stackroute.surveyservice.repository.SurveyRepository;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class QuestionServiceTest {

    Question question;
    @Mock
    QuestionRepository questionRepository;
    @InjectMocks
    QuestionServiceImpl questionService;
    List<Question> list=null;

    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);
        question=new Question();
       question.setQuestionTag("How are you");
       question.setQuestionId("1");
       question.setDomainType("Education");
        List<String> choices=new ArrayList<>();
        choices.add("Good");
        choices.add("Bad");
        question.setChoices(choices);
        list=new ArrayList<>();
        list.add(question);
    }
    @After
    public void tearDown() throws Exception {
    }


    @Test
    public void editQuestion() throws QuestionDoesNotExistsException {
        when(questionRepository.save(any())).thenReturn(question);
        Question savedTrack=questionService.editQuestion(question);
        assertEquals(question,savedTrack);

    }




    @Test
    public void getAllQuestions() {
        questionRepository.save(question);
        when(questionRepository.findAll()).thenReturn(list);
        List<Question> questionList=questionService.getAllQuestions();
        Assert.assertEquals(list,questionList);
    }


    @Test
    public void addQuestion() throws QuestionAlreadyExistsException {
        when(questionRepository.save((Question) any())).thenReturn(question);
        Question savedQuestion=questionService.addQuestion(question);
        assertEquals(question,savedQuestion);
        verify(questionRepository,times(1)).save(question);
    }
}