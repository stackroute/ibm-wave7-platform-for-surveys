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

@Autowired
private KafkaTemplate<String, User> kafkaTemplate;

    // Declaration and Intialization of topic name
private static final String TOPIC = "UserRegistration";
    // handling user request with endpoint passing name


   //User user=new User();
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

    @PutMapping("user/{id}")
    public ResponseEntity<?> updateUser(@RequestBody User user, @PathVariable String id) {
        User updateuser = userService.updateUser(user, id);
        return new ResponseEntity<User>(updateuser, HttpStatus.OK);
    }
}

