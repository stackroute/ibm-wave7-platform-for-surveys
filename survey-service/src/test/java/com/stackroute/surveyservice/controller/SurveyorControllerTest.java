package com.stackroute.surveyservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.SurveyorAlreadyExistException;
import com.stackroute.surveyservice.exceptions.SurveyorDoesNotExistsException;
import com.stackroute.surveyservice.service.SurveyService;
import com.stackroute.surveyservice.service.SurveyorService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;
//import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class SurveyorControllerTest {

    @Autowired
    private MockMvc mockMvc;
    private Surveyor surveyor;
    @Mock
    private SurveyorService surveyorService;
    @InjectMocks
    private SurveyorController surveyorController;


    private List<Surveyor> list=null;

    @Before
    public void setUp() throws Exception{
        MockitoAnnotations.initMocks(this);
        mockMvc= MockMvcBuilders.standaloneSetup(surveyorController).build();
        surveyor=new Surveyor();
      surveyor.setId("1");
      surveyor.setName("Rupa");
      surveyor.setEmail("rupa@gmail.com");

      list=new ArrayList<>();
        list.add(surveyor);
    }
    @Test
    public void saveSurveyor() throws Exception {
        when(surveyorService.addSurveyor(any())).thenReturn(surveyor);
        mockMvc.perform(post("/api/v1/surveyor")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .accept(MediaType.APPLICATION_JSON)
                .content((asJsonString(surveyor))))
                .andExpect(status().isCreated())
                .andDo(print());
    }
    private static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    @Test
    public void updateSurveyor() throws Exception {
        when(surveyorService.editSurveyor(any())).thenReturn(surveyor);
        mockMvc.perform(put("/api/v1/surveyor")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .accept(MediaType.APPLICATION_JSON)
                .content(asJsonString(surveyor)))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getSurveyorById() throws Exception {
        when(surveyorService.getSurveyorById(any())).thenReturn(surveyor);
        mockMvc.perform(put("/api/v1/surveyor").pathInfo("/1")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .accept(MediaType.APPLICATION_JSON)
                .content(asJsonString(surveyor)))
                .andExpect(status().isOk())
                .andDo(print());
    }
    @After
    public void tearDown() throws Exception {
    }
}
