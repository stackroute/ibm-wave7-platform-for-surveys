package com.stackroute.userresponse.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.userresponse.domain.Response;
import com.stackroute.userresponse.service.ResponseService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;

public class UserResponseControllerTest {
    @Autowired
    private MockMvc mockMvc;
    private Response response;
    /**
     * Create a mock for responseService
     */
    @Mock
    private ResponseService responseService;
    /**
     * Inject the mocks as dependencies into responseController
     */
    @InjectMocks
    private ResponseController responseController;

    /**
     * Run this before each test case
     */
    private List<Response> list = null;

    @Before
    public void setUp() {
        //Initialising the mock object
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(responseController).build();
        //act
        response = new Response("12", "good", "47","8");

        list = new ArrayList<>();
        list.add(response);
    }

    @After
    public void tearDown() {
        this.response = null;
        this.list = null;
    }

    @Test
    public void givenPostMappingUrlShouldReturnTheSavedResponse() throws Exception {
        when(responseService.saveResponse(any())).thenReturn(response);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/response")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(response)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(MockMvcResultHandlers.print());

        //verify here verifies that ResponseService saveResponse method is only called once
        verify(responseService, times(1)).saveResponse(response);
    }

    @Test
    public void givenGetMappingUrlShouldReturnListOfAllResponses() throws Exception {
        when(responseService.getAllResponses()).thenReturn(list);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/response")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());

        //verify here verifies that responseService getAllResponses method is only called once
        verify(responseService, times(1)).getAllResponses();

    }

    private static String asJsonString(final Object object) {
        try {
            return new ObjectMapper().writeValueAsString(object);

        } catch (Exception exception) {
            throw new RuntimeException(exception);
        }
    }


}
