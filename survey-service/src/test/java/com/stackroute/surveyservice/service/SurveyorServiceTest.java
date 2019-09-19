package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.SurveyorAlreadyExistException;
import com.stackroute.surveyservice.exceptions.SurveyorDoesNotExistsException;
import com.stackroute.surveyservice.repository.SurveyRepository;
import com.stackroute.surveyservice.repository.SurveyorRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;
//import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class SurveyorServiceTest {
    private Surveyor surveyor;
    @Mock
    private SurveyorRepository surveyorRepository;
    @InjectMocks
    private SurveyorServiceImpl surveyorService;
    List<Surveyor> list=null;

    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);
        surveyor=new Surveyor();
        surveyor.setId("66");
        surveyor.setName("Rupa");
        surveyor.setEmail("rupa@gmail.com");
        list=new ArrayList<>();
        list.add(surveyor);
    }
    @Test
    public void addSurveyor() throws SurveyorAlreadyExistException {
        when(surveyorRepository.save(surveyor)).thenReturn(surveyor);
        Surveyor savedSurveyor=surveyorService.addSurveyor(surveyor);
        assertEquals(surveyor,savedSurveyor);
        verify(surveyorRepository,times(1)).save(surveyor);
    }

    @Test
    public void editSurveyor() throws SurveyorDoesNotExistsException {
        when(surveyorRepository.save((Surveyor) any())).thenReturn(surveyor);
         Surveyor savedSurveyor=surveyorService.editSurveyor(surveyor);
        assertEquals(surveyor,savedSurveyor);
        verify(surveyorRepository,times(1)).save(surveyor);
    }


    @Test

    @After
    public void tearDown() throws Exception {
    }
}
