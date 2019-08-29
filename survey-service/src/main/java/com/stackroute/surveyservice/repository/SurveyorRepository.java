package com.stackroute.surveyservice.repository;

import com.stackroute.surveyservice.domain.Surveyor;
import org.springframework.data.neo4j.repository.Neo4jRepository;

import java.util.List;

public interface SurveyorRepository extends Neo4jRepository<Surveyor,String> {
   // List<Surveyor> getAllSurveyors();
}
