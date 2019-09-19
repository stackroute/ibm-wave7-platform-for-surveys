package com.stackroute.surveyservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.surveyservice.SurveyServiceApplication;
import com.stackroute.surveyservice.domain.Survey;
import com.stackroute.surveyservice.service.SurveyService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

//import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.matches;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = SurveyServiceApplication.class)
//@WebMvcTest
@AutoConfigureMockMvc
@SpringBootTest
public class SurveyControllerTest {
    @Autowired
    private MockMvc mockMvc;
    private Survey survey;
    @Mock
    private SurveyService surveyService;
    @InjectMocks
    private SurveyController surveyController;

    private List<Survey> list=null;

    @Before
    public void setUp() throws Exception{
        MockitoAnnotations.initMocks(this);
        mockMvc= MockMvcBuilders.standaloneSetup(surveyController).build();
        survey=new Survey();
        survey.setId("1");
        survey.setName("Feedback");
        survey.setDescription("To know the Quality of Education in our School");
        survey.setDomain_type("Education");
        list=new ArrayList<>();
        list.add(survey);
    }
    @Test
    public void testSaveSurvey() throws Exception{
        when(surveyService.saveSurvey(any(),matches("1"))).thenReturn(survey);
        mockMvc.perform(post("/api/v1/survey").param("surveyorId","1")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .accept(MediaType.APPLICATION_JSON)
                .content((asJsonString(survey))))
                .andExpect(status().isCreated())
                .andDo(print());
    }
//    @Test
//    public void deleteSurvey() throws Exception{
//        when(surveyService.deleteSurvey(survey.getId())).thenReturn(true);
//        mockMvc.perform(delete("/api/v1/survey/1")
//                .contentType(MediaType.APPLICATION_JSON_UTF8)
//                .accept(MediaType.APPLICATION_JSON)
//                .content(asJsonString(survey)))
//                .andExpect(status().isOk())
//                .andDo(print());
//

//    }
    @Test
    public void updateSurvey() throws Exception{
        when(surveyService.getAllSurveys()).thenReturn(list);
        mockMvc.perform(put("/api/v1/survey")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .accept(MediaType.APPLICATION_JSON)
                .content(asJsonString(survey)))
                .andExpect(status().isOk())
                .andDo(print());


    }
    private static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }
    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void getSurveyById() throws Exception {
        when(surveyService.getSurveyById("1")).thenReturn(survey);
        mockMvc.perform(get("/api/v1/survey/1")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .accept(MediaType.APPLICATION_JSON)
                .content(asJsonString(survey)))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getAllSurveys() throws Exception {
        when(surveyService.getAllSurveys()).thenReturn(list);
        mockMvc.perform(get("/api/v1/survey")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .accept(MediaType.APPLICATION_JSON)
                .content(asJsonString(survey)))
                .andExpect(status().isOk())
                .andDo(print());

    }


}
