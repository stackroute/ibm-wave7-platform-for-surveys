package com.stackroute.surveyservice.repository;

import com.stackroute.surveyservice.domain.Surveyor;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface SurveyorRepository extends Neo4jRepository<Surveyor,Integer> {
}
