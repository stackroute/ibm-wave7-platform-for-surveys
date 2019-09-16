package com.stackroute.surveyservice.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@NodeEntity
@JsonIgnoreProperties(ignoreUnknown = true)
public class Surveyor {
    @Id
    private String id;
    private String name;
    private String email;
    private String location;
    private String role;
    private String ageGroup;
    private String gender;
    @Relationship(type = "Creates", direction = Relationship.UNDIRECTED)
    List<Survey> SurveysList = new ArrayList<>();

    public Surveyor(String id, String name, String email, String location, String role, String ageGroup, String gender, List<Survey> surveysList) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.location = location;
        this.role = role;
        this.ageGroup = ageGroup;
        this.gender = gender;
        SurveysList = surveysList;
    }
}