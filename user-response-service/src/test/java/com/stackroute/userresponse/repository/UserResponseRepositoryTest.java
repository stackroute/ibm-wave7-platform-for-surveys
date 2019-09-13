package com.stackroute.userresponse.repository;

import com.stackroute.userresponse.UserResponseApplication;
import com.stackroute.userresponse.domain.Response;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = UserResponseApplication.class)
@DataMongoTest
public class UserResponseRepositoryTest {
    @Autowired
    ResponseRepository responseRepository;

    public Response response;

    @Before
    public void setUp()
    {
        //Sample response details
         response = new Response("1","average","23","234");
    }
    @After
    public void tearDown()
    {
        responseRepository.deleteAll();
    }

    @Test
    public void testSaveResponses(){
        //Saving the user
        Assert.assertEquals(response, responseRepository.save(response));
    }
    @Test
     public void givenResponseShouldSaveResponseFailure() {
         //act
         Response expectedResponse = new Response("1", "good", "5","34");
         //assert
         Assert.assertNotSame(expectedResponse, responseRepository.save(response));

     }
    @Test
     public void givenResponseShouldReturnListOfAllResponses() {
         //act
         Response response1 = new Response("1", "Average", "45","4");
        Response response2 = new Response("12", "good", "47","8");
         responseRepository.save(response1);
         responseRepository.save(response2);

         List<Response> list = new ArrayList<>();
         list.add(response1);
         list.add(response2);

         List<Response> actualResult = responseRepository.findAll();
         //assert
         Assert.assertEquals(list, actualResult);

     }



}
