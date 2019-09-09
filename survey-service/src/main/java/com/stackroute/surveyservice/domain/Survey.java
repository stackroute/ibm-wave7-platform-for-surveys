package com.stackroute.surveyservice.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.Relationship;
import java.util.ArrayList;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@NodeEntity
public class Survey {
    @Id
    private String id;
    private String name;
    private String description;
    private String domain_type;
    @Relationship(type = "BelongsTo", direction = Relationship.UNDIRECTED)
    List<Question> questionList=new ArrayList<>();
    private String respondants;
    private String expiryDate;
    private List<String> location=new ArrayList<>();
    private String gender;
    private String age;
    private String status;
    private int responses;
    private int rewardPoints;
}
