package com.stackroute.userresponse.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.userresponse.controller.ResponseController;
import com.stackroute.userresponse.domain.Response;
import com.stackroute.userresponse.repository.ResponseRepository;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
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

public class UserResponseServiceTest {
    @Autowired
    private MockMvc mockMvc;

    private Response response;
    /**
     * Create a mock for responseService
     */
    @Mock
    private ResponseRepository responseRepository;
    /**
     * Inject the mocks as dependencies into responseController
     */
    @InjectMocks
    private ResponseServiceImpl responseService;

    /**
     * Run this before each test case
     */
    private List<Response> list = null;

    @Before
    public void setUp() {
        //Initialising the mock object
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(responseService).build();
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
        when(responseRepository.save(any())).thenReturn(response);
        Response savedResponse=responseService.saveResponse(response);
        Assert.assertEquals(response, savedResponse);

        //verify here verifies that trackService saveResponse method is only called once
        verify(responseRepository, times(1)).save(Mockito.any(Response.class));;

    }
    @Test
    public void givenGetMappingUrlShouldReturnListOfAllResponses() throws Exception {
        List<Response> responseList = new ArrayList<>();
        responseList.add(response);
        //It checks when the save user is called it has to return the save user object
        when(responseRepository.findAll()).thenReturn(responseList);
        List<Response> retrievedResponses = responseService.getAllResponses();
        Assert.assertEquals(responseList,retrievedResponses);
        //verify here verifies that userRepository findALL method is only called once
        verify(responseRepository,times(1)).findAll();
        verifyNoMoreInteractions(responseRepository);
    }
}
