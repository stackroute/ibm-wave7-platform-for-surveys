package com.stackroute.surveyservice.repository;

import com.stackroute.surveyservice.domain.Survey;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;


@Repository
public interface SurveyRepository extends Neo4jRepository<Survey,Integer> {
    @Query("MATCH (s:Survey)<-[b:BelongsTo]-(q:Question) RETURN s,b,q")
    Collection<Survey> getAllSurveys();
    @Query("MATCH (s:Survey{id:{id}})-[r:BelongsTo]-(:Question) DELETE r")
    void delete(Integer id);


}
