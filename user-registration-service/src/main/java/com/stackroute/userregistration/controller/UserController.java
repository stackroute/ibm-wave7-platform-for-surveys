package com.stackroute.userregistration.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.userregistration.domain.User;
import com.stackroute.userregistration.repository.UserRepository;
import com.stackroute.userregistration.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@ControllerAdvice(basePackages = "com.stackroute.userregistration")
public class UserController {
    //creating the object of the user service to invoke all the methods in the service
    @Autowired
    private UserService userService;

<<<<<<< HEAD:userregistration/src/main/java/com/stackroute/userregistration/controller/UserController.java
    @Autowired
    private KafkaTemplate<String, User> kafkaTemplate;
=======
>>>>>>> 7999bc8a5122f7ef3d7eb42ad75cc3b4410d02e1:user-registration-service/src/main/java/com/stackroute/userregistration/controller/UserController.java

    // Declaration and Intialization of topic name
    private static final String TOPIC = "UserRegistration";
    // handling user request with endpoint passing name


//    User user=new User();

    @Autowired
    private KafkaTemplate<String,User> kafkaTemplate;


    //Constructor of the controller having the userservice parameter
    public UserController(UserService userService) {
        this.userService = userService;
    }

    //This method is used to save the user to the database by the url i.e., user
    @PostMapping("user")
    public ResponseEntity<?> saveUser(@RequestBody User user) {
        user = user;
        //Saving the user and returning the user
        User savedUser = userService.saveUser(user);
        this.kafkaTemplate.send(TOPIC, savedUser);
        return new ResponseEntity<User>(savedUser, HttpStatus.CREATED);

    }


    //To get all the users from the database
    @GetMapping("user")
    public ResponseEntity<?> getAllUsers() {
        //Getting all the users as a list
        return new ResponseEntity<List<User>>(userService.getUsers(), HttpStatus.OK);
    }

    //Deleting the user according to the id
    @DeleteMapping("user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable String id) {
        //deleting the user using the id
        return new ResponseEntity<User>(userService.deleteUser(id), HttpStatus.OK);
    }

<<<<<<< HEAD:user-registration-service/src/main/java/com/stackroute/userregistration/controller/UserController.java
    @PutMapping ("user/{id}")
    public ResponseEntity<?> updateUser(@RequestBody User user,@PathVariable String id) {

        User updateuser = userService.updateUser(user, id);
        return new ResponseEntity<User>(updateuser, HttpStatus.OK);
    }

    @PostMapping("/publish")
    public ResponseEntity<?> post()
    {

//        return kafkaTemplate.send(TOPIC, user).isDone();
        ResponseEntity responseEntity=new ResponseEntity(HttpStatus.OK);
        try {
            kafkaTemplate.send(TOPIC,new ObjectMapper().writeValueAsString(responseEntity));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        Map<Object,Object> model=new HashMap<>();
        model.put("message","published");
        System.out.println("published"+responseEntity);
        return ok(model);
=======

    @PutMapping("user/{id}")
    public ResponseEntity<?> updateUser(@RequestBody User user, @PathVariable String id) {

        User updateuser = userService.updateUser(user, id);
        return new ResponseEntity<User>(updateuser, HttpStatus.OK);

>>>>>>> baedf1945b88d3c0f8d094a658fb961d783bb3a7:userregistration/src/main/java/com/stackroute/userregistration/controller/UserController.java

    }

}

