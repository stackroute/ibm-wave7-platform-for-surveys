package com.stackroute.userregistration.service;

import com.stackroute.userregistration.UserRegistrationApplication;
import com.stackroute.userregistration.domain.User;
import com.stackroute.userregistration.repository.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class UserServiceTest {
    //Autowiring the object mockmvc
    @Autowired
    private MockMvc mockMvc;
    //mocking the repository
    @Mock
    private UserRepository userRepository;
    @InjectMocks
    private UserServiceImpl userService;
    private User user;
    @Before
    public void setup()
    {
        MockitoAnnotations.initMocks(this);
        //Building the userservice
        mockMvc = MockMvcBuilders.standaloneSetup(userService).build();
        user = new User("1","Sahithi","sahithi@gmail.com","pwd","Surveyor","hyd","15","f");
    }

    @Test
    public void saveUserTest() throws Exception {
        //It checks when the save user is called it has to return the save user object
        when(userRepository.save(user)).thenReturn(user);
        User savedUser = userService.saveUser(user);
        Assert.assertEquals(user, savedUser);
        //verify here verifies that userRepository save method is only called once
        verify(userRepository, times(1)).save(Mockito.any(User.class));
        //verifyNoMoreInteractions(userRepository);
    }
    @Test
    public void getAllUsersTest()
    {
        //Sample user details
        List<User> trackList = new ArrayList<>();
        trackList.add(user);
        //It checks when the save user is called it has to return the save user object
        when(userRepository.findAll()).thenReturn(trackList);
        List<User> retrievedTracks = userService.getUsers();
        Assert.assertEquals(trackList,retrievedTracks);
        //verify here verifies that userRepository findALL method is only called once
        verify(userRepository,times(1)).findAll();
        verifyNoMoreInteractions(userRepository);
    }
    @Test
    public void deleteUserTest()
    {
        //sample user details for the testcase
        Optional<User> optionalTrack = Optional.of(user);
        when(userRepository.findById("1")).thenReturn(optionalTrack);
        User result = userService.deleteUser("1");
        Assert.assertNotNull(result);
        //verify here verifies that userRepository delete method is only called once
        verify(userRepository,times(1)).delete(Mockito.any(User.class));
        verify(userRepository,times(1)).findById("1");
        verifyNoMoreInteractions(userRepository);
    }
}

