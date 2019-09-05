package com.stackroute.userregistration.service;

import com.stackroute.userregistration.domain.User;
import com.stackroute.userregistration.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    //Creating the object for the user repository in order to connect with the database
    @Autowired
    private UserRepository userRepository;
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    //This method is use to save the details of the user to the database
    @Override
    public User saveUser(User user) {
        //To save the user to the mongodatabase
        User savedUser=userRepository.save(user);
        //Returning the saved user
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


}
