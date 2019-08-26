package com.stackroute.userregistration.service;

import com.stackroute.userregistration.domain.User;

import java.util.List;

public interface UserService {
    //Once the user signup those details has to be saved in the database
    public User saveUser(User user);
    //Getting the details of the user
    public List<User> getUsers();
    //Deleting the user
    public User deleteUser(String id);
}
