package com.stackroute.userregistration.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.userregistration.UserRegistrationApplication;
import com.stackroute.userregistration.domain.User;
import com.stackroute.userregistration.service.UserService;
import com.stackroute.userregistration.service.UserServiceImpl;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import java.util.ArrayList;
import java.util.List;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.Mockito.*;
import static org.mockito.internal.verification.VerificationModeFactory.times;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = UserRegistrationApplication.class)
//@WebMvcTest
@AutoConfigureMockMvc
@SpringBootTest
public class UserControllerTest {
    //Creating the object for the mockmvc to mock the service
    @Autowired
    MockMvc mockMvc;
    //Mocking the user service
    @Mock
    UserServiceImpl userService;
    @Mock
    private KafkaTemplate<String, User> kafkaTemplate;
    @InjectMocks
    UserController userController;

    private User user;

    private List<User> list = null;

    @Before
    public void setup()
    {
        MockitoAnnotations.initMocks(this);
        mockMvc= MockMvcBuilders.standaloneSetup(userController).build();
        user = new User("1","Sahithi","sahithi@gmail.com","pwd","Surveyor","Hyderabad","child","Female");
    }
    @After
    public void tearDown() {
        this.user = null;
        this.list = null;
    }
    //Creating the testcase for the saving the user in the database
    @Test
  public void saveUserTest() throws Exception
   {
     //Sample user details
        //When the saveUser is called it has to return the saved user
        when(userService.saveUser(any())).thenReturn(user);
        //It has to perform the action whenever the user url template is called using the post method
        mockMvc.perform(post("/user")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(user)))
                .andExpect(MockMvcResultMatchers.status().isCreated());
        //It has to call the user only once
        verify(userService, times(1)).saveUser(user);
        //verifyNoMoreInteractions(userService);
   }
    @Test
    public void getAllUsersTest() throws Exception
    {
        User user = new User("1","Sahithi","sahithi@gmail.com","pwd","Surveyor","Hyderabad","child","Female");
        User user1 = new User("2","Premika","sahithi@gmail.com","pwd","Surveyor","Hyderabad","child","Female");
        //Sample user details
        List<User> users = new ArrayList<>();
        users.add(user);
        users.add(user1);
        //Call the getuser method
        when(userService.getUsers()).thenReturn(users);
        mockMvc.perform(get("/user")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
        //It has to call the getUsers only once
        verify(userService, times(1)).getUsers();
        verifyNoMoreInteractions(userService);
    }
    @Test
    public void deleteUserTest() throws Exception
    {
        //Sample user details
        User user = new User("1","Sahithi","sahithi@gmail.com","pwd","Surveyor","Hyderabad","child","Female");
        //When the deleteUser is called it has to return the deleted user
        when(userService.deleteUser("1")).thenReturn(user);
        mockMvc.perform(delete("/user/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
        verify(userService, times(1)).deleteUser("1");
        verifyNoMoreInteractions(userService);
    }
    //This method is used to change the object to the string
    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
