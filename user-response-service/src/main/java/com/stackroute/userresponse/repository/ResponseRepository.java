package com.stackroute.userresponse.repository;

import com.stackroute.userresponse.domain.Response;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponseRepository extends MongoRepository<Response,String> {
}
