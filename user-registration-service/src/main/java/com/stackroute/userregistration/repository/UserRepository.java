package com.stackroute.userregistration.repository;

import com.stackroute.userregistration.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
//Using the mongo repository to store the user details
@Repository
public interface UserRepository extends MongoRepository<User,String> {

    public User findUserByEmail(String email);
}
