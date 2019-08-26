package com.stackroute.surveyservice.repository;

import com.stackroute.surveyservice.domain.Survey;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyRepository extends MongoRepository<Survey,Integer> {
}
