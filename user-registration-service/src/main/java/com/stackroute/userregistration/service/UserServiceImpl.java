package com.stackroute.userregistration.service;

import com.stackroute.userregistration.domain.User;
import com.stackroute.userregistration.exception.EmailAlreadyExistException;
import com.stackroute.userregistration.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    //Creating the object for the user repository in order to connect with the database
    private UserRepository userRepository;

    @Autowired
    private User user;
    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    //This method is use to save the details of the user to the database
    @Override
    public User saveUser(User user) throws EmailAlreadyExistException {
        User savedUser=null;
        //To save the user to the mongodatabase
        if(userRepository.findUserByEmail(user.getEmail())==null) {
            savedUser = userRepository.save(user);
        }
        else
        {
            throw new EmailAlreadyExistException("User with email already exists");
        }//Returning the saved user
        return savedUser;
    }
    //This method is get the details of the user
    @Override
    public List<User> getUsers() {
        //Get the details of the user
        return userRepository.findAll();
    }
    //This method is used to delete the user according to the id
    @Override
    public User deleteUser(String id) {
        //Finding the user with the particular id
        Optional<User> user1=userRepository.findById(id);
        //delete the user
        userRepository.delete(user1.get());
        //Return the deleted user
        return user1.get();
    }


    @Override
    public User updateUser(User user, String id) {

        Optional<User> user1=userRepository.findById(id);
        user.setId(id);
        User modifiedUser=userRepository.save(user);
        return modifiedUser ;
       
    }

    @Override

    public User getUserById(String id) {
        Optional<User> user = userRepository.findById(id);
        return user.get();
    }

    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public User saveUserEmail(User user)
    {
        User user1=userRepository.findUserByEmail(user.getEmail());
        if(user1==null)
        {
            return userRepository.save(user);
        }
        else
            return user1;
    }


    @Override
    public List<String> getAllMails()
    {
        List<User> users = getUsers();
        List<String> emails=new ArrayList<>();
        for(User user:users)
        {
            emails.add(user.getEmail());
        }
        return emails;
    }
}
