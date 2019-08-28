package com.stackroute.surveyservice.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "question")
public class Question {
    @Id
    //It generates the id automatically
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String question_id;
    private String quesiontag;
    private List<String> choices;
    private String survey_id;

}
