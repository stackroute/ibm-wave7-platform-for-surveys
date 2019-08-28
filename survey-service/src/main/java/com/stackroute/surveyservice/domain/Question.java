package com.stackroute.surveyservice.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;


import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@NodeEntity
public class Question {
    @Id
    private Long question_id;
    private String quesiontag;
    private List<String> choices;
    private Integer surveyId;
}
