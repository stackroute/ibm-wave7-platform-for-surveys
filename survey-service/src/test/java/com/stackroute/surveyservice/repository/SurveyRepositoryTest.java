package com.stackroute.surveyservice.repository;

import com.stackroute.surveyservice.SurveyServiceApplication;
import com.stackroute.surveyservice.domain.Survey;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = SurveyServiceApplication.class)
public class SurveyRepositoryTest {

    @Autowired
    SurveyRepository surveyRepository;
    Survey survey;
    @Before
    public void setUp(){
        survey=new Survey();
        survey.setId("10");
        survey.setName("John");
        survey.setDescription("nothing to do");
        survey.setDomain_type("Education");
    }

    @Test
    public void testSaveTrack(){
        surveyRepository.save(survey);
        Survey fetchTrack=surveyRepository.findById(survey.getId()).get();
        Assert.assertEquals("10",fetchTrack.getId());
    }
    @Test
    public void testGetAllTrack(){
        Survey t=new Survey("10","John","nothing","Education");
        Survey track1 = new Survey("11","spoo","finish the work","Technology");
        surveyRepository.save(t);
        surveyRepository.save(track1);
        List<Survey> list=surveyRepository.findAll();
        Assert.assertEquals("John",list.get(0).getName());
    }
    @Test
    public void testDeleteTrack(){
        surveyRepository.delete(survey);
        List<Survey> list=surveyRepository.findAll();
        List<Survey> trackList=new ArrayList<>();
        Assert.assertEquals(trackList,list);
    }
    @Test
    public void testUpdateTest()
    {
        Survey track1= surveyRepository.save(survey);
        Survey track2=surveyRepository.findById(survey.getId()).get();
        Assert.assertEquals(track1,track2);
    }
    @After
    public void tearDown(){
        surveyRepository.deleteAll();
    }
}
