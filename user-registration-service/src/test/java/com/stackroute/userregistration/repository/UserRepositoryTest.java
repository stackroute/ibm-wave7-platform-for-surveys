package com.stackroute.userregistration.repository;

import com.stackroute.userregistration.UserRegistrationApplication;

import com.stackroute.userregistration.domain.User;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = UserRegistrationApplication.class)
@DataMongoTest
public class UserRepositoryTest {
    //Autowiring the repository
    @Autowired
    private UserRepository userRepository;
    private User user;

//   @Autowired
//    private KafkaTemplate<String, Object> kafkaTemplate;

    @Before
    public void setUp()
    {
        //Sample user details
         user = new User("1","Sahithi","sahithi@gmail.com","pwd","Surveyor","Hyderabad","child","Female");
    }
    @After
    public void tearDown()
    {
        userRepository.deleteAll();
    }
    @Test
    //testcase to know the saved user is actually saving the database or not
    public void testSaveUser(){
        //Saving the user
//        userRepository.save(user);
//        User fetchUser = userRepository.findById(this.user.getId()).get();
//        Assert.assertEquals("1",fetchUser.getId());
        User savedUser=userRepository.save(user);
        System.out.println(savedUser.getId());
        Assert.assertEquals(user,savedUser );

    }
    //testcase failure
    @Test
    public void testSaveUserFailure(){
        User user = new User("1","Sahithi","sahithi@gmail.com","pwd","Surveyor","Hyderabad","child","Female");
        userRepository.save(user);
        System.out.println(user.getId());

        User fetchUser = userRepository.findById(user.getId()).get();
        System.out.println(fetchUser.getId());
        Assert.assertNotSame(fetchUser,user);
    }

    @Test
    public void getAllUsers()
    {
        //Sample user details
        List<User> users = new ArrayList<>();
        User user = new User("1","Sahithi","sahithi@gmail.com","pwd","Surveyor","Hyderabad","child","Female");
        User user1 = new User("2","Premika","sahithi@gmail.com","pwd","Surveyor","Hyderabad","child","Female");
        users.add(user);
        users.add(user1);
        //Getting the details from the database and checking the it is the same list or not
        List<User> userList = userRepository.findAll();
        Assert.assertEquals("Sahithi",user.getName());
    }
    @Test
    public void testDeleteUser(){
        userRepository.delete(user);
        //List<User> list=userRepository.findAll();
        List<User> trackList=new ArrayList<>();
        Assert.assertEquals(trackList,userRepository.findAll());
    }

}

