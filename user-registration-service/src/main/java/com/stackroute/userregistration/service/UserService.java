package com.stackroute.userregistration.service;

import com.stackroute.userregistration.domain.User;
import com.stackroute.userregistration.exception.EmailAlreadyExistException;

import java.util.List;

public interface UserService {
    //Once the user signup those details has to be saved in the database
    public User saveUser(User user) throws EmailAlreadyExistException;
    //Getting the details of the user
    public List<User> getUsers();
    //Deleting the user
    public User deleteUser(String id);
    //updating the user
    public User updateUser(User user,String id);
    public User getUserById(String id);
    public User findUserByEmail(String email);



    public List<String> getAllMails();
    public User saveUserEmail(User user);

}
