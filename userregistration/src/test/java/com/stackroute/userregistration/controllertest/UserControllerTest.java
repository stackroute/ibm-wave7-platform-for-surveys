package com.stackroute.userregistration.controllertest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.userregistration.controller.UserController;
import com.stackroute.userregistration.domain.User;
import com.stackroute.userregistration.service.UserService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.Mockito.*;
import static org.mockito.internal.verification.VerificationModeFactory.times;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserControllerTest {
    //Creating the object for the mockmvc to mock the service
    @Autowired
    MockMvc mockMvc;
    //Mocking the user service
    @Mock
    UserService userService;
    @InjectMocks
    UserController userController;
    @Before
    public void setup()
    {
        MockitoAnnotations.initMocks(this);
        //Building the usercontroller
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }
    //Creating the testcase for the saving the user in the database
    @Test
    public void saveUserTest() throws Exception
    {
        //Sample user details
        User user = new User("1","Sahithi","sahithi@gmail.com","pwd");
        //When the saveUser is called it has to return the saved user
        when(userService.saveUser(user)).thenReturn(user);
        //It has to perform the action whenever the user url template is called using the post method
        mockMvc.perform(post("/user")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(user)))
                .andExpect(status().isCreated());
        //It has to call the user only once
        verify(userService, times(1)).saveUser(Mockito.any(User.class));
        verifyNoMoreInteractions(userService);
    }
    @Test
    public void getAllUsersTest() throws Exception
    {
        //Sample user details
        List<User> users = new ArrayList<>();
        User user = new User("1","Sahithi","sahithi@gmail.com","pwd");
        User user1 = new User("1","premika","premika@gmail.com","pwd");
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
//    @Test
//    public void deleteUserTest() throws Exception
//    {
//        //Sample user details
//        User user = new User("1","Sahithi","sahithi@gmail.com","pwd");
//        //When the deleteUser is called it has to return the deleted user
//        when(userService.deleteUser("1")).thenReturn(user);
//        mockMvc.perform(delete("/track/1")
//                .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk());
//        verify(userService, times(1)).deleteUser("1");
//        verifyNoMoreInteractions(userService);
//    }
    //This method is used to change the object to the string
    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
