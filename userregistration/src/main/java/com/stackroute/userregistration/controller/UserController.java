package com.stackroute.userregistration.controller;

import com.stackroute.userregistration.domain.User;
import com.stackroute.userregistration.repository.UserRepository;
import com.stackroute.userregistration.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@ControllerAdvice(basePackages = "com.stackroute.userregistration")
public class UserController {
    //creating the object of the user service to invoke all the methods in the service
    private UserService userService;
    @Autowired
    private KafkaTemplate<String, User> kafkaTemplate;
    // Declaration and Intialization of topic name
    private static final String TOPIC = "KafkaExample";
    // handling user request with endpoint passing name

    User user=new User();
    //Constructor of the controller having the userservice parameter
    public UserController(UserService userService) {
        this.userService = userService;
    }
    //This method is used to save the user to the database by the url i.e., user
    @PostMapping("user")
    public ResponseEntity<?> saveUser(@RequestBody User user)
    {
        //Saving the user and returning the user
        User savedUser=userService.saveUser(user);
        return new ResponseEntity<User>(savedUser,HttpStatus.CREATED);
    }
    //To get all the users from the database
    @GetMapping("user")
    public ResponseEntity<?> getAllUsers()
    {
        //Getting all the users as a list
        return new ResponseEntity<List<User>>(userService.getUsers(),HttpStatus.OK);
    }
    //Deleting the user according to the id
    @DeleteMapping("user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable String id)
    {
        //deleting the user using the id
        return new ResponseEntity<User>(userService.deleteUser(id),HttpStatus.OK);
    }
<<<<<<< HEAD
    @PutMapping ("user/{id}")
    public ResponseEntity<?> updateUser(@RequestBody User user,@PathVariable String id){

        User updateuser=userService.updateUser(user,id);
        return new ResponseEntity<User>(updateuser,HttpStatus.OK);
=======

    @PostMapping("/publish")
    public String post()
    {
        // Sending records to topic
        kafkaTemplate.send(TOPIC, new User(user.getId(),user.getName(),user.getEmail(),user.getPassword()));
        return "published";
>>>>>>> 5b3482a9ee4297469b985be51b5dd9165a0bfe53
    }
}

