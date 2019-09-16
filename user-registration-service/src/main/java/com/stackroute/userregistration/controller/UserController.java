package com.stackroute.userregistration.controller;

import com.stackroute.userregistration.domain.User;
import com.stackroute.userregistration.exception.EmailAlreadyExistException;
import com.stackroute.userregistration.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

    //creating the object of the user service to invoke all the methods in the service

    private UserService userService;
    @Autowired
    private KafkaTemplate<String, User> kafkaTemplate;

    // Declaration and Intialization of topic name
    private static final String TOPIC = "UserRegistration";
    // handling user request with endpoint passing name

    //Constructor of the controller having the userservice parameter
   @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    //This method is used to save the user to the database by the url i.e., user
    @PostMapping("user")
    public ResponseEntity<?> saveUser(@RequestBody User user)  {

        //Saving the user and returning the user
        User savedUser;
       try {
            savedUser = userService.saveUser(user);
       } catch (EmailAlreadyExistException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
        }
       this.kafkaTemplate.send(TOPIC, savedUser);
        System.out.println(savedUser);
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

    @GetMapping("user/{id}")
    public ResponseEntity<?> getUserById(@PathVariable String id) {
        User user = userService.getUserById(id);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
    @GetMapping("userByEmail/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {

        return new ResponseEntity<>(userService.findUserByEmail(email), HttpStatus.OK);
    }

    @PostMapping("saveEmail")
    public ResponseEntity<?> saveUserEmail(@RequestBody User user)
    {
        User targetUser = userService.saveUserEmail(user);
        return new ResponseEntity<User>(targetUser, HttpStatus.OK);
    }

    @GetMapping("allMails")
    public ResponseEntity<?> getAllMails()
    {
        return new ResponseEntity<List<String>>( userService.getAllMails(),HttpStatus.OK);
    }

}

