package com.stackroute.surveyservice.repository;

import com.stackroute.surveyservice.domain.Question;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends MongoRepository<Question,String> {

}
