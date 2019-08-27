package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.repository.SurveyRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;

public class SurveyServiceTest {
    Survey survey;
    @Mock
    SurveyRepository surveyRepository;
    @InjectMocks
    SurveyServiceImpl surveyService;
    List<Survey> list=null;

    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);
        survey=new Survey();
        survey.setId("1");
        survey.setName("spoorthi");
        survey.setDescription("hiii");
        survey.setDomain_type("Education");
        list=new ArrayList<>();
        list.add(survey);
    }
    @Test
    public void saveSurveyTest() throws Exception {
        when(surveyRepository.save((Survey) any())).thenReturn(survey);
        Survey savedSurvey=surveyService.saveSurvey(survey);
        assertEquals(survey,savedSurvey);
        verify(surveyRepository,times(1)).save(survey);
    }
    @Test
    public void getAllTracks(){
        surveyRepository.save(survey);
        when(surveyRepository.findAll()).thenReturn(list);
        List<Survey> trackList=surveyService.getAllSurveys();
        Assert.assertEquals(list,trackList);
    }

    @Test
    public void updateTrack() throws Exception {
        when(surveyRepository.save(any())).thenReturn(survey);
        Survey savedTrack=surveyService.updateSurvey(survey);
        assertEquals(survey,savedTrack);
        verify(surveyRepository,times(1)).save(survey);

    }
}
