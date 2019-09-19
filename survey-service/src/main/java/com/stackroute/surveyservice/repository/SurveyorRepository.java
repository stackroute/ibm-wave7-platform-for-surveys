package com.stackroute.surveyservice.repository;

import com.stackroute.surveyservice.domain.Surveyor;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;

import java.util.List;

public interface SurveyorRepository extends Neo4jRepository<Surveyor,String> {

    //returns surveyor based on surveyorid
    @Query("MATCH(s:Surveyor{id:{surveyorId}})-[c:Creates]->(u:Survey)<-[b:BelongsTo]-(q:Question) RETURN s,c,u,b,q")
    Surveyor getSurveyorByIdWithQuestions(String surveyorId);
    @Query("MATCH(s:Surveyor{id:{surveyorId}})-[c:Creates]->(u:Survey) RETURN s,c,u")
    Surveyor getSurveyorById(String surveyorId);

}
