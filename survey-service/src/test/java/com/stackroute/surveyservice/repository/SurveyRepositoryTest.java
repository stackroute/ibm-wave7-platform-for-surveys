//package com.stackroute.surveyservice.repository;
//
//import com.stackroute.surveyservice.SurveyServiceApplication;
//import com.stackroute.surveyservice.domain.Survey;
//import org.junit.After;
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@RunWith(SpringRunner.class)
//@ContextConfiguration(classes = SurveyServiceApplication.class)
//public class SurveyRepositoryTest {
//
//    @Autowired
//    SurveyRepository surveyRepository;
//    Survey survey;
//    @Before
//    public void setUp(){
//        survey=new Survey();
//        survey.setId("1");
//        survey.setName("FeedBack");
//        survey.setDescription("nothing to do");
//        survey.setDomain_type("Education");
//    }
//
//    @Test
//    public void testSaveSurvey(){
//        surveyRepository.save(survey);
//        Survey fetchTrack=surveyRepository.findById(survey.getId()).get();
//        Assert.assertEquals("1",fetchTrack.getId());
//    }
//
//    @After
//    public void tearDown(){
//        surveyRepository.deleteAll();
//    }
//}
