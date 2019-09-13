package com.stackroute.surveyservice.repository;

import com.stackroute.surveyservice.domain.Question;
import com.stackroute.surveyservice.domain.Survey;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;


@Repository
public interface SurveyRepository extends Neo4jRepository<Survey,String> {
    @Query("MATCH (s:Survey)<-[b:BelongsTo]-(q:Question) RETURN s,b,q")
    Collection<Survey> getAllSurveys();
    @Query("MATCH (a:Question), (b:Survey) WHERE a.questionId={questionId} AND b.id ={surveyId} CREATE (a)-[: BelongsTo]->(b) RETURN a,b")
    void createBelongsToRelationShip(String surveyId,String questionId);
    @Query("MATCH (s:Survey{id:{id}})-[r:BelongsTo]-(:Question) DELETE r")
    void delete(String id);
    @Query("MATCH (s:Survey{ id:{surveyId}} )<-[b:BelongsTo]-(q:Question) RETURN s,b,q")
    Survey getSurveyById(String surveyId);
    @Query("MATCH (a:Surveyor),(b:Survey) WHERE a.id ={surveyorId} AND b.id ={surveyId} CREATE (a)-[: Creates]->(b) RETURN a,b")
    void createCreatesRelationShip(String surveyId, String surveyorId );
    @Query("MATCH (q:Question{domainType:{domainType}})-[:BelongsTo]->(s:Survey) WITH q,count(s) as rels, collect(s) as surveys WHERE rels >= 1 RETURN q ORDER BY rels DESC LIMIT 3")
    List<Question> getRecommendedQuestions(String domainType);
    @Query("MATCH (q:Question{domainType:{domainType}})-[:BelongsTo]->(s:Survey) WITH q,count(s) as rels, collect(s) as surveys WHERE rels >= 1 RETURN q ORDER BY rels DESC LIMIT 20")
    List<Question> getRecommendedQuestionBasedOnDomain(String domainType);
    @Query("Match (s:Survey{domain_type:{domainType}}) return s")
    List<Survey> getRecommendedSurveyBasedOnDomain(String domainType);


}
